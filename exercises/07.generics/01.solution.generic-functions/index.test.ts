import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const {
	identity,
	first,
	firstEmptyIsUndefined,
	last,
	lastEmptyIsUndefined,
	reverse,
	original,
	reversed,
} = JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('identity should return the same value', () => {
	assert.strictEqual(
		identity[0],
		'hello',
		'🚨 identity should return the same string value - check your generic function implementation',
	)
	assert.strictEqual(
		identity[1],
		42,
		'🚨 identity should return the same number value - check your generic function implementation',
	)
	assert.strictEqual(
		identity[2],
		true,
		'🚨 identity should return the same boolean value - check your generic function implementation',
	)
	assert.strictEqual(
		identity[3],
		null,
		'🚨 identity should return the same null value - check your generic function implementation',
	)
})

await test('first should return first element of array', () => {
	assert.strictEqual(
		first[0],
		1,
		'🚨 first should return the first number element - check your generic array function',
	)
	assert.strictEqual(
		first[1],
		'a',
		'🚨 first should return the first string element - check your generic array function',
	)
	assert.strictEqual(
		first[2],
		true,
		'🚨 first should return the first boolean element - check your generic array function',
	)
})

await test('first should return undefined for empty array', () => {
	assert.strictEqual(
		firstEmptyIsUndefined,
		true,
		'🚨 first should return undefined for empty arrays - check your generic array function',
	)
})

await test('last should return last element of array', () => {
	assert.strictEqual(
		last[0],
		3,
		'🚨 last should return the last number element - check your generic array function',
	)
	assert.strictEqual(
		last[1],
		'c',
		'🚨 last should return the last string element - check your generic array function',
	)
	assert.strictEqual(
		last[2],
		false,
		'🚨 last should return the last boolean element - check your generic array function',
	)
})

await test('last should return undefined for empty array', () => {
	assert.strictEqual(
		lastEmptyIsUndefined,
		true,
		'🚨 last should return undefined for empty arrays - check your generic array function',
	)
})

await test('reverse should reverse array elements', () => {
	assert.deepStrictEqual(
		reverse[0],
		[3, 2, 1],
		'🚨 reverse should reverse number arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		reverse[1],
		['c', 'b', 'a'],
		'🚨 reverse should reverse string arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		reverse[2],
		[false, true],
		'🚨 reverse should reverse boolean arrays - check your generic array function',
	)
})

await test('reverse should not mutate original array', () => {
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
		reverse[3],
		[],
		'🚨 reverse should handle empty arrays - check your generic array function',
	)
})

await test('reverse should handle single element array', () => {
	assert.deepStrictEqual(
		reverse[4],
		[1],
		'🚨 reverse should handle single-element arrays - check your generic array function',
	)
	assert.deepStrictEqual(
		reverse[5],
		['a'],
		'🚨 reverse should handle single-element arrays - check your generic array function',
	)
})
