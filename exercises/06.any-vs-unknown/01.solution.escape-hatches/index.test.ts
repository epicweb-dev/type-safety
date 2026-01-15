import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const {
	safeProcess,
	parsedValid,
	parsedTestType,
	parsedTestIsNull,
	isUserResults,
	parseUserValid,
	parseUserInvalid,
	malformedThrew,
} = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('safeProcess should handle string values', () => {
	assert.strictEqual(
		safeProcess[0],
		'HELLO',
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	)
	assert.strictEqual(
		safeProcess[1],
		'TEST',
		'🚨 safeProcess should uppercase strings - check your type handling for string values',
	)
	assert.strictEqual(
		safeProcess[2],
		'',
		'🚨 safeProcess should handle empty strings - check your type handling for string values',
	)
})

await test('safeProcess should handle number values', () => {
	assert.strictEqual(
		safeProcess[3],
		'123.00',
		'🚨 safeProcess should format numbers to 2 decimal places - check your type handling for number values',
	)
	assert.strictEqual(
		safeProcess[4],
		'0.00',
		'🚨 safeProcess should format zero correctly - check your type handling for number values',
	)
	assert.strictEqual(
		safeProcess[5],
		'3.14',
		'🚨 safeProcess should round numbers to 2 decimal places - check your type handling for number values',
	)
})

await test('safeProcess should handle boolean values', () => {
	assert.strictEqual(
		safeProcess[6],
		'true',
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	)
	assert.strictEqual(
		safeProcess[7],
		'false',
		'🚨 safeProcess should convert booleans to strings - check your type handling for boolean values',
	)
})

await test('safeProcess should handle other types', () => {
	assert.strictEqual(
		safeProcess[8],
		'null',
		'🚨 safeProcess should convert null to string - check your type handling for null values',
	)
	assert.strictEqual(
		safeProcess[9],
		'undefined',
		'🚨 safeProcess should convert undefined to string - check your type handling for undefined values',
	)
	assert.strictEqual(
		safeProcess[10],
		'[object Object]',
		'🚨 safeProcess should convert objects to string representation - check your type handling for object values',
	)
})

await test('parseJsonSafely should parse valid JSON', () => {
	assert.deepStrictEqual(
		parsedValid,
		{ name: 'Alice', age: 30 },
		'🚨 parseJsonSafely should parse valid JSON correctly - check your JSON parsing logic',
	)
})

await test('parseJsonSafely should return unknown type', () => {
	assert.strictEqual(
		parsedTestType,
		'object',
		'🚨 parseJsonSafely should return an object type - verify your return type handling',
	)
	assert.notStrictEqual(
		parsedTestIsNull,
		true,
		'🚨 parseJsonSafely should not return null for valid JSON - check your parsing logic',
	)
})

await test('isUser should correctly identify User objects', () => {
	assert.strictEqual(
		isUserResults[0],
		true,
		'🚨 isUser should return true for valid User objects - check your type guard implementation',
	)
	assert.strictEqual(
		isUserResults[1],
		false,
		'🚨 isUser should return false when email is missing - check your type guard validation',
	)
	assert.strictEqual(
		isUserResults[2],
		false,
		'🚨 isUser should return false when name is missing - check your type guard validation',
	)
	assert.strictEqual(
		isUserResults[3],
		false,
		'🚨 isUser should return false when name is not a string - check your type guard validation',
	)
	assert.strictEqual(
		isUserResults[4],
		false,
		'🚨 isUser should return false for null - check your type guard validation',
	)
	assert.strictEqual(
		isUserResults[5],
		false,
		'🚨 isUser should return false for non-objects - check your type guard validation',
	)
})

await test('parseUser should return User for valid JSON', () => {
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
	assert.strictEqual(
		parseUserInvalid,
		null,
		'🚨 parseUser should return null for invalid JSON - check your validation logic',
	)
})

await test('parseUser should throw for malformed JSON', () => {
	assert.strictEqual(
		malformedThrew,
		true,
		'🚨 parseUser should throw for malformed JSON - check your error handling',
	)
})
