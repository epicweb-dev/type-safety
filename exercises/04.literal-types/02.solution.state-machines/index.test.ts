import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	advanceOrder,
	playerAction,
	type OrderState,
	type PlayerState,
	type PlayerAction,
} from './index.ts'

await testStep(
	'advanceOrder should transition pending to processing',
	async () => {
		expect(
			advanceOrder('pending'),
			'🚨 advanceOrder should transition from "pending" to "processing" - check your state machine logic',
		).toBe('processing')
	},
)

await testStep(
	'advanceOrder should transition processing to shipped',
	async () => {
		expect(
			advanceOrder('processing'),
			'🚨 advanceOrder should transition from "processing" to "shipped" - check your state machine logic',
		).toBe('shipped')
	},
)

await testStep(
	'advanceOrder should transition shipped to delivered',
	async () => {
		expect(
			advanceOrder('shipped'),
			'🚨 advanceOrder should transition from "shipped" to "delivered" - check your state machine logic',
		).toBe('delivered')
	},
)

await testStep(
	'advanceOrder should keep delivered state unchanged',
	async () => {
		expect(
			advanceOrder('delivered'),
			'🚨 advanceOrder should keep "delivered" state unchanged - check your terminal state handling',
		).toBe('delivered')
	},
)

await testStep(
	'advanceOrder should keep cancelled state unchanged',
	async () => {
		expect(
			advanceOrder('cancelled'),
			'🚨 advanceOrder should keep "cancelled" state unchanged - check your terminal state handling',
		).toBe('cancelled')
	},
)

await testStep('playerAction play should set state to playing', async () => {
	expect(
		playerAction('stopped', 'play'),
		'🚨 playerAction "play" should set state to "playing" from "stopped" - check your state transition logic',
	).toBe('playing')
	expect(
		playerAction('paused', 'play'),
		'🚨 playerAction "play" should set state to "playing" from "paused" - check your state transition logic',
	).toBe('playing')
	expect(
		playerAction('playing', 'play'),
		'🚨 playerAction "play" should keep "playing" state - check your state transition logic',
	).toBe('playing')
})

await testStep('playerAction pause should only work from playing', async () => {
	expect(
		playerAction('playing', 'pause'),
		'🚨 playerAction "pause" should transition from "playing" to "paused" - check your state transition logic',
	).toBe('paused')
	expect(
		playerAction('stopped', 'pause'),
		'🚨 playerAction "pause" should not change "stopped" state - check your state transition logic',
	).toBe('stopped')
	expect(
		playerAction('paused', 'pause'),
		'🚨 playerAction "pause" should keep "paused" state - check your state transition logic',
	).toBe('paused')
})

await testStep(
	'playerAction stop should always set state to stopped',
	async () => {
		expect(
			playerAction('stopped', 'stop'),
			'🚨 playerAction "stop" should set state to "stopped" - check your state transition logic',
		).toBe('stopped')
		expect(
			playerAction('playing', 'stop'),
			'🚨 playerAction "stop" should transition from "playing" to "stopped" - check your state transition logic',
		).toBe('stopped')
		expect(
			playerAction('paused', 'stop'),
			'🚨 playerAction "stop" should transition from "paused" to "stopped" - check your state transition logic',
		).toBe('stopped')
	},
)

await testStep('OrderState should be a valid literal type', async () => {
	const states: OrderState[] = [
		'pending',
		'processing',
		'shipped',
		'delivered',
		'cancelled',
	]
	states.forEach((state) => {
		expect(
			['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
			'🚨 state should be one of the valid OrderState literal values - verify your OrderState type definition',
		).toContain(state)
	})
})

await testStep('PlayerState should be a valid literal type', async () => {
	const states: PlayerState[] = ['stopped', 'playing', 'paused']
	states.forEach((state) => {
		expect(
			['stopped', 'playing', 'paused'],
			'🚨 state should be one of the valid PlayerState literal values - verify your PlayerState type definition',
		).toContain(state)
	})
})
