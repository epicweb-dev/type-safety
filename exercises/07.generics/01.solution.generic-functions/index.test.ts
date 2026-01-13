import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { identity, first, last, reverse } from './index.ts'

await testStep('identity should return the same value', async () => {
	expect(identity('hello')).toBe('hello')
	expect(identity(42)).toBe(42)
	expect(identity(true)).toBe(true)
	expect(identity(null)).toBe(null)
})

await testStep('first should return first element of array', async () => {
	expect(first([1, 2, 3])).toBe(1)
	expect(first(['a', 'b', 'c'])).toBe('a')
	expect(first([true, false])).toBe(true)
})

await testStep('first should return undefined for empty array', async () => {
	expect(first([])).toBeUndefined()
})

await testStep('last should return last element of array', async () => {
	expect(last([1, 2, 3])).toBe(3)
	expect(last(['a', 'b', 'c'])).toBe('c')
	expect(last([true, false])).toBe(false)
})

await testStep('last should return undefined for empty array', async () => {
	expect(last([])).toBeUndefined()
})

await testStep('reverse should reverse array elements', async () => {
	expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
	expect(reverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a'])
	expect(reverse([true, false])).toEqual([false, true])
})

await testStep('reverse should not mutate original array', async () => {
	const original = [1, 2, 3]
	const reversed = reverse(original)
	expect(original).toEqual([1, 2, 3])
	expect(reversed).toEqual([3, 2, 1])
})

await testStep('reverse should handle empty array', async () => {
	expect(reverse([])).toEqual([])
})

await testStep('reverse should handle single element array', async () => {
	expect(reverse([1])).toEqual([1])
	expect(reverse(['a'])).toEqual(['a'])
})
