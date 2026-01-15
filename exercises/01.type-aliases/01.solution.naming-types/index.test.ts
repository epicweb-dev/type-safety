import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('greet function is exported', () => {
	assert.ok(
		'greet' in solution,
		'🚨 Make sure you export "greet" - add: export { greet, ... }',
	)
})

await test('formatProduct function is exported', () => {
	assert.ok(
		'formatProduct' in solution,
		'🚨 Make sure you export "formatProduct" - add: export { formatProduct, ... }',
	)
})

await test('userSample is exported', () => {
	assert.ok(
		'userSample' in solution,
		'🚨 Make sure you export "userSample" - add: export { userSample, ... }',
	)
})

await test('productSample is exported', () => {
	assert.ok(
		'productSample' in solution,
		'🚨 Make sure you export "productSample" - add: export { productSample, ... }',
	)
})

await test('greet function should work correctly', () => {
	const alice = { id: '1', name: 'Alice', email: 'alice@example.com' }
	assert.strictEqual(
		solution.greet(alice),
		'Hello, Alice!',
		'🚨 greet function should return "Hello, Alice!" - check your function implementation',
	)
})

await test('formatProduct function should format products correctly', () => {
	const laptop = { id: 'p1', name: 'Laptop', price: 999.99, inStock: true }
	const outOfStockProduct = {
		id: 'p2',
		name: 'Mouse',
		price: 29.99,
		inStock: false,
	}
	assert.strictEqual(
		solution.formatProduct(laptop),
		'Laptop - $999.99 (In Stock)',
		'🚨 formatProduct should format in-stock products correctly - check your formatting logic',
	)
	assert.strictEqual(
		solution.formatProduct(outOfStockProduct),
		'Mouse - $29.99 (Out of Stock)',
		'🚨 formatProduct should format out-of-stock products correctly - check your conditional logic',
	)
})

await test('User type should enforce correct structure', () => {
	assert.strictEqual(
		solution.userSample.id,
		'1',
		'🚨 user.id should be "1" - verify your User type definition',
	)
	assert.strictEqual(
		solution.userSample.name,
		'Test User',
		'🚨 user.name should be "Test User" - verify your User type definition',
	)
	assert.strictEqual(
		solution.userSample.email,
		'test@example.com',
		'🚨 user.email should be "test@example.com" - verify your User type definition',
	)
})

await test('Product type should enforce correct structure', () => {
	assert.strictEqual(
		solution.productSample.id,
		'p1',
		'🚨 product.id should be "p1" - verify your Product type definition',
	)
	assert.strictEqual(
		solution.productSample.name,
		'Test Product',
		'🚨 product.name should be "Test Product" - verify your Product type definition',
	)
	assert.strictEqual(
		solution.productSample.price,
		49.99,
		'🚨 product.price should be 49.99 - verify your Product type definition',
	)
	assert.strictEqual(
		solution.productSample.inStock,
		true,
		'🚨 product.inStock should be true - verify your Product type definition',
	)
})
