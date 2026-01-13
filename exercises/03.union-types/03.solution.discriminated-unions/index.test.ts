import { testStep, expect } from '@epic-web/workshop-utils/test'
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
	type BankTransfer} from './index.ts'

await testStep('renderState should handle loading state', async () => {
	const loading: LoadingState = { status: 'loading' }
	expect(
		renderState(loading),
		'🚨 renderState should return "Loading..." for loading state - check your discriminated union narrowing',
	).toBe('Loading...')
})

await testStep('renderState should handle success state', async () => {
	const success: SuccessState = { status: 'success', data: ['a', 'b', 'c'] }
	expect(
		renderState(success),
		'🚨 renderState should return item count for success state - check your discriminated union narrowing',
	).toBe('Loaded 3 items')
	expect(
		renderState({ status: 'success', data: [] }),
		'🚨 renderState should handle empty data arrays - check your discriminated union narrowing',
	).toBe('Loaded 0 items')
})

await testStep('renderState should handle error state', async () => {
	const error: ErrorState = { status: 'error', error: 'Network failed' }
	expect(
		renderState(error),
		'🚨 renderState should return error message for error state - check your discriminated union narrowing',
	).toBe('Error: Network failed')
})

await testStep('describePayment should describe credit cards', async () => {
	const card: CreditCard = {
		type: 'credit_card',
		last4: '4242',
		expiry: '12/25',
	}
	expect(
		describePayment(card),
		'🚨 describePayment should format credit cards correctly - check your discriminated union narrowing',
	).toBe('Card ending in 4242 (exp: 12/25)')
})

await testStep('describePayment should describe PayPal', async () => {
	const paypal: PayPal = {
		type: 'paypal',
		email: 'user@example.com',
	}
	expect(
		describePayment(paypal),
		'🚨 describePayment should format PayPal payments correctly - check your discriminated union narrowing',
	).toBe('PayPal: user@example.com')
})

await testStep('describePayment should describe bank transfers', async () => {
	const bank: BankTransfer = {
		type: 'bank',
		accountNumber: '123456789',
	}
	expect(
		describePayment(bank),
		'🚨 describePayment should format bank transfers correctly - check your discriminated union narrowing',
	).toBe('Bank account: 123456789')
})

await testStep('ApiState should be a discriminated union', async () => {
	const loading: ApiState = { status: 'loading' }
	const success: ApiState = { status: 'success', data: ['test'] }
	const error: ApiState = { status: 'error', error: 'test error' }
	expect(
		loading.status,
		'🚨 loading.status should be "loading" - verify your ApiState discriminated union',
	).toBe('loading')
	expect(
		success.status,
		'🚨 success.status should be "success" - verify your ApiState discriminated union',
	).toBe('success')
	expect(
		error.status,
		'🚨 error.status should be "error" - verify your ApiState discriminated union',
	).toBe('error')
})
