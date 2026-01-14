import assert from 'node:assert/strict'
import { test } from 'node:test'
// @ts-ignore - these will fail in the playground with the problem.
import { greet, formatProduct, type User, type Product } from './index.ts'

await test('greet function should work correctly', () => {
	const user: User = {
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
	}
	assert.strictEqual(
		greet(user),
		'Hello, Alice!',
		'🚨 greet function should return "Hello, Alice!" - check your function implementation',
	)
})

await test('formatProduct function should format products correctly', () => {
	const inStockProduct: Product = {
		id: 'p1',
		name: 'Laptop',
		price: 999.99,
		inStock: true,
	}
	const outOfStockProduct: Product = {
		id: 'p2',
		name: 'Mouse',
		price: 29.99,
		inStock: false,
	}
	assert.strictEqual(
		formatProduct(inStockProduct),
		'Laptop - $999.99 (In Stock)',
		'🚨 formatProduct should format in-stock products correctly - check your formatting logic',
	)
	assert.strictEqual(
		formatProduct(outOfStockProduct),
		'Mouse - $29.99 (Out of Stock)',
		'🚨 formatProduct should format out-of-stock products correctly - check your conditional logic',
	)
})

await test('User type should enforce correct structure', () => {
	const user: User = {
		id: '1',
		name: 'Test User',
		email: 'test@example.com',
	}
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - verify your User type definition',
	)
	assert.strictEqual(
		user.name,
		'Test User',
		'🚨 user.name should be "Test User" - verify your User type definition',
	)
	assert.strictEqual(
		user.email,
		'test@example.com',
		'🚨 user.email should be "test@example.com" - verify your User type definition',
	)
})

await test('Product type should enforce correct structure', () => {
	const product: Product = {
		id: 'p1',
		name: 'Test Product',
		price: 49.99,
		inStock: true,
	}
	assert.strictEqual(
		product.id,
		'p1',
		'🚨 product.id should be "p1" - verify your Product type definition',
	)
	assert.strictEqual(
		product.name,
		'Test Product',
		'🚨 product.name should be "Test Product" - verify your Product type definition',
	)
	assert.strictEqual(
		product.price,
		49.99,
		'🚨 product.price should be 49.99 - verify your Product type definition',
	)
	assert.strictEqual(
		product.inStock,
		true,
		'🚨 product.inStock should be true - verify your Product type definition',
	)
})
