import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { isString, isNumber, isProduct, processApiResponse, narrowedProduct } =
	JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('isString should correctly identify strings', () => {
	assert.strictEqual(
		isString[0],
		true,
		'🚨 isString should return true for strings - check your type guard implementation',
	)
	assert.strictEqual(
		isString[1],
		true,
		'🚨 isString should return true for empty strings - check your type guard implementation',
	)
	assert.strictEqual(
		isString[2],
		true,
		'🚨 isString should return true for numeric strings - check your type guard implementation',
	)
	assert.strictEqual(
		isString[3],
		false,
		'🚨 isString should return false for numbers - check your type guard implementation',
	)
	assert.strictEqual(
		isString[4],
		false,
		'🚨 isString should return false for null - check your type guard implementation',
	)
	assert.strictEqual(
		isString[5],
		false,
		'🚨 isString should return false for undefined - check your type guard implementation',
	)
	assert.strictEqual(
		isString[6],
		false,
		'🚨 isString should return false for objects - check your type guard implementation',
	)
})

await test('isNumber should correctly identify numbers', () => {
	assert.strictEqual(
		isNumber[0],
		true,
		'🚨 isNumber should return true for integers - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[1],
		true,
		'🚨 isNumber should return true for zero - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[2],
		true,
		'🚨 isNumber should return true for negative numbers - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[3],
		true,
		'🚨 isNumber should return true for decimals - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[4],
		false,
		'🚨 isNumber should return false for NaN - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[5],
		false,
		'🚨 isNumber should return false for strings - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[6],
		false,
		'🚨 isNumber should return false for null - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber[7],
		false,
		'🚨 isNumber should return false for undefined - check your type guard implementation',
	)
})

await test('isProduct should correctly identify Product objects', () => {
	assert.strictEqual(
		isProduct[0],
		true,
		'🚨 isProduct should return true for valid Product objects - check your type guard implementation',
	)
	assert.strictEqual(
		isProduct[1],
		false,
		'🚨 isProduct should return false when price is missing - check your type guard validation',
	)
	assert.strictEqual(
		isProduct[2],
		false,
		'🚨 isProduct should return false when name is missing - check your type guard validation',
	)
	assert.strictEqual(
		isProduct[3],
		false,
		'🚨 isProduct should return false when id is missing - check your type guard validation',
	)
	assert.strictEqual(
		isProduct[4],
		false,
		'🚨 isProduct should return false when id is not a string - check your type guard validation',
	)
	assert.strictEqual(
		isProduct[5],
		false,
		'🚨 isProduct should return false when price is not a number - check your type guard validation',
	)
	assert.strictEqual(
		isProduct[6],
		false,
		'🚨 isProduct should return false for null - check your type guard validation',
	)
	assert.strictEqual(
		isProduct[7],
		false,
		'🚨 isProduct should return false for non-objects - check your type guard validation',
	)
})

await test('processApiResponse should handle Product objects', () => {
	assert.strictEqual(
		processApiResponse[0],
		'Product: Widget ($9.99)',
		'🚨 processApiResponse should format Product objects correctly - check your type narrowing logic',
	)
})

await test('processApiResponse should handle string data', () => {
	assert.strictEqual(
		processApiResponse[1],
		'Hello',
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		processApiResponse[2],
		'Test',
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	)
})

await test('processApiResponse should handle unknown data', () => {
	assert.strictEqual(
		processApiResponse[3],
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for unrecognized types - check your type narrowing logic',
	)
	assert.strictEqual(
		processApiResponse[4],
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for invalid objects - check your type narrowing logic',
	)
	assert.strictEqual(
		processApiResponse[5],
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for null - check your type narrowing logic',
	)
})

await test('isProduct type guard should narrow type correctly', () => {
	assert.strictEqual(
		narrowedProduct.id,
		'1',
		'🚨 data.id should be accessible after type guard - verify your type narrowing works',
	)
	assert.strictEqual(
		narrowedProduct.name,
		'Widget',
		'🚨 data.name should be accessible after type guard - verify your type narrowing works',
	)
	assert.strictEqual(
		narrowedProduct.price,
		9.99,
		'🚨 data.price should be accessible after type guard - verify your type narrowing works',
	)
})
