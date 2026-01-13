import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	isString,
	isNumber,
	isProduct,
	processApiResponse,
	type Product,
} from './index.ts'

await test('isString should correctly identify strings', () => {
	assert.strictEqual(
		isString('hello'),
		true,
		'🚨 isString should return true for strings - check your type guard implementation',
	)
	assert.strictEqual(
		isString(''),
		true,
		'🚨 isString should return true for empty strings - check your type guard implementation',
	)
	assert.strictEqual(
		isString('123'),
		true,
		'🚨 isString should return true for numeric strings - check your type guard implementation',
	)
	assert.strictEqual(
		isString(123),
		false,
		'🚨 isString should return false for numbers - check your type guard implementation',
	)
	assert.strictEqual(
		isString(null),
		false,
		'🚨 isString should return false for null - check your type guard implementation',
	)
	assert.strictEqual(
		isString(undefined),
		false,
		'🚨 isString should return false for undefined - check your type guard implementation',
	)
	assert.strictEqual(
		isString({}),
		false,
		'🚨 isString should return false for objects - check your type guard implementation',
	)
})

await test('isNumber should correctly identify numbers', () => {
	assert.strictEqual(
		isNumber(123),
		true,
		'🚨 isNumber should return true for integers - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber(0),
		true,
		'🚨 isNumber should return true for zero - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber(-42),
		true,
		'🚨 isNumber should return true for negative numbers - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber(3.14),
		true,
		'🚨 isNumber should return true for decimals - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber(NaN),
		false,
		'🚨 isNumber should return false for NaN - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber('123'),
		false,
		'🚨 isNumber should return false for strings - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber(null),
		false,
		'🚨 isNumber should return false for null - check your type guard implementation',
	)
	assert.strictEqual(
		isNumber(undefined),
		false,
		'🚨 isNumber should return false for undefined - check your type guard implementation',
	)
})

await test('isProduct should correctly identify Product objects', () => {
	const validProduct = { id: '1', name: 'Widget', price: 9.99 }
	const invalidProduct1 = { id: '1', name: 'Widget' }
	const invalidProduct2 = { id: '1', price: 9.99 }
	const invalidProduct3 = { name: 'Widget', price: 9.99 }
	const invalidProduct4 = { id: 1, name: 'Widget', price: 9.99 }
	const invalidProduct5 = { id: '1', name: 'Widget', price: '9.99' }
	const invalidProduct6 = null
	const invalidProduct7 = 'not an object'

	assert.strictEqual(
		isProduct(validProduct),
		true,
		'🚨 isProduct should return true for valid Product objects - check your type guard implementation',
	)
	assert.strictEqual(
		isProduct(invalidProduct1),
		false,
		'🚨 isProduct should return false when price is missing - check your type guard validation',
	)
	assert.strictEqual(
		isProduct(invalidProduct2),
		false,
		'🚨 isProduct should return false when name is missing - check your type guard validation',
	)
	assert.strictEqual(
		isProduct(invalidProduct3),
		false,
		'🚨 isProduct should return false when id is missing - check your type guard validation',
	)
	assert.strictEqual(
		isProduct(invalidProduct4),
		false,
		'🚨 isProduct should return false when id is not a string - check your type guard validation',
	)
	assert.strictEqual(
		isProduct(invalidProduct5),
		false,
		'🚨 isProduct should return false when price is not a number - check your type guard validation',
	)
	assert.strictEqual(
		isProduct(invalidProduct6),
		false,
		'🚨 isProduct should return false for null - check your type guard validation',
	)
	assert.strictEqual(
		isProduct(invalidProduct7),
		false,
		'🚨 isProduct should return false for non-objects - check your type guard validation',
	)
})

await test('processApiResponse should handle Product objects', () => {
	const product: Product = { id: '1', name: 'Widget', price: 9.99 }
	assert.strictEqual(
		processApiResponse(product),
		'Product: Widget ($9.99)',
		'🚨 processApiResponse should format Product objects correctly - check your type narrowing logic',
	)
})

await test('processApiResponse should handle string data', () => {
	assert.strictEqual(
		processApiResponse('Hello'),
		'Hello',
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	)
	assert.strictEqual(
		processApiResponse('Test'),
		'Test',
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	)
})

await test('processApiResponse should handle unknown data', () => {
	assert.strictEqual(
		processApiResponse(42),
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for unrecognized types - check your type narrowing logic',
	)
	assert.strictEqual(
		processApiResponse({ invalid: 'data' }),
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for invalid objects - check your type narrowing logic',
	)
	assert.strictEqual(
		processApiResponse(null),
		'Unknown data',
		'🚨 processApiResponse should return "Unknown data" for null - check your type narrowing logic',
	)
})

await test('isProduct type guard should narrow type correctly', () => {
	const data: unknown = { id: '1', name: 'Widget', price: 9.99 }
	if (isProduct(data)) {
		// TypeScript should know this is Product here
		assert.strictEqual(
			data.id,
			'1',
			'🚨 data.id should be accessible after type guard - verify your type narrowing works',
		)
		assert.strictEqual(
			data.name,
			'Widget',
			'🚨 data.name should be accessible after type guard - verify your type narrowing works',
		)
		assert.strictEqual(
			data.price,
			9.99,
			'🚨 data.price should be accessible after type guard - verify your type narrowing works',
		)
	}
})
