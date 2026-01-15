import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { sizeOrders, colorOrders, orderIdType, orderIdLength, httpMethods } =
	JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('createOrder should accept valid Size values', () => {
	assert.strictEqual(
		sizeOrders[0],
		'xs',
		'🚨 order1.size should be "xs" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		sizeOrders[1],
		's',
		'🚨 order2.size should be "s" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		sizeOrders[2],
		'm',
		'🚨 order3.size should be "m" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		sizeOrders[3],
		'l',
		'🚨 order4.size should be "l" - verify your Size literal type includes all valid values',
	)
	assert.strictEqual(
		sizeOrders[4],
		'xl',
		'🚨 order5.size should be "xl" - verify your Size literal type includes all valid values',
	)
})

await test('createOrder should accept valid Color values', () => {
	assert.strictEqual(
		colorOrders[0],
		'red',
		'🚨 order1.color should be "red" - verify your Color literal type includes all valid values',
	)
	assert.strictEqual(
		colorOrders[1],
		'blue',
		'🚨 order2.color should be "blue" - verify your Color literal type includes all valid values',
	)
	assert.strictEqual(
		colorOrders[2],
		'green',
		'🚨 order3.color should be "green" - verify your Color literal type includes all valid values',
	)
	assert.strictEqual(
		colorOrders[3],
		'black',
		'🚨 order4.color should be "black" - verify your Color literal type includes all valid values',
	)
})

await test('createOrder should return order with orderId', () => {
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
	assert.deepStrictEqual(
		httpMethods,
		['GET', 'POST', 'PUT', 'DELETE'],
		'🚨 makeRequest should accept valid HttpMethod values - verify your HttpMethod literal type',
	)
})

await test('Size type should only accept specific literal values', () => {
	sizeOrders.forEach((size: string) => {
		assert.ok(
			['xs', 's', 'm', 'l', 'xl'].includes(size),
			'🚨 size should be one of the valid Size literal values - verify your Size type definition',
		)
	})
})

await test('Color type should only accept specific literal values', () => {
	colorOrders.forEach((color: string) => {
		assert.ok(
			['red', 'blue', 'green', 'black'].includes(color),
			'🚨 color should be one of the valid Color literal values - verify your Color type definition',
		)
	})
})
