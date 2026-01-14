// Type Guards for Safe Narrowing

export function isString(value: unknown): value is string {
	return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !isNaN(value)
}

export type Product = { id: string; name: string; price: number }

export function isProduct(value: unknown): value is Product {
	if (typeof value !== 'object' || value === null) {
		return false
	}

	const obj = value as Record<string, unknown>
	return isString(obj.id) && isString(obj.name) && isNumber(obj.price)
}

export function processApiResponse(data: unknown): string {
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
