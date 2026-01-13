import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	createOrder,
	makeRequest,
	type Size,
	type Color,
	type HttpMethod} from './index.ts'

await testStep('createOrder should accept valid Size values', async () => {
	const order1 = createOrder('xs', 'red')
	const order2 = createOrder('s', 'blue')
	const order3 = createOrder('m', 'green')
	const order4 = createOrder('l', 'black')
	const order5 = createOrder('xl', 'red')
	expect(
		order1.size,
		'🚨 order1.size should be "xs" - verify your Size literal type includes all valid values',
	).toBe('xs')
	expect(
		order2.size,
		'🚨 order2.size should be "s" - verify your Size literal type includes all valid values',
	).toBe('s')
	expect(
		order3.size,
		'🚨 order3.size should be "m" - verify your Size literal type includes all valid values',
	).toBe('m')
	expect(
		order4.size,
		'🚨 order4.size should be "l" - verify your Size literal type includes all valid values',
	).toBe('l')
	expect(
		order5.size,
		'🚨 order5.size should be "xl" - verify your Size literal type includes all valid values',
	).toBe('xl')
})

await testStep('createOrder should accept valid Color values', async () => {
	const order1 = createOrder('m', 'red')
	const order2 = createOrder('m', 'blue')
	const order3 = createOrder('m', 'green')
	const order4 = createOrder('m', 'black')
	expect(
		order1.color,
		'🚨 order1.color should be "red" - verify your Color literal type includes all valid values',
	).toBe('red')
	expect(
		order2.color,
		'🚨 order2.color should be "blue" - verify your Color literal type includes all valid values',
	).toBe('blue')
	expect(
		order3.color,
		'🚨 order3.color should be "green" - verify your Color literal type includes all valid values',
	).toBe('green')
	expect(
		order4.color,
		'🚨 order4.color should be "black" - verify your Color literal type includes all valid values',
	).toBe('black')
})

await testStep('createOrder should return order with orderId', async () => {
	const order = createOrder('m', 'blue')
	expect(
		order,
		'🚨 order should have orderId property - check your createOrder return type',
	).toHaveProperty('orderId')
	expect(
		typeof order.orderId,
		'🚨 order.orderId should be a string - check your createOrder return type',
	).toBe('string')
	expect(
		order.orderId.length,
		'🚨 order.orderId should not be empty - check your createOrder implementation',
	).toBeGreaterThan(0)
})

await testStep(
	'makeRequest should accept valid HttpMethod values',
	async () => {
		expect(
			() => makeRequest('GET', '/api/users'),
			'🚨 makeRequest should accept "GET" method - verify your HttpMethod literal type',
		).not.toThrow()
		expect(
			() => makeRequest('POST', '/api/orders'),
			'🚨 makeRequest should accept "POST" method - verify your HttpMethod literal type',
		).not.toThrow()
		expect(
			() => makeRequest('PUT', '/api/users/1'),
			'🚨 makeRequest should accept "PUT" method - verify your HttpMethod literal type',
		).not.toThrow()
		expect(
			() => makeRequest('DELETE', '/api/users/1'),
			'🚨 makeRequest should accept "DELETE" method - verify your HttpMethod literal type',
		).not.toThrow()
	},
)

await testStep(
	'Size type should only accept specific literal values',
	async () => {
		const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl']
		sizes.forEach((size) => {
			expect(
				['xs', 's', 'm', 'l', 'xl'],
				'🚨 size should be one of the valid Size literal values - verify your Size type definition',
			).toContain(size)
		})
	},
)

await testStep(
	'Color type should only accept specific literal values',
	async () => {
		const colors: Color[] = ['red', 'blue', 'green', 'black']
		colors.forEach((color) => {
			expect(
				['red', 'blue', 'green', 'black'],
				'🚨 color should be one of the valid Color literal values - verify your Color type definition',
			).toContain(color)
		})
	},
)
