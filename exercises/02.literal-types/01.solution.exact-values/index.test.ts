import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('sizeOrders is exported', () => {
	assert.ok(
		'sizeOrders' in solution,
		'🚨 Make sure you export "sizeOrders" - add: export { sizeOrders, ... }',
	)
})

await test('colorOrders is exported', () => {
	assert.ok(
		'colorOrders' in solution,
		'🚨 Make sure you export "colorOrders" - add: export { colorOrders, ... }',
	)
})

await test('sampleOrder is exported', () => {
	assert.ok(
		'sampleOrder' in solution,
		'🚨 Make sure you export "sampleOrder" - add: export { sampleOrder, ... }',
	)
})

await test('httpMethods is exported', () => {
	assert.ok(
		'httpMethods' in solution,
		'🚨 Make sure you export "httpMethods" - add: export { httpMethods, ... }',
	)
})

await test('createOrder should accept valid Size values', () => {
	const sizeOrders: Array<string> = solution.sizeOrders.map(
		(order) => order.size,
	)
	const validSizes = ['xs', 's', 'm', 'l', 'xl']

	// Verify all valid sizes are represented in the orders
	for (const size of validSizes) {
		assert.ok(
			sizeOrders.includes(size),
			`🚨 sizeOrders should include a size of "${size}" - verify your Size literal type includes all valid values`,
		)
	}
})

await test('createOrder should accept valid Color values', () => {
	const colorOrders: Array<string> = solution.colorOrders.map(
		(order) => order.color,
	)
	const validColors = ['red', 'blue', 'green', 'black']

	// Verify all valid colors are represented in the orders
	for (const color of validColors) {
		assert.ok(
			colorOrders.includes(color),
			`🚨 colorOrders should include a color of "${color}" - verify your Color literal type includes all valid values`,
		)
	}
})

await test('createOrder should return order with orderId', () => {
	const orderIdType = typeof solution.sampleOrder.orderId
	const orderIdLength = solution.sampleOrder.orderId.length
	assert.ok(
		orderIdLength > 0,
		'🚨 order should have orderId property - check your createOrder return type',
	)
	assert.strictEqual(
		orderIdType,
		'string',
		'🚨 order.orderId should be a string - check your createOrder return type',
	)
	assert.ok(
		orderIdLength > 0,
		'🚨 order.orderId should not be empty - check your createOrder implementation',
	)
})

await test('makeRequest should accept valid HttpMethod values', () => {
	const httpMethods: Array<string> = [...solution.httpMethods]
	const validMethods = ['GET', 'POST', 'PUT', 'DELETE']
	for (const method of validMethods) {
		assert.ok(
			httpMethods.includes(method),
			`🚨 httpMethods should include "${method}" - verify your HttpMethod literal type`,
		)
	}
})

await test('Size type should only accept specific literal values', () => {
	const sizeOrders = solution.sizeOrders.map((order) => order.size)
	sizeOrders.forEach((size: string) => {
		assert.ok(
			['xs', 's', 'm', 'l', 'xl'].includes(size),
			'🚨 size should be one of the valid Size literal values - verify your Size type definition',
		)
	})
})

await test('Color type should only accept specific literal values', () => {
	const colorOrders = solution.colorOrders.map((order) => order.color)
	colorOrders.forEach((color: string) => {
		assert.ok(
			['red', 'blue', 'green', 'black'].includes(color),
			'🚨 color should be one of the valid Color literal values - verify your Color type definition',
		)
	})
})
