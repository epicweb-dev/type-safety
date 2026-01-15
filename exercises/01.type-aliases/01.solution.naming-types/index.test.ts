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
	const inStockResult = solution.formatProduct(laptop)
	const outOfStockResult = solution.formatProduct(outOfStockProduct)

	// Verify the result contains the product name, price, and stock status
	assert.ok(
		inStockResult.includes('Laptop') && inStockResult.includes('999.99'),
		'🚨 formatProduct should include product name and price',
	)
	assert.ok(
		outOfStockResult.includes('Mouse') && outOfStockResult.includes('29.99'),
		'🚨 formatProduct should include product name and price',
	)
	// In-stock and out-of-stock should produce different results
	assert.notStrictEqual(
		inStockResult,
		outOfStockResult.replace('Mouse', 'Laptop').replace('29.99', '999.99'),
		'🚨 formatProduct should indicate stock status differently for in-stock vs out-of-stock products',
	)
})

await test('User type should enforce correct structure', () => {
	assert.ok(
		typeof solution.userSample.id === 'string',
		'🚨 user.id should be a string - verify your User type definition',
	)
	assert.ok(
		typeof solution.userSample.name === 'string',
		'🚨 user.name should be a string - verify your User type definition',
	)
	assert.ok(
		typeof solution.userSample.email === 'string',
		'🚨 user.email should be a string - verify your User type definition',
	)
})

await test('Product type should enforce correct structure', () => {
	assert.ok(
		typeof solution.productSample.id === 'string',
		'🚨 product.id should be a string - verify your Product type definition',
	)
	assert.ok(
		typeof solution.productSample.name === 'string',
		'🚨 product.name should be a string - verify your Product type definition',
	)
	assert.ok(
		typeof solution.productSample.price === 'number',
		'🚨 product.price should be a number - verify your Product type definition',
	)
	assert.ok(
		typeof solution.productSample.inStock === 'boolean',
		'🚨 product.inStock should be a boolean - verify your Product type definition',
	)
})
