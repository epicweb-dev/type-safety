import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	isString,
	isNumber,
	isProduct,
	processApiResponse,
	type Product,
} from './index.ts'

await testStep('isString should correctly identify strings', async () => {
	expect(
		isString('hello'),
		'🚨 isString should return true for strings - check your type guard implementation',
	).toBe(true)
	expect(
		isString(''),
		'🚨 isString should return true for empty strings - check your type guard implementation',
	).toBe(true)
	expect(
		isString('123'),
		'🚨 isString should return true for numeric strings - check your type guard implementation',
	).toBe(true)
	expect(
		isString(123),
		'🚨 isString should return false for numbers - check your type guard implementation',
	).toBe(false)
	expect(
		isString(null),
		'🚨 isString should return false for null - check your type guard implementation',
	).toBe(false)
	expect(
		isString(undefined),
		'🚨 isString should return false for undefined - check your type guard implementation',
	).toBe(false)
	expect(
		isString({}),
		'🚨 isString should return false for objects - check your type guard implementation',
	).toBe(false)
})

await testStep('isNumber should correctly identify numbers', async () => {
	expect(
		isNumber(123),
		'🚨 isNumber should return true for integers - check your type guard implementation',
	).toBe(true)
	expect(
		isNumber(0),
		'🚨 isNumber should return true for zero - check your type guard implementation',
	).toBe(true)
	expect(
		isNumber(-42),
		'🚨 isNumber should return true for negative numbers - check your type guard implementation',
	).toBe(true)
	expect(
		isNumber(3.14),
		'🚨 isNumber should return true for decimals - check your type guard implementation',
	).toBe(true)
	expect(
		isNumber(NaN),
		'🚨 isNumber should return false for NaN - check your type guard implementation',
	).toBe(false)
	expect(
		isNumber('123'),
		'🚨 isNumber should return false for strings - check your type guard implementation',
	).toBe(false)
	expect(
		isNumber(null),
		'🚨 isNumber should return false for null - check your type guard implementation',
	).toBe(false)
	expect(
		isNumber(undefined),
		'🚨 isNumber should return false for undefined - check your type guard implementation',
	).toBe(false)
})

await testStep(
	'isProduct should correctly identify Product objects',
	async () => {
		const validProduct = { id: '1', name: 'Widget', price: 9.99 }
		const invalidProduct1 = { id: '1', name: 'Widget' }
		const invalidProduct2 = { id: '1', price: 9.99 }
		const invalidProduct3 = { name: 'Widget', price: 9.99 }
		const invalidProduct4 = { id: 1, name: 'Widget', price: 9.99 }
		const invalidProduct5 = { id: '1', name: 'Widget', price: '9.99' }
		const invalidProduct6 = null
		const invalidProduct7 = 'not an object'

		expect(
			isProduct(validProduct),
			'🚨 isProduct should return true for valid Product objects - check your type guard implementation',
		).toBe(true)
		expect(
			isProduct(invalidProduct1),
			'🚨 isProduct should return false when price is missing - check your type guard validation',
		).toBe(false)
		expect(
			isProduct(invalidProduct2),
			'🚨 isProduct should return false when name is missing - check your type guard validation',
		).toBe(false)
		expect(
			isProduct(invalidProduct3),
			'🚨 isProduct should return false when id is missing - check your type guard validation',
		).toBe(false)
		expect(
			isProduct(invalidProduct4),
			'🚨 isProduct should return false when id is not a string - check your type guard validation',
		).toBe(false)
		expect(
			isProduct(invalidProduct5),
			'🚨 isProduct should return false when price is not a number - check your type guard validation',
		).toBe(false)
		expect(
			isProduct(invalidProduct6),
			'🚨 isProduct should return false for null - check your type guard validation',
		).toBe(false)
		expect(
			isProduct(invalidProduct7),
			'🚨 isProduct should return false for non-objects - check your type guard validation',
		).toBe(false)
	},
)

await testStep('processApiResponse should handle Product objects', async () => {
	const product: Product = { id: '1', name: 'Widget', price: 9.99 }
	expect(
		processApiResponse(product),
		'🚨 processApiResponse should format Product objects correctly - check your type narrowing logic',
	).toBe('Product: Widget ($9.99)')
})

await testStep('processApiResponse should handle string data', async () => {
	expect(
		processApiResponse('Hello'),
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	).toBe('Hello')
	expect(
		processApiResponse('Test'),
		'🚨 processApiResponse should return strings unchanged - check your type narrowing logic',
	).toBe('Test')
})

await testStep('processApiResponse should handle unknown data', async () => {
	expect(
		processApiResponse(42),
		'🚨 processApiResponse should return "Unknown data" for unrecognized types - check your type narrowing logic',
	).toBe('Unknown data')
	expect(
		processApiResponse({ invalid: 'data' }),
		'🚨 processApiResponse should return "Unknown data" for invalid objects - check your type narrowing logic',
	).toBe('Unknown data')
	expect(
		processApiResponse(null),
		'🚨 processApiResponse should return "Unknown data" for null - check your type narrowing logic',
	).toBe('Unknown data')
})

await testStep(
	'isProduct type guard should narrow type correctly',
	async () => {
		const data: unknown = { id: '1', name: 'Widget', price: 9.99 }
		if (isProduct(data)) {
			// TypeScript should know this is Product here
			expect(
				data.id,
				'🚨 data.id should be accessible after type guard - verify your type narrowing works',
			).toBe('1')
			expect(
				data.name,
				'🚨 data.name should be accessible after type guard - verify your type narrowing works',
			).toBe('Widget')
			expect(
				data.price,
				'🚨 data.price should be accessible after type guard - verify your type narrowing works',
			).toBe(9.99)
		}
	},
)
