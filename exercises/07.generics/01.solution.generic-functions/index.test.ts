import { testStep, expect } from '@epic-web/workshop-utils/test'
import { identity, first, last, reverse } from './index.ts'

await testStep('identity should return the same value', async () => {
	expect(
		identity('hello'),
		'🚨 identity should return the same string value - check your generic function implementation',
	).toBe('hello')
	expect(
		identity(42),
		'🚨 identity should return the same number value - check your generic function implementation',
	).toBe(42)
	expect(
		identity(true),
		'🚨 identity should return the same boolean value - check your generic function implementation',
	).toBe(true)
	expect(
		identity(null),
		'🚨 identity should return the same null value - check your generic function implementation',
	).toBe(null)
})

await testStep('first should return first element of array', async () => {
	expect(
		first([1, 2, 3]),
		'🚨 first should return the first number element - check your generic array function',
	).toBe(1)
	expect(
		first(['a', 'b', 'c']),
		'🚨 first should return the first string element - check your generic array function',
	).toBe('a')
	expect(
		first([true, false]),
		'🚨 first should return the first boolean element - check your generic array function',
	).toBe(true)
})

await testStep('first should return undefined for empty array', async () => {
	expect(
		first([]),
		'🚨 first should return undefined for empty arrays - check your generic array function',
	).toBeUndefined()
})

await testStep('last should return last element of array', async () => {
	expect(
		last([1, 2, 3]),
		'🚨 last should return the last number element - check your generic array function',
	).toBe(3)
	expect(
		last(['a', 'b', 'c']),
		'🚨 last should return the last string element - check your generic array function',
	).toBe('c')
	expect(
		last([true, false]),
		'🚨 last should return the last boolean element - check your generic array function',
	).toBe(false)
})

await testStep('last should return undefined for empty array', async () => {
	expect(
		last([]),
		'🚨 last should return undefined for empty arrays - check your generic array function',
	).toBeUndefined()
})

await testStep('reverse should reverse array elements', async () => {
	expect(
		reverse([1, 2, 3]),
		'🚨 reverse should reverse number arrays - check your generic array function',
	).toEqual([3, 2, 1])
	expect(
		reverse(['a', 'b', 'c']),
		'🚨 reverse should reverse string arrays - check your generic array function',
	).toEqual(['c', 'b', 'a'])
	expect(
		reverse([true, false]),
		'🚨 reverse should reverse boolean arrays - check your generic array function',
	).toEqual([false, true])
})

await testStep('reverse should not mutate original array', async () => {
	const original = [1, 2, 3]
	const reversed = reverse(original)
	expect(
		original,
		'🚨 reverse should not mutate the original array - check your implementation',
	).toEqual([1, 2, 3])
	expect(
		reversed,
		'🚨 reverse should return a new reversed array - check your implementation',
	).toEqual([3, 2, 1])
})

await testStep('reverse should handle empty array', async () => {
	expect(
		reverse([]),
		'🚨 reverse should handle empty arrays - check your generic array function',
	).toEqual([])
})

await testStep('reverse should handle single element array', async () => {
	expect(
		reverse([1]),
		'🚨 reverse should handle single-element arrays - check your generic array function',
	).toEqual([1])
	expect(
		reverse(['a']),
		'🚨 reverse should handle single-element arrays - check your generic array function',
	).toEqual(['a'])
})
