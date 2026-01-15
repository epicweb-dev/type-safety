// Type Guards for Safe Narrowing

function isString(value: unknown): value is string {
	return typeof value === 'string'
}

function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !isNaN(value)
}

type Product = { id: string; name: string; price: number }

function isProduct(value: unknown): value is Product {
	if (typeof value !== 'object' || value === null) {
		return false
	}

	const obj = value as Record<string, unknown>
	return isString(obj.id) && isString(obj.name) && isNumber(obj.price)
}

function processApiResponse(data: unknown): string {
	if (isProduct(data)) {
		return `Product: ${data.name} ($${data.price.toFixed(2)})`
	}
	if (isString(data)) {
		return data
	}
	return 'Unknown data'
}

// Test
console.log(processApiResponse({ id: '1', name: 'Widget', price: 9.99 }))
console.log(processApiResponse('Hello'))
console.log(processApiResponse(42))
console.log(processApiResponse({ invalid: 'data' }))

const validProduct = { id: '1', name: 'Widget', price: 9.99 }
const invalidProducts = [
	{ id: '1', name: 'Widget' },
	{ id: '1', price: 9.99 },
	{ name: 'Widget', price: 9.99 },
	{ id: 1, name: 'Widget', price: 9.99 },
	{ id: '1', name: 'Widget', price: '9.99' },
	null,
	'not an object',
]

console.log(
	'Results:',
	JSON.stringify({
		isString: [
			isString('hello'),
			isString(''),
			isString('123'),
			isString(123),
			isString(null),
			isString(undefined),
			isString({}),
		],
		isNumber: [
			isNumber(123),
			isNumber(0),
			isNumber(-42),
			isNumber(3.14),
			isNumber(NaN),
			isNumber('123'),
			isNumber(null),
			isNumber(undefined),
		],
		isProduct: [
			isProduct(validProduct),
			...invalidProducts.map((value) => isProduct(value)),
		],
		processApiResponse: [
			processApiResponse(validProduct),
			processApiResponse('Hello'),
			processApiResponse('Test'),
			processApiResponse(42),
			processApiResponse({ invalid: 'data' }),
			processApiResponse(null),
		],
		narrowedProduct: validProduct,
	}),
)
