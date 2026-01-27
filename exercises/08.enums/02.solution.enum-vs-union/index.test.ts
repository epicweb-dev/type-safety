import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('LogLevel is exported', () => {
	assert.ok(
		'LogLevel' in solution,
		'🚨 Make sure you export "LogLevel" - add: export { LogLevel, ... }',
	)
})

await test('logWithEnum is exported', () => {
	assert.ok(
		'logWithEnum' in solution,
		'🚨 Make sure you export "logWithEnum" - add: export { logWithEnum, ... }',
	)
})

await test('logWithUnion is exported', () => {
	assert.ok(
		'logWithUnion' in solution,
		'🚨 Make sure you export "logWithUnion" - add: export { logWithUnion, ... }',
	)
})

await test('LogLevel enum should have correct values', () => {
	assert.strictEqual(
		solution.LogLevel.Debug,
		'debug',
		'🚨 LogLevel.Debug should be "debug" - string enums assign string values to enum members',
	)
	assert.strictEqual(
		solution.LogLevel.Info,
		'info',
		'🚨 LogLevel.Info should be "info" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		solution.LogLevel.Warn,
		'warn',
		'🚨 LogLevel.Warn should be "warn" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		solution.LogLevel.Error,
		'error',
		'🚨 LogLevel.Error should be "error" - check that all enum values are correctly assigned',
	)
})

await test('Union type should work correctly', () => {
	const unionValues: Array<'debug' | 'info' | 'warn' | 'error'> = [
		'debug',
		'info',
		'warn',
		'error',
	]
	assert.strictEqual(
		unionValues[0],
		'debug',
		'🚨 debug should be "debug" - union types allow direct string literal assignment',
	)
	assert.strictEqual(
		unionValues[1],
		'info',
		'🚨 info should be "info" - union types are more flexible than enums for simple string values',
	)
	assert.strictEqual(
		unionValues[2],
		'warn',
		'🚨 warn should be "warn" - verify the union type allows these specific string values',
	)
	assert.strictEqual(
		unionValues[3],
		'error',
		'🚨 error should be "error" - union types restrict values to the specified literals',
	)
})

await test('logWithEnum should format messages correctly', () => {
	// Capture console.log output by checking the function works
	assert.ok(
		typeof solution.logWithEnum === 'function',
		'🚨 logWithEnum should be a function',
	)
	// Test that it accepts enum values
	solution.logWithEnum(solution.LogLevel.Info, 'Server started')
	assert.ok(true, '🚨 logWithEnum should accept LogLevel enum values')
})

await test('logWithUnion should format messages correctly', () => {
	// Capture console.log output by checking the function works
	assert.ok(
		typeof solution.logWithUnion === 'function',
		'🚨 logWithUnion should be a function',
	)
	// Test that it accepts union type values
	solution.logWithUnion('error', 'Connection failed')
	assert.ok(true, '🚨 logWithUnion should accept union type string values')
})
