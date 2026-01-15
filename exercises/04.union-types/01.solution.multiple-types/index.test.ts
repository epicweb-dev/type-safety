import assert from 'node:assert/strict'
import { test } from 'node:test'
import { formatId, processResult, type ID, type Result } from './index.ts'

await test('formatId should format number IDs correctly', () => {
	assert.strictEqual(
		formatId(123),
		'#123',
		'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId(456),
		'#456',
		'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId(0),
		'#0',
		'🚨 formatId should format number IDs with "#" prefix even for 0 - check your type narrowing logic',
	)
})

await test('formatId should return string IDs as-is', () => {
	assert.strictEqual(
		formatId('abc'),
		'abc',
		'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId('user-123'),
		'user-123',
		'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId(''),
		'',
		'🚨 formatId should return empty strings unchanged - check your type narrowing logic',
	)
})

await test('processResult should handle string results', () => {
	// We can't easily test console.log, but we can test the function doesn't throw
	assert.doesNotThrow(
		() => processResult('Done!'),
		'🚨 processResult should handle string results without throwing - check your union type handling',
	)
	assert.doesNotThrow(
		() => processResult('Success'),
		'🚨 processResult should handle string results without throwing - check your union type handling',
	)
})

await test('processResult should handle Error results', () => {
	const error = new Error('Test error')
	assert.doesNotThrow(
		() => processResult(error),
		'🚨 processResult should handle Error results without throwing - check your union type handling',
	)
	assert.doesNotThrow(
		() => processResult(new Error('Another error')),
		'🚨 processResult should handle Error results without throwing - check your union type handling',
	)
})

await test('ID type should accept string or number', () => {
	const stringId: ID = 'test-id'
	const numberId: ID = 123
	assert.strictEqual(
		typeof stringId,
		'string',
		'🚨 stringId should be type "string" - verify your ID union type accepts strings',
	)
	assert.strictEqual(
		typeof numberId,
		'number',
		'🚨 numberId should be type "number" - verify your ID union type accepts numbers',
	)
})

await test('Result type should accept string or Error', () => {
	const stringResult: Result = 'success'
	const errorResult: Result = new Error('error')
	assert.strictEqual(
		typeof stringResult,
		'string',
		'🚨 stringResult should be type "string" - verify your Result union type accepts strings',
	)
	assert.ok(
		errorResult instanceof Error,
		'🚨 errorResult should be an Error instance - verify your Result union type accepts Error',
	)
})
