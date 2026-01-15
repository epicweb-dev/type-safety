import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('normalizeText is exported', () => {
	assert.ok(
		'normalizeText' in solution,
		'🚨 Make sure you export "normalizeText" - add: export { normalizeText, ... }',
	)
})

await test('describeUser is exported', () => {
	assert.ok(
		'describeUser' in solution,
		'🚨 Make sure you export "describeUser" - add: export { describeUser, ... }',
	)
})

await test('normalizeText should trim string input', () => {
	assert.strictEqual(
		solution.normalizeText('  hello  '),
		'hello',
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	)
	assert.strictEqual(
		solution.normalizeText('world'),
		'world',
		'🚨 normalizeText should return strings unchanged if no whitespace - check your type narrowing for strings',
	)
	assert.strictEqual(
		solution.normalizeText('  test  '),
		'test',
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	)
})

await test('normalizeText should join array input', () => {
	assert.strictEqual(
		solution.normalizeText(['hello', 'world']),
		'hello world',
		'🚨 normalizeText should join array elements with spaces - check your type narrowing for arrays',
	)
	assert.strictEqual(
		solution.normalizeText(['a', 'b', 'c']),
		'a b c',
		'🚨 normalizeText should join multiple array elements - check your type narrowing for arrays',
	)
	assert.strictEqual(
		solution.normalizeText(['single']),
		'single',
		'🚨 normalizeText should handle single-element arrays - check your type narrowing for arrays',
	)
})

await test('normalizeText should handle array with spaces', () => {
	// The function joins with space and then trims the result
	assert.strictEqual(
		solution.normalizeText(['  hello  ', '  world  ']),
		'hello     world',
		'🚨 normalizeText should join array elements before trimming - check your array handling logic',
	)
})

await test('describeUser should describe admin users', () => {
	const sampleAdmin = { type: 'admin' as const, permissions: ['read', 'write'] }
	assert.strictEqual(
		solution.describeUser(sampleAdmin),
		'Admin with 2 permissions',
		'🚨 describeUser should format admin users with permission count - check your discriminated union narrowing',
	)
})

await test('describeUser should describe regular users', () => {
	const freeUser = { type: 'user' as const, subscription: 'free' as const }
	assert.strictEqual(
		solution.describeUser(freeUser),
		'Regular user (free)',
		'🚨 describeUser should format regular users with subscription - check your discriminated union narrowing',
	)
	const premiumUser = {
		type: 'user' as const,
		subscription: 'premium' as const,
	}
	assert.strictEqual(
		solution.describeUser(premiumUser),
		'Regular user (premium)',
		'🚨 describeUser should format premium users correctly - check your discriminated union narrowing',
	)
})

await test('describeUser should describe guest users', () => {
	const guest = { type: 'guest' as const }
	assert.strictEqual(
		solution.describeUser(guest),
		'Guest user',
		'🚨 describeUser should format guest users - check your discriminated union narrowing',
	)
})

await test('TextInput type should accept string or string array', () => {
	const stringInput = 'test'
	const arrayInput = ['test', 'array']
	assert.strictEqual(
		typeof stringInput,
		'string',
		'🚨 stringInput should be type "string" - verify your TextInput union type accepts strings',
	)
	assert.ok(
		Array.isArray(arrayInput),
		'🚨 arrayInput should be an array - verify your TextInput union type accepts string arrays',
	)
})
