import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

type User = { id: number; name: string }

await test('createSuccess is exported', () => {
	assert.ok(
		'createSuccess' in solution,
		'🚨 Make sure you export "createSuccess" - add: export { createSuccess, ... }',
	)
})

await test('createError is exported', () => {
	assert.ok(
		'createError' in solution,
		'🚨 Make sure you export "createError" - add: export { createError, ... }',
	)
})

await test('createSuccess should create a success state', () => {
	const state = solution.createSuccess({ id: 1, name: 'Ada' })
	assert.strictEqual(
		state.status,
		'success',
		'🚨 createSuccess should create a state with status "success"',
	)
	if (state.status === 'success') {
		assert.strictEqual(
			state.data.name,
			'Ada',
			'🚨 state.data should contain the success data - check your LoadingState type',
		)
	}
})

await test('createSuccess should work with different types', () => {
	const stringState = solution.createSuccess('hello')
	const numberState = solution.createSuccess(42)
	const objectState = solution.createSuccess({ id: 1, name: 'Alice' })

	assert.strictEqual(
		stringState.status,
		'success',
		'🚨 createSuccess should work with string types',
	)
	assert.strictEqual(
		numberState.status,
		'success',
		'🚨 createSuccess should work with number types',
	)
	assert.strictEqual(
		objectState.status,
		'success',
		'🚨 createSuccess should work with object types',
	)

	if (stringState.status === 'success')
		assert.strictEqual(
			stringState.data,
			'hello',
			'🚨 stringState.data should be "hello" - verify generic type inference',
		)
	if (numberState.status === 'success')
		assert.strictEqual(
			numberState.data,
			42,
			'🚨 numberState.data should be 42 - verify generic type inference',
		)
	if (objectState.status === 'success')
		assert.deepStrictEqual(
			objectState.data,
			{ id: 1, name: 'Alice' },
			'🚨 objectState.data should match the input object - verify generic type inference',
		)
})

await test('createError should create an error state', () => {
	const state = solution.createError('Failed to load')
	assert.strictEqual(
		state.status,
		'error',
		'🚨 createError should create a state with status "error"',
	)
	if (state.status === 'error') {
		assert.strictEqual(
			state.error,
			'Failed to load',
			'🚨 state.error should contain the error message - check your LoadingState type',
		)
	}
})

await test('LoadingState should discriminate correctly', () => {
	const success = solution.createSuccess('test')
	const error = solution.createError('error message')

	assert.strictEqual(
		success.status,
		'success',
		'🚨 success.status should be "success" - verify your LoadingState discriminated union',
	)
	assert.strictEqual(
		error.status,
		'error',
		'🚨 error.status should be "error" - verify your LoadingState discriminated union',
	)

	if (success.status === 'success') {
		assert.strictEqual(
			success.data,
			'test',
			'🚨 success.data should be accessible - verify your LoadingState discriminated union',
		)
	}
	if (error.status === 'error') {
		assert.strictEqual(
			error.error,
			'error message',
			'🚨 error.error should be accessible - verify your LoadingState discriminated union',
		)
	}
})

await test('LoadingState should preserve generic types', () => {
	const userState = solution.createSuccess<User>({ id: 1, name: 'Ada' })
	if (userState.status === 'success') {
		assert.strictEqual(
			typeof userState.data.id,
			'number',
			'🚨 userState.data.id should be type "number" - verify generic type preservation',
		)
		assert.strictEqual(
			typeof userState.data.name,
			'string',
			'🚨 userState.data.name should be type "string" - verify generic type preservation',
		)
	}
})
