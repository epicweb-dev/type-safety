import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	createOrder,
	makeRequest,
	type Size,
	type Color,
	type HttpMethod,
} from './index.ts'

await test('createOrder should accept valid Size values', () => {
	const order1 = createOrder('xs', 'red')
	const order2 = createOrder('s', 'blue')
	const order3 = createOrder('m', 'green')
	const order4 = createOrder('l', 'black')
	const order5 = createOrder('xl', 'red')
	assert.strictEqual(
		order1.size,
		'xs',
		'🚨 order1.size should be "xs" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		order2.size,
		's',
		'🚨 order2.size should be "s" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		order3.size,
		'm',
		'🚨 order3.size should be "m" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		order4.size,
		'l',
		'🚨 order4.size should be "l" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		order5.size,
		'xl',
		'🚨 order5.size should be "xl" - verify your Size literal type includes all valid values',
	)
})

await test('createOrder should accept valid Color values', () => {
	const order1 = createOrder('m', 'red')
	const order2 = createOrder('m', 'blue')
	const order3 = createOrder('m', 'green')
	const order4 = createOrder('m', 'black')
	assert.strictEqual(
		order1.color,
		'red',
		'🚨 order1.color should be "red" - verify your Color literal type includes all valid values',
	)
	assert.strictEqual(
		order2.color,
		'blue',
		'🚨 order2.color should be "blue" - verify your Color literal type includes all valid values',
	)
	assert.strictEqual(
		order3.color,
		'green',
		'🚨 order3.color should be "green" - verify your Color literal type includes all valid values',
	)
	assert.strictEqual(
		order4.color,
		'black',
		'🚨 order4.color should be "black" - verify your Color literal type includes all valid values',
	)
})

await test('createOrder should return order with orderId', () => {
	const order = createOrder('m', 'blue')
	assert.ok(
		'orderId' in order,
		'🚨 order should have orderId property - check your createOrder return type',
	)
	assert.strictEqual(
		typeof order.orderId,
		'string',
		'🚨 order.orderId should be a string - check your createOrder return type',
	)
	assert.ok(
		order.orderId.length > 0,
		'🚨 order.orderId should not be empty - check your createOrder implementation',
	)
})

await test('makeRequest should accept valid HttpMethod values', () => {
	assert.doesNotThrow(
		() => makeRequest('GET', '/api/users'),
		'🚨 makeRequest should accept "GET" method - verify your HttpMethod literal type',
	)
	assert.doesNotThrow(
		() => makeRequest('POST', '/api/orders'),
		'🚨 makeRequest should accept "POST" method - verify your HttpMethod literal type',
	)
	assert.doesNotThrow(
		() => makeRequest('PUT', '/api/users/1'),
		'🚨 makeRequest should accept "PUT" method - verify your HttpMethod literal type',
	)
	assert.doesNotThrow(
		() => makeRequest('DELETE', '/api/users/1'),
		'🚨 makeRequest should accept "DELETE" method - verify your HttpMethod literal type',
	)
})

await test('Size type should only accept specific literal values', () => {
	const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl']
	sizes.forEach((size) => {
		assert.ok(
			['xs', 's', 'm', 'l', 'xl'].includes(size),
			'🚨 size should be one of the valid Size literal values - verify your Size type definition',
		)
	})
})

await test('Color type should only accept specific literal values', () => {
	const colors: Color[] = ['red', 'blue', 'green', 'black']
	colors.forEach((color) => {
		assert.ok(
			['red', 'blue', 'green', 'black'].includes(color),
			'🚨 color should be one of the valid Color literal values - verify your Color type definition',
		)
	})
})
