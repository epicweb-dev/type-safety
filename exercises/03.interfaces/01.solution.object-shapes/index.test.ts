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
	assert.strictEqual(
		solution.getProductSummary(solution.product),
		'Widget - $29.99: No description',
		'🚨 getProductSummary should handle products without description - check your optional property handling',
	)
	assert.strictEqual(
		solution.getProductSummary(solution.productWithDesc),
		'Gadget - $49.99: Has description',
		'🚨 getProductSummary should include description when present - check your optional property handling',
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
