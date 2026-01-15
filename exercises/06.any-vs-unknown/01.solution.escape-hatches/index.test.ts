import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('safeProcess is exported', () => {
	assert.ok(
		'safeProcess' in solution,
		'🚨 Make sure you export "safeProcess" - add: export { safeProcess, ... }',
	)
})

await test('parseJsonSafely is exported', () => {
	assert.ok(
		'parseJsonSafely' in solution,
		'🚨 Make sure you export "parseJsonSafely" - add: export { parseJsonSafely, ... }',
	)
})

await test('isUser is exported', () => {
	assert.ok(
		'isUser' in solution,
		'🚨 Make sure you export "isUser" - add: export { isUser, ... }',
	)
})

await test('parseUser is exported', () => {
	assert.ok(
		'parseUser' in solution,
		'🚨 Make sure you export "parseUser" - add: export { parseUser, ... }',
	)
})

await test('safeProcess should handle string values', () => {
	assert.strictEqual(
		solution.safeProcess('hello'),
		'HELLO',
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	)
	assert.strictEqual(
		solution.safeProcess('test'),
		'TEST',
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	)
	assert.strictEqual(
		solution.safeProcess(''),
		'',
		'🚨 safeProcess should handle empty strings - check your type handling for string values',
	)
})

await test('safeProcess should handle number values', () => {
	assert.strictEqual(
		solution.safeProcess(123),
		'123.00',
		'🚨 safeProcess should format numbers to 2 decimal places - check your type handling for number values',
	)
	assert.strictEqual(
		solution.safeProcess(0),
		'0.00',
		'🚨 safeProcess should format zero correctly - check your type handling for number values',
	)
	assert.strictEqual(
		solution.safeProcess(3.14159),
		'3.14',
		'🚨 safeProcess should round numbers to 2 decimal places - check your type handling for number values',
	)
})

await test('safeProcess should handle boolean values', () => {
	assert.strictEqual(
		solution.safeProcess(true),
		'true',
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	)
	assert.strictEqual(
		solution.safeProcess(false),
		'false',
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	)
})

await test('safeProcess should handle other types', () => {
	assert.strictEqual(
		solution.safeProcess(null),
		'null',
		'🚨 safeProcess should convert null to string - check your type handling for null values',
	)
	assert.strictEqual(
		solution.safeProcess(undefined),
		'undefined',
		'🚨 safeProcess should convert undefined to string - check your type handling for undefined values',
	)
	assert.strictEqual(
		solution.safeProcess({}),
		'[object Object]',
		'🚨 safeProcess should convert objects to string representation - check your type handling for object values',
	)
})

await test('parseJsonSafely should parse valid JSON', () => {
	const parsedValid = solution.parseJsonSafely('{"name": "Alice", "age": 30}')
	assert.deepStrictEqual(
		parsedValid,
		{ name: 'Alice', age: 30 },
		'🚨 parseJsonSafely should parse valid JSON correctly - check your JSON parsing logic',
	)
})

await test('parseJsonSafely should return unknown type', () => {
	const parsedTest = solution.parseJsonSafely('{"test": "value"}')
	assert.strictEqual(
		typeof parsedTest,
		'object',
		'🚨 parseJsonSafely should return an object type - verify your return type handling',
	)
	assert.notStrictEqual(
		parsedTest === null,
		true,
		'🚨 parseJsonSafely should not return null for valid JSON - check your parsing logic',
	)
})

await test('isUser should correctly identify User objects', () => {
	assert.strictEqual(
		solution.isUser({ name: 'Alice', email: 'alice@example.com' }),
		true,
		'🚨 isUser should return true for valid User objects - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isUser({ name: 'Alice' }),
		false,
		'🚨 isUser should return false when email is missing - check your type guard validation',
	)
	assert.strictEqual(
		solution.isUser({ email: 'alice@example.com' }),
		false,
		'🚨 isUser should return false when name is missing - check your type guard validation',
	)
	assert.strictEqual(
		solution.isUser({ name: 123, email: 'alice@example.com' }),
		false,
		'🚨 isUser should return false when name is not a string - check your type guard validation',
	)
	assert.strictEqual(
		solution.isUser(null),
		false,
		'🚨 isUser should return false for null - check your type guard validation',
	)
	assert.strictEqual(
		solution.isUser('not an object'),
		false,
		'🚨 isUser should return false for non-objects - check your type guard validation',
	)
})

await test('parseUser should return User for valid JSON', () => {
	const parseUserValid = solution.parseUser(
		'{"name": "Alice", "email": "alice@example.com"}',
	)
	assert.notStrictEqual(
		parseUserValid,
		null,
		'🚨 parseUser should return a User object for valid JSON - check your parsing and validation logic',
	)
	if (parseUserValid) {
		assert.strictEqual(
			parseUserValid.name,
			'Alice',
			'🚨 result.name should be "Alice" - verify your User parsing',
		)
		assert.strictEqual(
			parseUserValid.email,
			'alice@example.com',
			'🚨 result.email should be "alice@example.com" - verify your User parsing',
		)
	}
})

await test('parseUser should return null for invalid JSON', () => {
	const parseUserInvalid = solution.parseUser('{"foo": "bar"}')
	assert.strictEqual(
		parseUserInvalid,
		null,
		'🚨 parseUser should return null for invalid JSON - check your validation logic',
	)
})

await test('parseUser should throw for malformed JSON', () => {
	const malformedJson = 'not json'
	let malformedThrew = false
	try {
		solution.parseUser(malformedJson)
	} catch {
		malformedThrew = true
	}
	assert.strictEqual(
		malformedThrew,
		true,
		'🚨 parseUser should throw for malformed JSON - check your error handling',
	)
})
