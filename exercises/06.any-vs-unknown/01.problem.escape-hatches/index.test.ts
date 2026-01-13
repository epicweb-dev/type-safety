import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	safeProcess,
	parseJsonSafely,
	isUser,
	parseUser,
	type User,
} from './index.ts'

await test('safeProcess should handle string values', () => {
	assert.strictEqual(
		safeProcess('hello'),
		'HELLO',
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	)
	assert.strictEqual(
		safeProcess('test'),
		'TEST',
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	)
	assert.strictEqual(
		safeProcess(''),
		'',
		'🚨 safeProcess should handle empty strings - check your type handling for string values',
	)
})

await test('safeProcess should handle number values', () => {
	assert.strictEqual(
		safeProcess(123),
		'123.00',
		'🚨 safeProcess should format numbers to 2 decimal places - check your type handling for number values',
	)
	assert.strictEqual(
		safeProcess(0),
		'0.00',
		'🚨 safeProcess should format zero correctly - check your type handling for number values',
	)
	assert.strictEqual(
		safeProcess(3.14159),
		'3.14',
		'🚨 safeProcess should round numbers to 2 decimal places - check your type handling for number values',
	)
})

await test('safeProcess should handle boolean values', () => {
	assert.strictEqual(
		safeProcess(true),
		'true',
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	)
	assert.strictEqual(
		safeProcess(false),
		'false',
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	)
})

await test('safeProcess should handle other types', () => {
	assert.strictEqual(
		safeProcess(null),
		'null',
		'🚨 safeProcess should convert null to string - check your type handling for null values',
	)
	assert.strictEqual(
		safeProcess(undefined),
		'undefined',
		'🚨 safeProcess should convert undefined to string - check your type handling for undefined values',
	)
	assert.strictEqual(
		safeProcess({}),
		'[object Object]',
		'🚨 safeProcess should convert objects to string representation - check your type handling for object values',
	)
})

await test('parseJsonSafely should parse valid JSON', () => {
	const result = parseJsonSafely('{"name": "Alice", "age": 30}')
	assert.deepStrictEqual(
		result,
		{ name: 'Alice', age: 30 },
		'🚨 parseJsonSafely should parse valid JSON correctly - check your JSON parsing logic',
	)
})

await test('parseJsonSafely should return unknown type', () => {
	const result = parseJsonSafely('{"test": "value"}')
	assert.strictEqual(
		typeof result,
		'object',
		'🚨 parseJsonSafely should return an object type - verify your return type handling',
	)
	assert.notStrictEqual(
		result,
		null,
		'🚨 parseJsonSafely should not return null for valid JSON - check your parsing logic',
	)
})

await test('isUser should correctly identify User objects', () => {
	const validUser = { name: 'Alice', email: 'alice@example.com' }
	const invalidUser1 = { name: 'Alice' }
	const invalidUser2 = { email: 'alice@example.com' }
	const invalidUser3 = { name: 123, email: 'alice@example.com' }
	const invalidUser4 = null
	const invalidUser5 = 'not an object'

	assert.strictEqual(
		isUser(validUser),
		true,
		'🚨 isUser should return true for valid User objects - check your type guard implementation',
	)
	assert.strictEqual(
		isUser(invalidUser1),
		false,
		'🚨 isUser should return false when email is missing - check your type guard validation',
	)
	assert.strictEqual(
		isUser(invalidUser2),
		false,
		'🚨 isUser should return false when name is missing - check your type guard validation',
	)
	assert.strictEqual(
		isUser(invalidUser3),
		false,
		'🚨 isUser should return false when name is not a string - check your type guard validation',
	)
	assert.strictEqual(
		isUser(invalidUser4),
		false,
		'🚨 isUser should return false for null - check your type guard validation',
	)
	assert.strictEqual(
		isUser(invalidUser5),
		false,
		'🚨 isUser should return false for non-objects - check your type guard validation',
	)
})

await test('parseUser should return User for valid JSON', () => {
	const validJson = '{"name": "Alice", "email": "alice@example.com"}'
	const result = parseUser(validJson)
	assert.notStrictEqual(
		result,
		null,
		'🚨 parseUser should return a User object for valid JSON - check your parsing and validation logic',
	)
	if (result) {
		assert.strictEqual(
			result.name,
			'Alice',
			'🚨 result.name should be "Alice" - verify your User parsing',
		)
		assert.strictEqual(
			result.email,
			'alice@example.com',
			'🚨 result.email should be "alice@example.com" - verify your User parsing',
		)
	}
})

await test('parseUser should return null for invalid JSON', () => {
	const invalidJson = '{"foo": "bar"}'
	const result = parseUser(invalidJson)
	assert.strictEqual(
		result,
		null,
		'🚨 parseUser should return null for invalid JSON - check your validation logic',
	)
})

await test('parseUser should throw for malformed JSON', () => {
	const malformedJson = 'not json'
	let threw = false
	try {
		parseUser(malformedJson)
	} catch {
		threw = true
	}
	assert.strictEqual(
		threw,
		true,
		'🚨 parseUser should throw for malformed JSON - check your error handling',
	)
})
