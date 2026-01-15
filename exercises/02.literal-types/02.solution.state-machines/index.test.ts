import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { orderTransitions, playerTransitions, orderStates, playerStates } =
	JSON.parse(jsonLine.replace('Results:', '').trim())

await test('advanceOrder should transition pending to processing', () => {
	assert.strictEqual(
		orderTransitions[0],
		'processing',
		'🚨 advanceOrder should transition from "pending" to "processing" - check your state machine logic',
	)
})

await test('advanceOrder should transition processing to shipped', () => {
	assert.strictEqual(
		orderTransitions[1],
		'shipped',
		'🚨 advanceOrder should transition from "processing" to "shipped" - check your state machine logic',
	)
})

await test('advanceOrder should transition shipped to delivered', () => {
	assert.strictEqual(
		orderTransitions[2],
		'delivered',
		'🚨 advanceOrder should transition from "shipped" to "delivered" - check your state machine logic',
	)
})

await test('advanceOrder should keep delivered state unchanged', () => {
	assert.strictEqual(
		orderTransitions[3],
		'delivered',
		'🚨 advanceOrder should keep "delivered" state unchanged - check your terminal state handling',
	)
})

await test('advanceOrder should keep cancelled state unchanged', () => {
	assert.strictEqual(
		orderTransitions[4],
		'cancelled',
		'🚨 advanceOrder should keep "cancelled" state unchanged - check your terminal state handling',
	)
})

await test('playerAction play should set state to playing', () => {
	assert.strictEqual(
		playerTransitions[0],
		'playing',
		'🚨 playerAction "play" should set state to "playing" from "stopped" - check your state transition logic',
	)
	assert.strictEqual(
		playerTransitions[1],
		'playing',
		'🚨 playerAction "play" should set state to "playing" from "paused" - check your state transition logic',
	)
	assert.strictEqual(
		playerTransitions[2],
		'playing',
		'🚨 playerAction "play" should keep "playing" state - check your state transition logic',
	)
})

await test('playerAction pause should only work from playing', () => {
	assert.strictEqual(
		playerTransitions[3],
		'paused',
		'🚨 playerAction "pause" should transition from "playing" to "paused" - check your state transition logic',
	)
	assert.strictEqual(
		playerTransitions[4],
		'stopped',
		'🚨 playerAction "pause" should not change "stopped" state - check your state transition logic',
	)
	assert.strictEqual(
		playerTransitions[5],
		'paused',
		'🚨 playerAction "pause" should keep "paused" state - check your state transition logic',
	)
})

await test('playerAction stop should always set state to stopped', () => {
	assert.strictEqual(
		playerTransitions[6],
		'stopped',
		'🚨 playerAction "stop" should set state to "stopped" - check your state transition logic',
	)
	assert.strictEqual(
		playerTransitions[7],
		'stopped',
		'🚨 playerAction "stop" should transition from "playing" to "stopped" - check your state transition logic',
	)
	assert.strictEqual(
		playerTransitions[8],
		'stopped',
		'🚨 playerAction "stop" should transition from "paused" to "stopped" - check your state transition logic',
	)
})

await test('OrderState should be a valid literal type', () => {
	orderStates.forEach((state: string) => {
		assert.ok(
			['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(
				state,
			),
			'🚨 state should be one of the valid OrderState literal values - verify your OrderState type definition',
		)
	})
})

await test('PlayerState should be a valid literal type', () => {
	playerStates.forEach((state: string) => {
		assert.ok(
			['stopped', 'playing', 'paused'].includes(state),
			'🚨 state should be one of the valid PlayerState literal values - verify your PlayerState type definition',
		)
	})
})
