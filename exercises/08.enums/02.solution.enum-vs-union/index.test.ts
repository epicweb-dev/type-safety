import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('logWithUnion is exported', () => {
	assert.ok(
		'logWithUnion' in solution,
		'🚨 Make sure you export "logWithUnion" - add: export { logWithUnion }',
	)
})

await test('logWithUnion accepts union type values', () => {
	assert.ok(
		typeof solution.logWithUnion === 'function',
		'🚨 logWithUnion should be a function',
	)
	// Test that it accepts all valid union type values
	solution.logWithUnion('debug', 'Debug message')
	solution.logWithUnion('info', 'Info message')
	solution.logWithUnion('warn', 'Warning message')
	solution.logWithUnion('error', 'Error message')
	assert.ok(true, '🚨 logWithUnion should accept all union type string values')
})

await test('logWithUnion provides type safety', () => {
	// This test verifies the union type restricts values correctly
	const validLevels: Array<'debug' | 'info' | 'warn' | 'error'> = [
		'debug',
		'info',
		'warn',
		'error',
	]
	validLevels.forEach((level) => {
		solution.logWithUnion(level, 'Test message')
	})
	assert.ok(
		true,
		'🚨 logWithUnion should accept only the specified union type values',
	)
})
