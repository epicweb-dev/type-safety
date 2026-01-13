import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	createSuccess,
	createError,
	makePair,
	type Result,
	type Pair,
	type ApiResponse} from './index.ts'

await testStep('createSuccess should create success result', async () => {
	const result = createSuccess('test data')
	expect(
		result.success,
		'🚨 createSuccess should create a success result - check your generic Result type',
	).toBe(true)
	if (result.success) {
		expect(
			result.data,
			'🚨 result.data should contain the success data - check your generic Result type',
		).toBe('test data')
	}
})

await testStep('createSuccess should work with different types', async () => {
	const stringResult = createSuccess('hello')
	const numberResult = createSuccess(42)
	const objectResult = createSuccess({ id: 1, name: 'Alice' })

	expect(
		stringResult.success,
		'🚨 createSuccess should work with string types - check your generic Result type',
	).toBe(true)
	expect(
		numberResult.success,
		'🚨 createSuccess should work with number types - check your generic Result type',
	).toBe(true)
	expect(
		objectResult.success,
		'🚨 createSuccess should work with object types - check your generic Result type',
	).toBe(true)

	if (stringResult.success)
		expect(
			stringResult.data,
			'🚨 stringResult.data should be "hello" - verify generic type inference',
		).toBe('hello')
	if (numberResult.success)
		expect(
			numberResult.data,
			'🚨 numberResult.data should be 42 - verify generic type inference',
		).toBe(42)
	if (objectResult.success)
		expect(
			objectResult.data,
			'🚨 objectResult.data should match the input object - verify generic type inference',
		).toEqual({ id: 1, name: 'Alice' })
})

await testStep('createError should create error result', async () => {
	const result = createError('error message')
	expect(
		result.success,
		'🚨 createError should create an error result - check your generic Result type',
	).toBe(false)
	if (!result.success) {
		expect(
			result.error,
			'🚨 result.error should contain the error message - check your generic Result type',
		).toBe('error message')
	}
})

await testStep('makePair should create pairs of different types', async () => {
	const pair1 = makePair('hello', 42)
	const pair2 = makePair(1, 'test')
	const pair3 = makePair(true, false)

	expect(
		pair1.first,
		'🚨 pair1.first should be "hello" - check your generic Pair type',
	).toBe('hello')
	expect(
		pair1.second,
		'🚨 pair1.second should be 42 - check your generic Pair type',
	).toBe(42)
	expect(
		pair2.first,
		'🚨 pair2.first should be 1 - check your generic Pair type',
	).toBe(1)
	expect(
		pair2.second,
		'🚨 pair2.second should be "test" - check your generic Pair type',
	).toBe('test')
	expect(
		pair3.first,
		'🚨 pair3.first should be true - check your generic Pair type',
	).toBe(true)
	expect(
		pair3.second,
		'🚨 pair3.second should be false - check your generic Pair type',
	).toBe(false)
})

await testStep('Result type should discriminate correctly', async () => {
	const success: Result<string> = { success: true, data: 'test' }
	const error: Result<string> = { success: false, error: 'error' }

	expect(
		success.success,
		'🚨 success.success should be true - verify your Result discriminated union',
	).toBe(true)
	expect(
		error.success,
		'🚨 error.success should be false - verify your Result discriminated union',
	).toBe(false)

	if (success.success) {
		expect(
			success.data,
			'🚨 success.data should be accessible - verify your Result discriminated union',
		).toBe('test')
	}
	if (!error.success) {
		expect(
			error.error,
			'🚨 error.error should be accessible - verify your Result discriminated union',
		).toBe('error')
	}
})

await testStep('Pair type should hold correct types', async () => {
	const pair: Pair<string, number> = { first: 'test', second: 42 }
	expect(
		pair.first,
		'🚨 pair.first should be "test" - verify your generic Pair type preserves types',
	).toBe('test')
	expect(
		pair.second,
		'🚨 pair.second should be 42 - verify your generic Pair type preserves types',
	).toBe(42)
	expect(
		typeof pair.first,
		'🚨 pair.first should be type "string" - verify your generic Pair type preserves types',
	).toBe('string')
	expect(
		typeof pair.second,
		'🚨 pair.second should be type "number" - verify your generic Pair type preserves types',
	).toBe('number')
})

await testStep('ApiResponse type should have correct structure', async () => {
	const response: ApiResponse<{ id: number }> = {
		data: { id: 1 },
		status: 200,
		timestamp: new Date(),
	}
	expect(
		response.data.id,
		'🚨 response.data.id should be 1 - verify your generic ApiResponse type',
	).toBe(1)
	expect(
		response.status,
		'🚨 response.status should be 200 - verify your ApiResponse type',
	).toBe(200)
	expect(
		response.timestamp,
		'🚨 response.timestamp should be a Date instance - verify your ApiResponse type',
	).toBeInstanceOf(Date)
})
