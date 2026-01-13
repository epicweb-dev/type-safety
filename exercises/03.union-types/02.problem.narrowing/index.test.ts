import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	normalizeText,
	describeUser,
	type TextInput,
	type User,
	type AdminUser,
	type RegularUser,
	type GuestUser,
} from './index.ts'

await test('normalizeText should trim string input', () => {
	assert.strictEqual(
		normalizeText('  hello  '),
		'hello',
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	)
	assert.strictEqual(
		normalizeText('world'),
		'world',
		'🚨 normalizeText should return strings unchanged if no whitespace - check your type narrowing for strings',
	)
	assert.strictEqual(
		normalizeText('  test  '),
		'test',
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	)
})

await test('normalizeText should join array input', () => {
	assert.strictEqual(
		normalizeText(['hello', 'world']),
		'hello world',
		'🚨 normalizeText should join array elements with spaces - check your type narrowing for arrays',
	)
	assert.strictEqual(
		normalizeText(['a', 'b', 'c']),
		'a b c',
		'🚨 normalizeText should join multiple array elements - check your type narrowing for arrays',
	)
	assert.strictEqual(
		normalizeText(['single']),
		'single',
		'🚨 normalizeText should handle single-element arrays - check your type narrowing for arrays',
	)
})

await test('normalizeText should handle array with spaces', () => {
	// The function joins with space and then trims the result
	assert.strictEqual(
		normalizeText(['  hello  ', '  world  ']),
		'hello     world',
		'🚨 normalizeText should join array elements before trimming - check your array handling logic',
	)
})

await test('describeUser should describe admin users', () => {
	const admin: AdminUser = {
		type: 'admin',
		permissions: ['read', 'write'],
	}
	assert.strictEqual(
		describeUser(admin),
		'Admin with 2 permissions',
		'🚨 describeUser should format admin users with permission count - check your discriminated union narrowing',
	)
})

await test('describeUser should describe regular users', () => {
	const freeUser: RegularUser = { type: 'user', subscription: 'free' }
	const premiumUser: RegularUser = { type: 'user', subscription: 'premium' }
	assert.strictEqual(
		describeUser(freeUser),
		'Regular user (free)',
		'🚨 describeUser should format regular users with subscription - check your discriminated union narrowing',
	)
	assert.strictEqual(
		describeUser(premiumUser),
		'Regular user (premium)',
		'🚨 describeUser should format premium users correctly - check your discriminated union narrowing',
	)
})

await test('describeUser should describe guest users', () => {
	const guest: GuestUser = { type: 'guest' }
	assert.strictEqual(
		describeUser(guest),
		'Guest user',
		'🚨 describeUser should format guest users - check your discriminated union narrowing',
	)
})

await test('TextInput type should accept string or string array', () => {
	const stringInput: TextInput = 'test'
	const arrayInput: TextInput = ['test', 'array']
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
