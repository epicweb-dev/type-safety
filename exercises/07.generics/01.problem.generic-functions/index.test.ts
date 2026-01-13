import assert from 'node:assert/strict'
import { test } from 'node:test'
import { identity, first, last, reverse } from './index.ts'

await test('identity should return the same value', () => {
	assert.strictEqual(
		identity('hello'),
		'hello',
		'🚨 identity should return the same string value - check your generic function implementation',
	)
	assert.strictEqual(
		identity(42),
		42,
		'🚨 identity should return the same number value - check your generic function implementation',
	)
	assert.strictEqual(
		identity(true),
		true,
		'🚨 identity should return the same boolean value - check your generic function implementation',
	)
	assert.strictEqual(
		identity(null),
		null,
		'🚨 identity should return the same null value - check your generic function implementation',
	)
})

await test('first should return first element of array', () => {
	assert.strictEqual(
		first([1, 2, 3]),
		1,
		'🚨 first should return the first number element - check your generic array function',
	)
	assert.strictEqual(
		first(['a', 'b', 'c']),
		'a',
		'🚨 first should return the first string element - check your generic array function',
	)
	assert.strictEqual(
		first([true, false]),
		true,
		'🚨 first should return the first boolean element - check your generic array function',
	)
})

await test('first should return undefined for empty array', () => {
	assert.strictEqual(
		first([]),
		undefined,
		'🚨 first should return undefined for empty arrays - check your generic array function',
	)
})

await test('last should return last element of array', () => {
	assert.strictEqual(
		last([1, 2, 3]),
		3,
		'🚨 last should return the last number element - check your generic array function',
	)
	assert.strictEqual(
		last(['a', 'b', 'c']),
		'c',
		'🚨 last should return the last string element - check your generic array function',
	)
	assert.strictEqual(
		last([true, false]),
		false,
		'🚨 last should return the last boolean element - check your generic array function',
	)
})

await test('last should return undefined for empty array', () => {
	assert.strictEqual(
		last([]),
		undefined,
		'🚨 last should return undefined for empty arrays - check your generic array function',
	)
})

await test('reverse should reverse array elements', () => {
	assert.deepStrictEqual(
		reverse([1, 2, 3]),
		[3, 2, 1],
		'🚨 reverse should reverse number arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		reverse(['a', 'b', 'c']),
		['c', 'b', 'a'],
		'🚨 reverse should reverse string arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		reverse([true, false]),
		[false, true],
		'🚨 reverse should reverse boolean arrays - check your generic array function',
	)
})

await test('reverse should not mutate original array', () => {
	const original = [1, 2, 3]
	const reversed = reverse(original)
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
		reverse([]),
		[],
		'🚨 reverse should handle empty arrays - check your generic array function',
	)
})

await test('reverse should handle single element array', () => {
	assert.deepStrictEqual(
		reverse([1]),
		[1],
		'🚨 reverse should handle single-element arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		reverse(['a']),
		['a'],
		'🚨 reverse should handle single-element arrays - check your generic array function',
	)
})
