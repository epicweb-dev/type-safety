import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	renderState,
	describePayment,
	type ApiState,
	type LoadingState,
	type SuccessState,
	type ErrorState,
	type PaymentMethod,
	type CreditCard,
	type PayPal,
	type BankTransfer,
} from './index.ts'

await test('renderState should handle loading state', () => {
	const loading: LoadingState = { status: 'loading' }
	assert.strictEqual(
		renderState(loading),
		'Loading...',
		'🚨 renderState should return "Loading..." for loading state - check your discriminated union narrowing',
	)
})

await test('renderState should handle success state', () => {
	const success: SuccessState = { status: 'success', data: ['a', 'b', 'c'] }
	assert.strictEqual(
		renderState(success),
		'Loaded 3 items',
		'🚨 renderState should return item count for success state - check your discriminated union narrowing',
	)
	assert.strictEqual(
		renderState({ status: 'success', data: [] }),
		'Loaded 0 items',
		'🚨 renderState should handle empty data arrays - check your discriminated union narrowing',
	)
})

await test('renderState should handle error state', () => {
	const error: ErrorState = { status: 'error', error: 'Network failed' }
	assert.strictEqual(
		renderState(error),
		'Error: Network failed',
		'🚨 renderState should return error message for error state - check your discriminated union narrowing',
	)
})

await test('describePayment should describe credit cards', () => {
	const card: CreditCard = {
		type: 'credit_card',
		last4: '4242',
		expiry: '12/25',
	}
	assert.strictEqual(
		describePayment(card),
		'Card ending in 4242 (exp: 12/25)',
		'🚨 describePayment should format credit cards correctly - check your discriminated union narrowing',
	)
})

await test('describePayment should describe PayPal', () => {
	const paypal: PayPal = {
		type: 'paypal',
		email: 'user@example.com',
	}
	assert.strictEqual(
		describePayment(paypal),
		'PayPal: user@example.com',
		'🚨 describePayment should format PayPal payments correctly - check your discriminated union narrowing',
	)
})

await test('describePayment should describe bank transfers', () => {
	const bank: BankTransfer = {
		type: 'bank',
		accountNumber: '123456789',
	}
	assert.strictEqual(
		describePayment(bank),
		'Bank account: 123456789',
		'🚨 describePayment should format bank transfers correctly - check your discriminated union narrowing',
	)
})

await test('ApiState should be a discriminated union', () => {
	const loading: ApiState = { status: 'loading' }
	const success: ApiState = { status: 'success', data: ['test'] }
	const error: ApiState = { status: 'error', error: 'test error' }
	assert.strictEqual(
		loading.status,
		'loading',
		'🚨 loading.status should be "loading" - verify your ApiState discriminated union',
	)
	assert.strictEqual(
		success.status,
		'success',
		'🚨 success.status should be "success" - verify your ApiState discriminated union',
	)
	assert.strictEqual(
		error.status,
		'error',
		'🚨 error.status should be "error" - verify your ApiState discriminated union',
	)
})
