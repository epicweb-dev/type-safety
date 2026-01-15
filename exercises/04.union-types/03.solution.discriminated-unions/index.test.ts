import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { renderState, describePayment, apiStateStatuses } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('renderState should handle loading state', () => {
	assert.strictEqual(
		renderState[0],
		'Loading...',
		'🚨 renderState should return "Loading..." for loading state - check your discriminated union narrowing',
	)
})

await test('renderState should handle success state', () => {
	assert.strictEqual(
		renderState[1],
		'Loaded 3 items',
		'🚨 renderState should return item count for success state - check your discriminated union narrowing',
	)
	assert.strictEqual(
		renderState[2],
		'Loaded 0 items',
		'🚨 renderState should handle empty data arrays - check your discriminated union narrowing',
	)
})

await test('renderState should handle error state', () => {
	assert.strictEqual(
		renderState[3],
		'Error: Network failed',
		'🚨 renderState should return error message for error state - check your discriminated union narrowing',
	)
})

await test('describePayment should describe credit cards', () => {
	assert.strictEqual(
		describePayment[0],
		'Card ending in 4242 (exp: 12/25)',
		'🚨 describePayment should format credit cards correctly - check your discriminated union narrowing',
	)
})

await test('describePayment should describe PayPal', () => {
	assert.strictEqual(
		describePayment[1],
		'PayPal: user@example.com',
		'🚨 describePayment should format PayPal payments correctly - check your discriminated union narrowing',
	)
})

await test('describePayment should describe bank transfers', () => {
	assert.strictEqual(
		describePayment[2],
		'Bank account: 123456789',
		'🚨 describePayment should format bank transfers correctly - check your discriminated union narrowing',
	)
})

await test('ApiState should be a discriminated union', () => {
	assert.strictEqual(
		apiStateStatuses[0],
		'loading',
		'🚨 loading.status should be "loading" - verify your ApiState discriminated union',
	)
	assert.strictEqual(
		apiStateStatuses[1],
		'success',
		'🚨 success.status should be "success" - verify your ApiState discriminated union',
	)
	assert.strictEqual(
		apiStateStatuses[2],
		'error',
		'🚨 error.status should be "error" - verify your ApiState discriminated union',
	)
})
