import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('identity is exported', () => {
	assert.ok(
		'identity' in solution,
		'🚨 Make sure you export "identity" - add: export { identity, ... }',
	)
})

await test('last is exported', () => {
	assert.ok(
		'last' in solution,
		'🚨 Make sure you export "last" - add: export { last, ... }',
	)
})

await test('identity should return the same value', () => {
	assert.strictEqual(
		solution.identity('hello'),
		'hello',
		'🚨 identity should return the same string value - check your generic function implementation',
	)
	assert.strictEqual(
		solution.identity(42),
		42,
		'🚨 identity should return the same number value - check your generic function implementation',
	)
	assert.strictEqual(
		solution.identity(true),
		true,
		'🚨 identity should return the same boolean value - check your generic function implementation',
	)
	assert.strictEqual(
		solution.identity(null),
		null,
		'🚨 identity should return the same null value - check your generic function implementation',
	)
})

await test('last should return last element of array', () => {
	assert.strictEqual(
		solution.last([1, 2, 3]),
		3,
		'🚨 last should return the last number element - check your generic array function',
	)
	assert.strictEqual(
		solution.last(['a', 'b', 'c']),
		'c',
		'🚨 last should return the last string element - check your generic array function',
	)
	assert.strictEqual(
		solution.last([true, false]),
		false,
		'🚨 last should return the last boolean element - check your generic array function',
	)
})

await test('last should return undefined for empty array', () => {
	assert.strictEqual(
		solution.last([]),
		undefined,
		'🚨 last should return undefined for empty arrays - check your generic array function',
	)
})
