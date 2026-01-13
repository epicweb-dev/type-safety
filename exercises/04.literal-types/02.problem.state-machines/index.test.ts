import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	advanceOrder,
	playerAction,
	type OrderState,
	type PlayerState,
	type PlayerAction,
} from './index.ts'

await test('advanceOrder should transition pending to processing', () => {
	assert.strictEqual(
		advanceOrder('pending'),
		'processing',
		'🚨 advanceOrder should transition from "pending" to "processing" - check your state machine logic',
	)
})

await test('advanceOrder should transition processing to shipped', () => {
	assert.strictEqual(
		advanceOrder('processing'),
		'shipped',
		'🚨 advanceOrder should transition from "processing" to "shipped" - check your state machine logic',
	)
})

await test('advanceOrder should transition shipped to delivered', () => {
	assert.strictEqual(
		advanceOrder('shipped'),
		'delivered',
		'🚨 advanceOrder should transition from "shipped" to "delivered" - check your state machine logic',
	)
})

await test('advanceOrder should keep delivered state unchanged', () => {
	assert.strictEqual(
		advanceOrder('delivered'),
		'delivered',
		'🚨 advanceOrder should keep "delivered" state unchanged - check your terminal state handling',
	)
})

await test('advanceOrder should keep cancelled state unchanged', () => {
	assert.strictEqual(
		advanceOrder('cancelled'),
		'cancelled',
		'🚨 advanceOrder should keep "cancelled" state unchanged - check your terminal state handling',
	)
})

await test('playerAction play should set state to playing', () => {
	assert.strictEqual(
		playerAction('stopped', 'play'),
		'playing',
		'🚨 playerAction "play" should set state to "playing" from "stopped" - check your state transition logic',
	)
	assert.strictEqual(
		playerAction('paused', 'play'),
		'playing',
		'🚨 playerAction "play" should set state to "playing" from "paused" - check your state transition logic',
	)
	assert.strictEqual(
		playerAction('playing', 'play'),
		'playing',
		'🚨 playerAction "play" should keep "playing" state - check your state transition logic',
	)
})

await test('playerAction pause should only work from playing', () => {
	assert.strictEqual(
		playerAction('playing', 'pause'),
		'paused',
		'🚨 playerAction "pause" should transition from "playing" to "paused" - check your state transition logic',
	)
	assert.strictEqual(
		playerAction('stopped', 'pause'),
		'stopped',
		'🚨 playerAction "pause" should not change "stopped" state - check your state transition logic',
	)
	assert.strictEqual(
		playerAction('paused', 'pause'),
		'paused',
		'🚨 playerAction "pause" should keep "paused" state - check your state transition logic',
	)
})

await test('playerAction stop should always set state to stopped', () => {
	assert.strictEqual(
		playerAction('stopped', 'stop'),
		'stopped',
		'🚨 playerAction "stop" should set state to "stopped" - check your state transition logic',
	)
	assert.strictEqual(
		playerAction('playing', 'stop'),
		'stopped',
		'🚨 playerAction "stop" should transition from "playing" to "stopped" - check your state transition logic',
	)
	assert.strictEqual(
		playerAction('paused', 'stop'),
		'stopped',
		'🚨 playerAction "stop" should transition from "paused" to "stopped" - check your state transition logic',
	)
})

await test('OrderState should be a valid literal type', () => {
	const states: OrderState[] = [
		'pending',
		'processing',
		'shipped',
		'delivered',
		'cancelled',
	]
	states.forEach((state) => {
		assert.ok(
			['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(
				state,
			),
			'🚨 state should be one of the valid OrderState literal values - verify your OrderState type definition',
		)
	})
})

await test('PlayerState should be a valid literal type', () => {
	const states: PlayerState[] = ['stopped', 'playing', 'paused']
	states.forEach((state) => {
		assert.ok(
			['stopped', 'playing', 'paused'].includes(state),
			'🚨 state should be one of the valid PlayerState literal values - verify your PlayerState type definition',
		)
	})
})
