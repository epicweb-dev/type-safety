import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('safeProcess is exported', () => {
	assert.ok(
		'safeProcess' in solution,
		'🚨 Make sure you export "safeProcess" - add: export { safeProcess }',
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
