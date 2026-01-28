import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('isString is exported', () => {
	assert.ok(
		'isString' in solution,
		'🚨 Make sure you export "isString" - add: export { isString, ... }',
	)
})

await test('isNumber is exported', () => {
	assert.ok(
		'isNumber' in solution,
		'🚨 Make sure you export "isNumber" - add: export { isNumber, ... }',
	)
})

await test('isProduct is exported', () => {
	assert.ok(
		'isProduct' in solution,
		'🚨 Make sure you export "isProduct" - add: export { isProduct, ... }',
	)
})

await test('processApiResponse is exported', () => {
	assert.ok(
		'processApiResponse' in solution,
		'🚨 Make sure you export "processApiResponse" - add: export { processApiResponse, ... }',
	)
})

await test('isString should correctly identify strings', () => {
	assert.strictEqual(
		solution.isString('hello'),
		true,
		'🚨 isString should return true for strings - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isString(''),
		true,
		'🚨 isString should return true for empty strings - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isString('123'),
		true,
		'🚨 isString should return true for numeric strings - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isString(123),
		false,
		'🚨 isString should return false for numbers - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isString(null),
		false,
		'🚨 isString should return false for null - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isString(undefined),
		false,
		'🚨 isString should return false for undefined - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isString({}),
		false,
		'🚨 isString should return false for objects - check your type guard implementation',
	)
})

await test('isNumber should correctly identify numbers', () => {
	assert.strictEqual(
		solution.isNumber(123),
		true,
		'🚨 isNumber should return true for integers - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber(0),
		true,
		'🚨 isNumber should return true for zero - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber(-42),
		true,
		'🚨 isNumber should return true for negative numbers - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber(3.14),
		true,
		'🚨 isNumber should return true for decimals - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber(NaN),
		false,
		'🚨 isNumber should return false for NaN - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber('123'),
		false,
		'🚨 isNumber should return false for strings - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber(null),
		false,
		'🚨 isNumber should return false for null - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isNumber(undefined),
		false,
		'🚨 isNumber should return false for undefined - check your type guard implementation',
	)
})

await test('isProduct should correctly identify Product objects', () => {
	const validProduct = { id: '1', name: 'Widget', price: 9.99 }
	assert.strictEqual(
		solution.isProduct(validProduct),
		true,
		'🚨 isProduct should return true for valid Product objects - check your type guard implementation',
	)
	assert.strictEqual(
		solution.isProduct({ id: '1', name: 'Widget' }),
		false,
		'🚨 isProduct should return false when price is missing - check your type guard validation',
	)
	assert.strictEqual(
		solution.isProduct({ id: '1', price: 9.99 }),
		false,
		'🚨 isProduct should return false when name is missing - check your type guard validation',
	)
	assert.strictEqual(
		solution.isProduct({ name: 'Widget', price: 9.99 }),
		false,
		'🚨 isProduct should return false when id is missing - check your type guard validation',
	)
	assert.strictEqual(
		solution.isProduct({ id: 1, name: 'Widget', price: 9.99 }),
		false,
		'🚨 isProduct should return false when id is not a string - check your type guard validation',
	)
	assert.strictEqual(
		solution.isProduct({ id: '1', name: 'Widget', price: '9.99' }),
		false,
		'🚨 isProduct should return false when price is not a number - check your type guard validation',
	)
	assert.strictEqual(
		solution.isProduct(null),
		false,
		'🚨 isProduct should return false for null - check your type guard validation',
	)
	assert.strictEqual(
		solution.isProduct('not an object'),
		false,
		'🚨 isProduct should return false for non-objects - check your type guard validation',
	)
})

await test('processApiResponse should handle Product objects', () => {
	const validProduct = { id: '1', name: 'Widget', price: 9.99 }
	const result = solution.processApiResponse(validProduct)
	assert.ok(
		typeof result === 'string' &&
			result.includes('Widget') &&
			result.includes('9.99'),
		'🚨 processApiResponse should format Product objects with name and price - check your type narrowing logic',
	)
})

await test('processApiResponse should handle string data', () => {
	assert.strictEqual(
		solution.processApiResponse('Hello'),
		'Hello',
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.processApiResponse('Test'),
		'Test',
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	)
})

await test('processApiResponse should handle unknown data', () => {
	assert.strictEqual(
		solution.processApiResponse(42),
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for unrecognized types - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.processApiResponse({ invalid: 'data' }),
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for invalid objects - check your type narrowing logic',
	)
	assert.strictEqual(
		solution.processApiResponse(null),
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for null - check your type narrowing logic',
	)
})

await test('isProduct type guard should narrow type correctly', () => {
	const validProduct = { id: '1', name: 'Widget', price: 9.99 }
	if (solution.isProduct(validProduct)) {
		assert.strictEqual(
			validProduct.id,
			'1',
			'🚨 data.id should be accessible after type guard - verify your type narrowing works',
		)
		assert.strictEqual(
			validProduct.name,
			'Widget',
			'🚨 data.name should be accessible after type guard - verify your type narrowing works',
		)
		assert.strictEqual(
			validProduct.price,
			9.99,
			'🚨 data.price should be accessible after type guard - verify your type narrowing works',
		)
	}
})
