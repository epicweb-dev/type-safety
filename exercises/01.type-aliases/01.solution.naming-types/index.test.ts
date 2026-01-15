import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { greet, formatProduct, userSample, productSample } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('greet function should work correctly', () => {
	assert.strictEqual(
		greet[0],
		'Hello, Alice!',
		'🚨 greet function should return "Hello, Alice!" - check your function implementation',
	)
})

await test('formatProduct function should format products correctly', () => {
	assert.strictEqual(
		formatProduct[0],
		'Laptop - $999.99 (In Stock)',
		'🚨 formatProduct should format in-stock products correctly - check your formatting logic',
	)
	assert.strictEqual(
		formatProduct[1],
		'Mouse - $29.99 (Out of Stock)',
		'🚨 formatProduct should format out-of-stock products correctly - check your conditional logic',
	)
})

await test('User type should enforce correct structure', () => {
	assert.strictEqual(
		userSample.id,
		'1',
		'🚨 user.id should be "1" - verify your User type definition',
	)
	assert.strictEqual(
		userSample.name,
		'Test User',
		'🚨 user.name should be "Test User" - verify your User type definition',
	)
	assert.strictEqual(
		userSample.email,
		'test@example.com',
		'🚨 user.email should be "test@example.com" - verify your User type definition',
	)
})

await test('Product type should enforce correct structure', () => {
	assert.strictEqual(
		productSample.id,
		'p1',
		'🚨 product.id should be "p1" - verify your Product type definition',
	)
	assert.strictEqual(
		productSample.name,
		'Test Product',
		'🚨 product.name should be "Test Product" - verify your Product type definition',
	)
	assert.strictEqual(
		productSample.price,
		49.99,
		'🚨 product.price should be 49.99 - verify your Product type definition',
	)
	assert.strictEqual(
		productSample.inStock,
		true,
		'🚨 product.inStock should be true - verify your Product type definition',
	)
})
