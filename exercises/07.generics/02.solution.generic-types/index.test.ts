import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const {
	createSuccess,
	createError,
	makePair,
	resultSamples,
	pairSample,
	apiResponseSample,
} = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('createSuccess should create success result', () => {
	const result = createSuccess[0]
	assert.strictEqual(
		result.success,
		true,
		'🚨 createSuccess should create a success result - check your generic Result type',
	)
	if (result.success) {
		assert.strictEqual(
			result.data,
			'test data',
			'🚨 result.data should contain the success data - check your generic Result type',
		)
	}
})

await test('createSuccess should work with different types', () => {
	const stringResult = createSuccess[1]
	const numberResult = createSuccess[2]
	const objectResult = createSuccess[3]

	assert.strictEqual(
		stringResult.success,
		true,
		'🚨 createSuccess should work with string types - check your generic Result type',
	)
	assert.strictEqual(
		numberResult.success,
		true,
		'🚨 createSuccess should work with number types - check your generic Result type',
	)
	assert.strictEqual(
		objectResult.success,
		true,
		'🚨 createSuccess should work with object types - check your generic Result type',
	)

	if (stringResult.success)
		assert.strictEqual(
			stringResult.data,
			'hello',
			'🚨 stringResult.data should be "hello" - verify generic type inference',
		)
	if (numberResult.success)
		assert.strictEqual(
			numberResult.data,
			42,
			'🚨 numberResult.data should be 42 - verify generic type inference',
		)
	if (objectResult.success)
		assert.deepStrictEqual(
			objectResult.data,
			{ id: 1, name: 'Alice' },
			'🚨 objectResult.data should match the input object - verify generic type inference',
		)
})

await test('createError should create error result', () => {
	const result = createError[0]
	assert.strictEqual(
		result.success,
		false,
		'🚨 createError should create an error result - check your generic Result type',
	)
	if (!result.success) {
		assert.strictEqual(
			result.error,
			'error message',
			'🚨 result.error should contain the error message - check your generic Result type',
		)
	}
})

await test('makePair should create pairs of different types', () => {
	const pair1 = makePair[0]
	const pair2 = makePair[1]
	const pair3 = makePair[2]

	assert.strictEqual(
		pair1.first,
		'hello',
		'🚨 pair1.first should be "hello" - check your generic Pair type',
	)
	assert.strictEqual(
		pair1.second,
		42,
		'🚨 pair1.second should be 42 - check your generic Pair type',
	)
	assert.strictEqual(
		pair2.first,
		1,
		'🚨 pair2.first should be 1 - check your generic Pair type',
	)
	assert.strictEqual(
		pair2.second,
		'test',
		'🚨 pair2.second should be "test" - check your generic Pair type',
	)
	assert.strictEqual(
		pair3.first,
		true,
		'🚨 pair3.first should be true - check your generic Pair type',
	)
	assert.strictEqual(
		pair3.second,
		false,
		'🚨 pair3.second should be false - check your generic Pair type',
	)
})

await test('Result type should discriminate correctly', () => {
	const success = resultSamples.success
	const error = resultSamples.error

	assert.strictEqual(
		success.success,
		true,
		'🚨 success.success should be true - verify your Result discriminated union',
	)
	assert.strictEqual(
		error.success,
		false,
		'🚨 error.success should be false - verify your Result discriminated union',
	)

	if (success.success) {
		assert.strictEqual(
			success.data,
			'test',
			'🚨 success.data should be accessible - verify your Result discriminated union',
		)
	}
	if (!error.success) {
		assert.strictEqual(
			error.error,
			'error',
			'🚨 error.error should be accessible - verify your Result discriminated union',
		)
	}
})

await test('Pair type should hold correct types', () => {
	const pair = pairSample
	assert.strictEqual(
		pair.first,
		'test',
		'🚨 pair.first should be "test" - verify your generic Pair type preserves types',
	)
	assert.strictEqual(
		pair.second,
		42,
		'🚨 pair.second should be 42 - verify your generic Pair type preserves types',
	)
	assert.strictEqual(
		typeof pair.first,
		'string',
		'🚨 pair.first should be type "string" - verify your generic Pair type preserves types',
	)
	assert.strictEqual(
		typeof pair.second,
		'number',
		'🚨 pair.second should be type "number" - verify your generic Pair type preserves types',
	)
})

await test('ApiResponse type should have correct structure', () => {
	const response = apiResponseSample
	assert.strictEqual(
		response.data.id,
		1,
		'🚨 response.data.id should be 1 - verify your generic ApiResponse type',
	)
	assert.strictEqual(
		response.status,
		200,
		'🚨 response.status should be 200 - verify your ApiResponse type',
	)
	assert.ok(
		Boolean(response.timestamp),
		'🚨 response.timestamp should be a Date instance - verify your ApiResponse type',
	)
})
