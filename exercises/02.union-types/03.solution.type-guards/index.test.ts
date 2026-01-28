import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('type guard helpers are exported', () => {
	assert.ok(
		'isStringArray' in solution,
		'🚨 Make sure you export "isStringArray" - add: export { isStringArray, ... }',
	)
	assert.ok(
		'isAdminUser' in solution,
		'🚨 Make sure you export "isAdminUser" - add: export { isAdminUser, ... }',
	)
	assert.ok(
		'isRegularUser' in solution,
		'🚨 Make sure you export "isRegularUser" - add: export { isRegularUser, ... }',
	)
	assert.ok(
		'isGuestUser' in solution,
		'🚨 Make sure you export "isGuestUser" - add: export { isGuestUser, ... }',
	)
})

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

await test('isStringArray should detect string arrays', () => {
	assert.strictEqual(
		solution.isStringArray(['hello', 'world']),
		true,
		'🚨 isStringArray should return true for string arrays - check your Array.isArray and item checks',
	)
	assert.strictEqual(
		solution.isStringArray('hello'),
		false,
		'🚨 isStringArray should return false for strings - check your array check',
	)
	assert.strictEqual(
		solution.isStringArray([1, 2, 3]),
		false,
		'🚨 isStringArray should return false for non-string arrays - verify item type checks',
	)
})

await test('normalizeText should trim string input', () => {
	assert.strictEqual(
		solution.normalizeText('  hello  '),
		'hello',
		'🚨 normalizeText should trim strings - check your string branch',
	)
})

await test('normalizeText should join array input', () => {
	assert.strictEqual(
		solution.normalizeText(['hello', 'world']),
		'hello world',
		'🚨 normalizeText should join array elements with spaces - check your array branch',
	)
})

await test('isAdminUser should identify admin users', () => {
	assert.strictEqual(
		solution.isAdminUser({ permissions: ['read', 'write'] }),
		true,
		'🚨 isAdminUser should return true for admin shape - check your permissions check',
	)
	assert.strictEqual(
		solution.isAdminUser({ subscription: 'free' }),
		false,
		'🚨 isAdminUser should return false for non-admin users - check your guard logic',
	)
})

await test('isRegularUser should identify regular users', () => {
	assert.strictEqual(
		solution.isRegularUser({ subscription: 'premium' }),
		true,
		'🚨 isRegularUser should return true for regular user shape - check your subscription check',
	)
	assert.strictEqual(
		solution.isRegularUser({ guestCode: 'G-1' }),
		false,
		'🚨 isRegularUser should return false for non-regular users - check your guard logic',
	)
})

await test('isGuestUser should identify guest users', () => {
	assert.strictEqual(
		solution.isGuestUser({ guestCode: 'G-1' }),
		true,
		'🚨 isGuestUser should return true for guest user shape - check your guestCode check',
	)
	assert.strictEqual(
		solution.isGuestUser({ permissions: [] }),
		false,
		'🚨 isGuestUser should return false for non-guest users - check your guard logic',
	)
})

await test('describeUser should use type guards for descriptions', () => {
	assert.strictEqual(
		solution.describeUser({ permissions: ['read', 'write'] }),
		'Admin with 2 permissions',
		'🚨 describeUser should describe admins using permission count',
	)
	assert.strictEqual(
		solution.describeUser({ subscription: 'free' }),
		'Regular user (free)',
		'🚨 describeUser should describe regular users with subscription',
	)
	assert.strictEqual(
		solution.describeUser({ guestCode: 'guest-1' }),
		'Guest user',
		'🚨 describeUser should describe guest users correctly',
	)
})
