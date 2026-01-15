import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('isAdmin is exported', () => {
	assert.ok(
		'isAdmin' in solution,
		'🚨 Make sure you export "isAdmin" - add: export { isAdmin, ... }',
	)
})

await test('getProductSummary is exported', () => {
	assert.ok(
		'getProductSummary' in solution,
		'🚨 Make sure you export "getProductSummary" - add: export { getProductSummary, ... }',
	)
})

await test('product is exported', () => {
	assert.ok(
		'product' in solution,
		'🚨 Make sure you export "product" - add: export { product, ... }',
	)
})

await test('productWithDesc is exported', () => {
	assert.ok(
		'productWithDesc' in solution,
		'🚨 Make sure you export "productWithDesc" - add: export { productWithDesc, ... }',
	)
})

await test('regularUser is exported', () => {
	assert.ok(
		'regularUser' in solution,
		'🚨 Make sure you export "regularUser" - add: export { regularUser, ... }',
	)
})

await test('isAdmin should correctly identify admin users', () => {
	const admin = {
		id: '1',
		name: 'Admin',
		email: 'admin@example.com',
		role: 'admin' as const,
	}
	assert.strictEqual(
		solution.isAdmin(admin),
		true,
		'🚨 isAdmin should return true for admin users - check your role comparison logic',
	)
	assert.strictEqual(
		solution.isAdmin(solution.regularUser),
		false,
		'🚨 isAdmin should return false for regular users - check your role comparison logic',
	)
})

await test('getProductSummary should format products correctly', () => {
	const noDescResult = solution.getProductSummary(solution.product)
	const withDescResult = solution.getProductSummary(solution.productWithDesc)

	// Results should include product name and price
	assert.ok(
		typeof noDescResult === 'string' && noDescResult.length > 0,
		'🚨 getProductSummary should return a non-empty string',
	)
	assert.ok(
		typeof withDescResult === 'string' && withDescResult.length > 0,
		'🚨 getProductSummary should return a non-empty string',
	)
	// Results should be different when description is present vs absent
	assert.notStrictEqual(
		noDescResult,
		withDescResult,
		'🚨 getProductSummary should produce different output when description is present vs absent',
	)
})

await test('User interface should enforce correct structure', () => {
	assert.strictEqual(
		solution.regularUser.role,
		'user',
		'🚨 user.role should be "user" - verify your User interface includes role property',
	)
})

await test('Product interface should allow optional description', () => {
	assert.strictEqual(
		solution.product.description === undefined,
		true,
		'🚨 product1.description should be undefined when not provided - verify description is optional in Product interface',
	)
	assert.strictEqual(
		solution.productWithDesc.description,
		'Has description',
		'🚨 product2.description should be "Has description" when provided - verify description is optional in Product interface',
	)
})
