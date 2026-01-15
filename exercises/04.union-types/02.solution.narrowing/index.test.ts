import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { normalizeText, describeUser, textInputTypes } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('normalizeText should trim string input', () => {
	assert.strictEqual(
		normalizeText[0],
		'hello',
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	)
	assert.strictEqual(
		normalizeText[1],
		'world',
		'🚨 normalizeText should return strings unchanged if no whitespace - check your type narrowing for strings',
	)
	assert.strictEqual(
		normalizeText[2],
		'test',
		'🚨 normalizeText should trim whitespace from strings - check your type narrowing for strings',
	)
})

await test('normalizeText should join array input', () => {
	assert.strictEqual(
		normalizeText[3],
		'hello world',
		'🚨 normalizeText should join array elements with spaces - check your type narrowing for arrays',
	)
	assert.strictEqual(
		normalizeText[4],
		'a b c',
		'🚨 normalizeText should join multiple array elements - check your type narrowing for arrays',
	)
	assert.strictEqual(
		normalizeText[5],
		'single',
		'🚨 normalizeText should handle single-element arrays - check your type narrowing for arrays',
	)
})

await test('normalizeText should handle array with spaces', () => {
	// The function joins with space and then trims the result
	assert.strictEqual(
		normalizeText[6],
		'hello     world',
		'🚨 normalizeText should join array elements before trimming - check your array handling logic',
	)
})

await test('describeUser should describe admin users', () => {
	assert.strictEqual(
		describeUser[0],
		'Admin with 2 permissions',
		'🚨 describeUser should format admin users with permission count - check your discriminated union narrowing',
	)
})

await test('describeUser should describe regular users', () => {
	assert.strictEqual(
		describeUser[1],
		'Regular user (free)',
		'🚨 describeUser should format regular users with subscription - check your discriminated union narrowing',
	)
	assert.strictEqual(
		describeUser[2],
		'Regular user (premium)',
		'🚨 describeUser should format premium users correctly - check your discriminated union narrowing',
	)
})

await test('describeUser should describe guest users', () => {
	assert.strictEqual(
		describeUser[3],
		'Guest user',
		'🚨 describeUser should format guest users - check your discriminated union narrowing',
	)
})

await test('TextInput type should accept string or string array', () => {
	assert.strictEqual(
		textInputTypes.stringType,
		'string',
		'🚨 stringInput should be type "string" - verify your TextInput union type accepts strings',
	)
	assert.ok(
		textInputTypes.arrayIsArray,
		'🚨 arrayInput should be an array - verify your TextInput union type accepts string arrays',
	)
})
