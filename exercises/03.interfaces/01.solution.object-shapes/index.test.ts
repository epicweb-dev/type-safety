import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isAdmin, getProductSummary, type User, type Product } from './index.ts'

await test('isAdmin should correctly identify admin users', () => {
	const admin: User = {
		id: '1',
		name: 'Admin',
		email: 'admin@example.com',
		role: 'admin',
	}
	const regularUser: User = {
		id: '2',
		name: 'User',
		email: 'user@example.com',
		role: 'user',
	}
	assert.strictEqual(
		isAdmin(admin),
		true,
		'🚨 isAdmin should return true for admin users - check your role comparison logic',
	)
	assert.strictEqual(
		isAdmin(regularUser),
		false,
		'🚨 isAdmin should return false for regular users - check your role comparison logic',
	)
})

await test('getProductSummary should format products correctly', () => {
	const productWithoutDesc: Product = {
		id: 'p1',
		name: 'Widget',
		price: 29.99,
	}
	const productWithDesc: Product = {
		id: 'p2',
		name: 'Gadget',
		price: 49.99,
		description: 'A fancy gadget',
	}
	assert.strictEqual(
		getProductSummary(productWithoutDesc),
		'Widget - $29.99: No description',
		'🚨 getProductSummary should handle products without description - check your optional property handling',
	)
	assert.strictEqual(
		getProductSummary(productWithDesc),
		'Gadget - $49.99: A fancy gadget',
		'🚨 getProductSummary should include description when present - check your optional property handling',
	)
})

await test('User interface should enforce correct structure', () => {
	const user: User = {
		id: '1',
		name: 'Test User',
		email: 'test@example.com',
		role: 'user',
	}
	assert.strictEqual(
		user.role,
		'user',
		'🚨 user.role should be "user" - verify your User interface includes role property',
	)
})

await test('Product interface should allow optional description', () => {
	const product1: Product = { id: 'p1', name: 'Product', price: 10 }
	const product2: Product = {
		id: 'p2',
		name: 'Product',
		price: 10,
		description: 'Has description',
	}
	assert.strictEqual(
		product1.description,
		undefined,
		'🚨 product1.description should be undefined when not provided - verify description is optional in Product interface',
	)
	assert.strictEqual(
		product2.description,
		'Has description',
		'🚨 product2.description should be "Has description" when provided - verify description is optional in Product interface',
	)
})
