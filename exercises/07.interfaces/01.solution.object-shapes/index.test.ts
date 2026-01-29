import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

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

await test('Product interface should include status union type', () => {
	assert.ok(
		solution.product.status === 'active' ||
			solution.product.status === 'inactive' ||
			solution.product.status === 'discontinued',
		'🚨 product.status should be one of: "active", "inactive", or "discontinued" - verify your Product interface includes status property with union type',
	)
	assert.ok(
		solution.productWithDesc.status === 'active' ||
			solution.productWithDesc.status === 'inactive' ||
			solution.productWithDesc.status === 'discontinued',
		'🚨 productWithDesc.status should be one of: "active", "inactive", or "discontinued" - verify your Product interface includes status property with union type',
	)
})

await test('Product interface should allow optional description', () => {
	assert.strictEqual(
		solution.product.description === undefined,
		true,
		'🚨 product.description should be undefined when not provided - verify description is optional in Product interface',
	)
	assert.strictEqual(
		solution.productWithDesc.description,
		'Has description',
		'🚨 productWithDesc.description should be "Has description" when provided - verify description is optional in Product interface',
	)
})
