import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import {
	advanceOrder,
	playerAction,
	type OrderState,
	type PlayerState,
	type PlayerAction,
} from './index.ts'

await testStep('advanceOrder should transition pending to processing', async () => {
	expect(advanceOrder('pending')).toBe('processing')
})

await testStep('advanceOrder should transition processing to shipped', async () => {
	expect(advanceOrder('processing')).toBe('shipped')
})

await testStep('advanceOrder should transition shipped to delivered', async () => {
	expect(advanceOrder('shipped')).toBe('delivered')
})

await testStep('advanceOrder should keep delivered state unchanged', async () => {
	expect(advanceOrder('delivered')).toBe('delivered')
})

await testStep('advanceOrder should keep cancelled state unchanged', async () => {
	expect(advanceOrder('cancelled')).toBe('cancelled')
})

await testStep('playerAction play should set state to playing', async () => {
	expect(playerAction('stopped', 'play')).toBe('playing')
	expect(playerAction('paused', 'play')).toBe('playing')
	expect(playerAction('playing', 'play')).toBe('playing')
})

await testStep('playerAction pause should only work from playing', async () => {
	expect(playerAction('playing', 'pause')).toBe('paused')
	expect(playerAction('stopped', 'pause')).toBe('stopped')
	expect(playerAction('paused', 'pause')).toBe('paused')
})

await testStep('playerAction stop should always set state to stopped', async () => {
	expect(playerAction('stopped', 'stop')).toBe('stopped')
	expect(playerAction('playing', 'stop')).toBe('stopped')
	expect(playerAction('paused', 'stop')).toBe('stopped')
})

await testStep('OrderState should be a valid literal type', async () => {
	const states: OrderState[] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
	states.forEach((state) => {
		expect(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).toContain(state)
	})
})

await testStep('PlayerState should be a valid literal type', async () => {
	const states: PlayerState[] = ['stopped', 'playing', 'paused']
	states.forEach((state) => {
		expect(['stopped', 'playing', 'paused']).toContain(state)
	})
})
