import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import {
	createSuccess,
	createError,
	makePair,
	type Result,
	type Pair,
	type ApiResponse,
} from './index.ts'

await testStep('createSuccess should create success result', async () => {
	const result = createSuccess('test data')
	expect(result.success).toBe(true)
	if (result.success) {
		expect(result.data).toBe('test data')
	}
})

await testStep('createSuccess should work with different types', async () => {
	const stringResult = createSuccess('hello')
	const numberResult = createSuccess(42)
	const objectResult = createSuccess({ id: 1, name: 'Alice' })

	expect(stringResult.success).toBe(true)
	expect(numberResult.success).toBe(true)
	expect(objectResult.success).toBe(true)

	if (stringResult.success) expect(stringResult.data).toBe('hello')
	if (numberResult.success) expect(numberResult.data).toBe(42)
	if (objectResult.success) expect(objectResult.data).toEqual({ id: 1, name: 'Alice' })
})

await testStep('createError should create error result', async () => {
	const result = createError('error message')
	expect(result.success).toBe(false)
	if (!result.success) {
		expect(result.error).toBe('error message')
	}
})

await testStep('makePair should create pairs of different types', async () => {
	const pair1 = makePair('hello', 42)
	const pair2 = makePair(1, 'test')
	const pair3 = makePair(true, false)

	expect(pair1.first).toBe('hello')
	expect(pair1.second).toBe(42)
	expect(pair2.first).toBe(1)
	expect(pair2.second).toBe('test')
	expect(pair3.first).toBe(true)
	expect(pair3.second).toBe(false)
})

await testStep('Result type should discriminate correctly', async () => {
	const success: Result<string> = { success: true, data: 'test' }
	const error: Result<string> = { success: false, error: 'error' }

	expect(success.success).toBe(true)
	expect(error.success).toBe(false)

	if (success.success) {
		expect(success.data).toBe('test')
	}
	if (!error.success) {
		expect(error.error).toBe('error')
	}
})

await testStep('Pair type should hold correct types', async () => {
	const pair: Pair<string, number> = { first: 'test', second: 42 }
	expect(pair.first).toBe('test')
	expect(pair.second).toBe(42)
	expect(typeof pair.first).toBe('string')
	expect(typeof pair.second).toBe('number')
})

await testStep('ApiResponse type should have correct structure', async () => {
	const response: ApiResponse<{ id: number }> = {
		data: { id: 1 },
		status: 200,
		timestamp: new Date(),
	}
	expect(response.data.id).toBe(1)
	expect(response.status).toBe(200)
	expect(response.timestamp).toBeInstanceOf(Date)
})
