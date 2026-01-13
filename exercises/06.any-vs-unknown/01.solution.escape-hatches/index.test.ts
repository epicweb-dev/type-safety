import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	safeProcess,
	parseJsonSafely,
	isUser,
	parseUser,
	type User} from './index.ts'

await testStep('safeProcess should handle string values', async () => {
	expect(
		safeProcess('hello'),
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	).toBe('HELLO')
	expect(
		safeProcess('test'),
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	).toBe('TEST')
	expect(
		safeProcess(''),
		'🚨 safeProcess should handle empty strings - check your type handling for string values',
	).toBe('')
})

await testStep('safeProcess should handle number values', async () => {
	expect(
		safeProcess(123),
		'🚨 safeProcess should format numbers to 2 decimal places - check your type handling for number values',
	).toBe('123.00')
	expect(
		safeProcess(0),
		'🚨 safeProcess should format zero correctly - check your type handling for number values',
	).toBe('0.00')
	expect(
		safeProcess(3.14159),
		'🚨 safeProcess should round numbers to 2 decimal places - check your type handling for number values',
	).toBe('3.14')
})

await testStep('safeProcess should handle boolean values', async () => {
	expect(
		safeProcess(true),
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	).toBe('true')
	expect(
		safeProcess(false),
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	).toBe('false')
})

await testStep('safeProcess should handle other types', async () => {
	expect(
		safeProcess(null),
		'🚨 safeProcess should convert null to string - check your type handling for null values',
	).toBe('null')
	expect(
		safeProcess(undefined),
		'🚨 safeProcess should convert undefined to string - check your type handling for undefined values',
	).toBe('undefined')
	expect(
		safeProcess({}),
		'🚨 safeProcess should convert objects to string representation - check your type handling for object values',
	).toBe('[object Object]')
})

await testStep('parseJsonSafely should parse valid JSON', async () => {
	const result = parseJsonSafely('{"name": "Alice", "age": 30}')
	expect(
		result,
		'🚨 parseJsonSafely should parse valid JSON correctly - check your JSON parsing logic',
	).toEqual({ name: 'Alice', age: 30 })
})

await testStep('parseJsonSafely should return unknown type', async () => {
	const result = parseJsonSafely('{"test": "value"}')
	expect(
		typeof result,
		'🚨 parseJsonSafely should return an object type - verify your return type handling',
	).toBe('object')
	expect(
		result,
		'🚨 parseJsonSafely should not return null for valid JSON - check your parsing logic',
	).not.toBeNull()
})

await testStep('isUser should correctly identify User objects', async () => {
	const validUser = { name: 'Alice', email: 'alice@example.com' }
	const invalidUser1 = { name: 'Alice' }
	const invalidUser2 = { email: 'alice@example.com' }
	const invalidUser3 = { name: 123, email: 'alice@example.com' }
	const invalidUser4 = null
	const invalidUser5 = 'not an object'

	expect(
		isUser(validUser),
		'🚨 isUser should return true for valid User objects - check your type guard implementation',
	).toBe(true)
	expect(
		isUser(invalidUser1),
		'🚨 isUser should return false when email is missing - check your type guard validation',
	).toBe(false)
	expect(
		isUser(invalidUser2),
		'🚨 isUser should return false when name is missing - check your type guard validation',
	).toBe(false)
	expect(
		isUser(invalidUser3),
		'🚨 isUser should return false when name is not a string - check your type guard validation',
	).toBe(false)
	expect(
		isUser(invalidUser4),
		'🚨 isUser should return false for null - check your type guard validation',
	).toBe(false)
	expect(
		isUser(invalidUser5),
		'🚨 isUser should return false for non-objects - check your type guard validation',
	).toBe(false)
})

await testStep('parseUser should return User for valid JSON', async () => {
	const validJson = '{"name": "Alice", "email": "alice@example.com"}'
	const result = parseUser(validJson)
	expect(
		result,
		'🚨 parseUser should return a User object for valid JSON - check your parsing and validation logic',
	).not.toBeNull()
	if (result) {
		expect(
			result.name,
			'🚨 result.name should be "Alice" - verify your User parsing',
		).toBe('Alice')
		expect(
			result.email,
			'🚨 result.email should be "alice@example.com" - verify your User parsing',
		).toBe('alice@example.com')
	}
})

await testStep('parseUser should return null for invalid JSON', async () => {
	const invalidJson = '{"foo": "bar"}'
	const result = parseUser(invalidJson)
	expect(
		result,
		'🚨 parseUser should return null for invalid JSON - check your validation logic',
	).toBeNull()
})

await testStep('parseUser should throw for malformed JSON', async () => {
	const malformedJson = 'not json'
	let threw = false
	try {
		parseUser(malformedJson)
	} catch {
		threw = true
	}
	expect(
		threw,
		'🚨 parseUser should throw for malformed JSON - check your error handling',
	).toBe(true)
})
