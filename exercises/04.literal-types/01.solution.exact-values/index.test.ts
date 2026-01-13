import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { createOrder, makeRequest, type Size, type Color, type HttpMethod } from './index.ts'

await testStep('createOrder should accept valid Size values', async () => {
	const order1 = createOrder('xs', 'red')
	const order2 = createOrder('s', 'blue')
	const order3 = createOrder('m', 'green')
	const order4 = createOrder('l', 'black')
	const order5 = createOrder('xl', 'red')
	expect(order1.size).toBe('xs')
	expect(order2.size).toBe('s')
	expect(order3.size).toBe('m')
	expect(order4.size).toBe('l')
	expect(order5.size).toBe('xl')
})

await testStep('createOrder should accept valid Color values', async () => {
	const order1 = createOrder('m', 'red')
	const order2 = createOrder('m', 'blue')
	const order3 = createOrder('m', 'green')
	const order4 = createOrder('m', 'black')
	expect(order1.color).toBe('red')
	expect(order2.color).toBe('blue')
	expect(order3.color).toBe('green')
	expect(order4.color).toBe('black')
})

await testStep('createOrder should return order with orderId', async () => {
	const order = createOrder('m', 'blue')
	expect(order).toHaveProperty('orderId')
	expect(typeof order.orderId).toBe('string')
	expect(order.orderId.length).toBeGreaterThan(0)
})

await testStep('makeRequest should accept valid HttpMethod values', async () => {
	expect(() => makeRequest('GET', '/api/users')).not.toThrow()
	expect(() => makeRequest('POST', '/api/orders')).not.toThrow()
	expect(() => makeRequest('PUT', '/api/users/1')).not.toThrow()
	expect(() => makeRequest('DELETE', '/api/users/1')).not.toThrow()
})

await testStep('Size type should only accept specific literal values', async () => {
	const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl']
	sizes.forEach((size) => {
		expect(['xs', 's', 'm', 'l', 'xl']).toContain(size)
	})
})

await testStep('Color type should only accept specific literal values', async () => {
	const colors: Color[] = ['red', 'blue', 'green', 'black']
	colors.forEach((color) => {
		expect(['red', 'blue', 'green', 'black']).toContain(color)
	})
})
