import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('renderState is exported', () => {
	assert.ok(
		'renderState' in solution,
		'🚨 Make sure you export "renderState" - add: export { renderState, ... }',
	)
})

await test('describePayment is exported', () => {
	assert.ok(
		'describePayment' in solution,
		'🚨 Make sure you export "describePayment" - add: export { describePayment, ... }',
	)
})

await test('renderState should handle loading state', () => {
	assert.strictEqual(
		solution.renderState({ status: 'loading' }),
		'Loading...',
		'🚨 renderState should return "Loading..." for loading state - check your discriminated union narrowing',
	)
})

await test('renderState should handle success state', () => {
	assert.strictEqual(
		solution.renderState({ status: 'success', data: ['a', 'b', 'c'] }),
		'Loaded 3 items',
		'🚨 renderState should return item count for success state - check your discriminated union narrowing',
	)
	assert.strictEqual(
		solution.renderState({ status: 'success', data: [] }),
		'Loaded 0 items',
		'🚨 renderState should handle empty data arrays - check your discriminated union narrowing',
	)
})

await test('renderState should handle error state', () => {
	assert.strictEqual(
		solution.renderState({ status: 'error', error: 'Network failed' }),
		'Error: Network failed',
		'🚨 renderState should return error message for error state - check your discriminated union narrowing',
	)
})

await test('describePayment should describe credit cards', () => {
	const card = { type: 'credit_card' as const, last4: '4242', expiry: '12/25' }
	assert.strictEqual(
		solution.describePayment(card),
		'Card ending in 4242 (exp: 12/25)',
		'🚨 describePayment should format credit cards correctly - check your discriminated union narrowing',
	)
})

await test('describePayment should describe PayPal', () => {
	const paypal = { type: 'paypal' as const, email: 'user@example.com' }
	assert.strictEqual(
		solution.describePayment(paypal),
		'PayPal: user@example.com',
		'🚨 describePayment should format PayPal payments correctly - check your discriminated union narrowing',
	)
})

await test('describePayment should describe bank transfers', () => {
	const bank = { type: 'bank' as const, accountNumber: '123456789' }
	assert.strictEqual(
		solution.describePayment(bank),
		'Bank account: 123456789',
		'🚨 describePayment should format bank transfers correctly - check your discriminated union narrowing',
	)
})

await test('ApiState should be a discriminated union', () => {
	const loading = { status: 'loading' as const }
	const success = { status: 'success' as const, data: [] }
	const error = { status: 'error' as const, error: 'test' }
	const apiStateStatuses = [loading.status, success.status, error.status]
	assert.strictEqual(
		apiStateStatuses[0],
		'loading',
		'🚨 loading.status should be "loading" - verify your ApiState discriminated union',
	)
	assert.strictEqual(
		apiStateStatuses[1],
		'success',
		'🚨 success.status should be "success" - verify your ApiState discriminated union',
	)
	assert.strictEqual(
		apiStateStatuses[2],
		'error',
		'🚨 error.status should be "error" - verify your ApiState discriminated union',
	)
})
