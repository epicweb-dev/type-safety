import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('identity is exported', () => {
	assert.ok(
		'identity' in solution,
		'🚨 Make sure you export "identity" - add: export { identity, ... }',
	)
})

await test('first is exported', () => {
	assert.ok(
		'first' in solution,
		'🚨 Make sure you export "first" - add: export { first, ... }',
	)
})

await test('last is exported', () => {
	assert.ok(
		'last' in solution,
		'🚨 Make sure you export "last" - add: export { last, ... }',
	)
})

await test('reverse is exported', () => {
	assert.ok(
		'reverse' in solution,
		'🚨 Make sure you export "reverse" - add: export { reverse, ... }',
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

await test('first should return first element of array', () => {
	assert.strictEqual(
		solution.first([1, 2, 3]),
		1,
		'🚨 first should return the first number element - check your generic array function',
	)
	assert.strictEqual(
		solution.first(['a', 'b', 'c']),
		'a',
		'🚨 first should return the first string element - check your generic array function',
	)
	assert.strictEqual(
		solution.first([true, false]),
		true,
		'🚨 first should return the first boolean element - check your generic array function',
	)
})

await test('first should return undefined for empty array', () => {
	assert.strictEqual(
		solution.first([]),
		undefined,
		'🚨 first should return undefined for empty arrays - check your generic array function',
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

await test('reverse should reverse array elements', () => {
	assert.deepStrictEqual(
		solution.reverse([1, 2, 3]),
		[3, 2, 1],
		'🚨 reverse should reverse number arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		solution.reverse(['a', 'b', 'c']),
		['c', 'b', 'a'],
		'🚨 reverse should reverse string arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		solution.reverse([true, false]),
		[false, true],
		'🚨 reverse should reverse boolean arrays - check your generic array function',
	)
})

await test('reverse should not mutate original array', () => {
	const original = [1, 2, 3]
	const reversed = solution.reverse(original)
	assert.deepStrictEqual(
		original,
		[1, 2, 3],
		'🚨 reverse should not mutate the original array - check your implementation',
	)
	assert.deepStrictEqual(
		reversed,
		[3, 2, 1],
		'🚨 reverse should return a new reversed array - check your implementation',
	)
})

await test('reverse should handle empty array', () => {
	assert.deepStrictEqual(
		solution.reverse([]),
		[],
		'🚨 reverse should handle empty arrays - check your generic array function',
	)
})

await test('reverse should handle single element array', () => {
	assert.deepStrictEqual(
		solution.reverse([1]),
		[1],
		'🚨 reverse should handle single-element arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		solution.reverse(['a']),
		['a'],
		'🚨 reverse should handle single-element arrays - check your generic array function',
	)
})
