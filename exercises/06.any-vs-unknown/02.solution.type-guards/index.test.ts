import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import {
	isString,
	isNumber,
	isProduct,
	processApiResponse,
	type Product,
} from './index.ts'

await testStep('isString should correctly identify strings', async () => {
	expect(isString('hello')).toBe(true)
	expect(isString('')).toBe(true)
	expect(isString('123')).toBe(true)
	expect(isString(123)).toBe(false)
	expect(isString(null)).toBe(false)
	expect(isString(undefined)).toBe(false)
	expect(isString({})).toBe(false)
})

await testStep('isNumber should correctly identify numbers', async () => {
	expect(isNumber(123)).toBe(true)
	expect(isNumber(0)).toBe(true)
	expect(isNumber(-42)).toBe(true)
	expect(isNumber(3.14)).toBe(true)
	expect(isNumber(NaN)).toBe(false)
	expect(isNumber('123')).toBe(false)
	expect(isNumber(null)).toBe(false)
	expect(isNumber(undefined)).toBe(false)
})

await testStep('isProduct should correctly identify Product objects', async () => {
	const validProduct = { id: '1', name: 'Widget', price: 9.99 }
	const invalidProduct1 = { id: '1', name: 'Widget' }
	const invalidProduct2 = { id: '1', price: 9.99 }
	const invalidProduct3 = { name: 'Widget', price: 9.99 }
	const invalidProduct4 = { id: 1, name: 'Widget', price: 9.99 }
	const invalidProduct5 = { id: '1', name: 'Widget', price: '9.99' }
	const invalidProduct6 = null
	const invalidProduct7 = 'not an object'

	expect(isProduct(validProduct)).toBe(true)
	expect(isProduct(invalidProduct1)).toBe(false)
	expect(isProduct(invalidProduct2)).toBe(false)
	expect(isProduct(invalidProduct3)).toBe(false)
	expect(isProduct(invalidProduct4)).toBe(false)
	expect(isProduct(invalidProduct5)).toBe(false)
	expect(isProduct(invalidProduct6)).toBe(false)
	expect(isProduct(invalidProduct7)).toBe(false)
})

await testStep('processApiResponse should handle Product objects', async () => {
	const product: Product = { id: '1', name: 'Widget', price: 9.99 }
	expect(processApiResponse(product)).toBe('Product: Widget ($9.99)')
})

await testStep('processApiResponse should handle string data', async () => {
	expect(processApiResponse('Hello')).toBe('Hello')
	expect(processApiResponse('Test')).toBe('Test')
})

await testStep('processApiResponse should handle unknown data', async () => {
	expect(processApiResponse(42)).toBe('Unknown data')
	expect(processApiResponse({ invalid: 'data' })).toBe('Unknown data')
	expect(processApiResponse(null)).toBe('Unknown data')
})

await testStep('isProduct type guard should narrow type correctly', async () => {
	const data: unknown = { id: '1', name: 'Widget', price: 9.99 }
	if (isProduct(data)) {
		// TypeScript should know this is Product here
		expect(data.id).toBe('1')
		expect(data.name).toBe('Widget')
		expect(data.price).toBe(9.99)
	}
})
