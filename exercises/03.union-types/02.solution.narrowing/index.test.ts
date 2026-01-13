import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	normalizeText,
	describeUser,
	type TextInput,
	type User,
	type AdminUser,
	type RegularUser,
	type GuestUser,
} from './index.ts'

await testStep('normalizeText should trim string input', async () => {
	expect(
		normalizeText('  hello  '),
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	).toBe('hello')
	expect(
		normalizeText('world'),
		'🚨 normalizeText should return strings unchanged if no whitespace - check your type narrowing for strings',
	).toBe('world')
	expect(
		normalizeText('  test  '),
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	).toBe('test')
})

await testStep('normalizeText should join array input', async () => {
	expect(
		normalizeText(['hello', 'world']),
		'🚨 normalizeText should join array elements with spaces - check your type narrowing for arrays',
	).toBe('hello world')
	expect(
		normalizeText(['a', 'b', 'c']),
		'🚨 normalizeText should join multiple array elements - check your type narrowing for arrays',
	).toBe('a b c')
	expect(
		normalizeText(['single']),
		'🚨 normalizeText should handle single-element arrays - check your type narrowing for arrays',
	).toBe('single')
})

await testStep('normalizeText should handle array with spaces', async () => {
	// The function joins with space and then trims the result
	expect(
		normalizeText(['  hello  ', '  world  ']),
		'🚨 normalizeText should join array elements before trimming - check your array handling logic',
	).toBe('hello     world')
})

await testStep('describeUser should describe admin users', async () => {
	const admin: AdminUser = {
		type: 'admin',
		permissions: ['read', 'write'],
	}
	expect(
		describeUser(admin),
		'🚨 describeUser should format admin users with permission count - check your discriminated union narrowing',
	).toBe('Admin with 2 permissions')
})

await testStep('describeUser should describe regular users', async () => {
	const freeUser: RegularUser = { type: 'user', subscription: 'free' }
	const premiumUser: RegularUser = { type: 'user', subscription: 'premium' }
	expect(
		describeUser(freeUser),
		'🚨 describeUser should format regular users with subscription - check your discriminated union narrowing',
	).toBe('Regular user (free)')
	expect(
		describeUser(premiumUser),
		'🚨 describeUser should format premium users correctly - check your discriminated union narrowing',
	).toBe('Regular user (premium)')
})

await testStep('describeUser should describe guest users', async () => {
	const guest: GuestUser = { type: 'guest' }
	expect(
		describeUser(guest),
		'🚨 describeUser should format guest users - check your discriminated union narrowing',
	).toBe('Guest user')
})

await testStep(
	'TextInput type should accept string or string array',
	async () => {
		const stringInput: TextInput = 'test'
		const arrayInput: TextInput = ['test', 'array']
		expect(
			typeof stringInput,
			'🚨 stringInput should be type "string" - verify your TextInput union type accepts strings',
		).toBe('string')
		expect(
			Array.isArray(arrayInput),
			'🚨 arrayInput should be an array - verify your TextInput union type accepts string arrays',
		).toBe(true)
	},
)
