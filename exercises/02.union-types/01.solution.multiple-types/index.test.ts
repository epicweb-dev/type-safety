import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('formatId is exported', () => {
	assert.ok(
		'formatId' in solution,
		'🚨 Make sure you export "formatId" - add: export { formatId, ... }',
	)
})

await test('processResult is exported', () => {
	assert.ok(
		'processResult' in solution,
		'🚨 Make sure you export "processResult" - add: export { processResult, ... }',
	)
})

await test('formatId should format number IDs correctly', () => {
	assert.strictEqual(
		solution.formatId(123),
		'#123',
		'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.formatId(456),
		'#456',
		'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.formatId(0),
		'#0',
		'🚨 formatId should format number IDs with "#" prefix even for 0 - check your type narrowing logic',
	)
})

await test('formatId should return string IDs as-is', () => {
	assert.strictEqual(
		solution.formatId('abc'),
		'abc',
		'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.formatId('user-123'),
		'user-123',
		'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.formatId(''),
		'',
		'🚨 formatId should return empty strings unchanged - check your type narrowing logic',
	)
})

await test('processResult should handle string results', () => {
	assert.strictEqual(
		solution.processResult('Done!'),
		'Success: Done!',
		'🚨 processResult should handle string results without throwing - check your union type handling',
	)
	assert.strictEqual(
		solution.processResult('Success'),
		'Success: Success',
		'🚨 processResult should handle string results without throwing - check your union type handling',
	)
})

await test('processResult should handle Error results', () => {
	const sampleError = new Error('Test error')
	assert.strictEqual(
		solution.processResult(sampleError),
		'Error: Test error',
		'🚨 processResult should handle Error results without throwing - check your union type handling',
	)
	assert.strictEqual(
		solution.processResult(new Error('Another error')),
		'Error: Another error',
		'🚨 processResult should handle Error results without throwing - check your union type handling',
	)
})

await test('ID type should accept string or number', () => {
	const stringId = 'test-id'
	const numberId = 123
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
	const stringResult = 'success'
	const sampleError = new Error('Test error')
	assert.strictEqual(
		typeof stringResult,
		'string',
		'🚨 stringResult should be type "string" - verify your Result union type accepts strings',
	)
	assert.ok(
		sampleError instanceof Error,
		'🚨 errorResult should be an Error instance - verify your Result union type accepts Error',
	)
})
