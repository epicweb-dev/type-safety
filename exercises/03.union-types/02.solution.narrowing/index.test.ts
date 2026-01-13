import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
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
	expect(normalizeText('  hello  ')).toBe('hello')
	expect(normalizeText('world')).toBe('world')
	expect(normalizeText('  test  ')).toBe('test')
})

await testStep('normalizeText should join array input', async () => {
	expect(normalizeText(['hello', 'world'])).toBe('hello world')
	expect(normalizeText(['a', 'b', 'c'])).toBe('a b c')
	expect(normalizeText(['single'])).toBe('single')
})

await testStep('normalizeText should handle array with spaces', async () => {
	// The function joins with space and then trims the result
	expect(normalizeText(['  hello  ', '  world  '])).toBe('hello     world')
})

await testStep('describeUser should describe admin users', async () => {
	const admin: AdminUser = {
		type: 'admin',
		permissions: ['read', 'write'],
	}
	expect(describeUser(admin)).toBe('Admin with 2 permissions')
})

await testStep('describeUser should describe regular users', async () => {
	const freeUser: RegularUser = { type: 'user', subscription: 'free' }
	const premiumUser: RegularUser = { type: 'user', subscription: 'premium' }
	expect(describeUser(freeUser)).toBe('Regular user (free)')
	expect(describeUser(premiumUser)).toBe('Regular user (premium)')
})

await testStep('describeUser should describe guest users', async () => {
	const guest: GuestUser = { type: 'guest' }
	expect(describeUser(guest)).toBe('Guest user')
})

await testStep('TextInput type should accept string or string array', async () => {
	const stringInput: TextInput = 'test'
	const arrayInput: TextInput = ['test', 'array']
	expect(typeof stringInput).toBe('string')
	expect(Array.isArray(arrayInput)).toBe(true)
})
