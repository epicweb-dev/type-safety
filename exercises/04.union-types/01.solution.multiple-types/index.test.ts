import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { formatId, processResult, idTypes, resultTypes } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('formatId should format number IDs correctly', () => {
	assert.strictEqual(
		formatId[0],
		'#123',
		'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId[1],
		'#456',
		'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId[2],
		'#0',
		'🚨 formatId should format number IDs with "#" prefix even for 0 - check your type narrowing logic',
	)
})

await test('formatId should return string IDs as-is', () => {
	assert.strictEqual(
		formatId[3],
		'abc',
		'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId[4],
		'user-123',
		'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		formatId[5],
		'',
		'🚨 formatId should return empty strings unchanged - check your type narrowing logic',
	)
})

await test('processResult should handle string results', () => {
	assert.strictEqual(
		processResult[0],
		'Success: Done!',
		'🚨 processResult should handle string results without throwing - check your union type handling',
	)
	assert.strictEqual(
		processResult[1],
		'Success: Success',
		'🚨 processResult should handle string results without throwing - check your union type handling',
	)
})

await test('processResult should handle Error results', () => {
	assert.strictEqual(
		processResult[2],
		'Error: Test error',
		'🚨 processResult should handle Error results without throwing - check your union type handling',
	)
	assert.strictEqual(
		processResult[3],
		'Error: Another error',
		'🚨 processResult should handle Error results without throwing - check your union type handling',
	)
})

await test('ID type should accept string or number', () => {
	assert.strictEqual(
		idTypes.stringId,
		'string',
		'🚨 stringId should be type "string" - verify your ID union type accepts strings',
	)
	assert.strictEqual(
		idTypes.numberId,
		'number',
		'🚨 numberId should be type "number" - verify your ID union type accepts numbers',
	)
})

await test('Result type should accept string or Error', () => {
	assert.strictEqual(
		resultTypes.stringResult,
		'string',
		'🚨 stringResult should be type "string" - verify your Result union type accepts strings',
	)
	assert.ok(
		resultTypes.errorIsError,
		'🚨 errorResult should be an Error instance - verify your Result union type accepts Error',
	)
})
