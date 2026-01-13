// Using Literal Types for Exact Values

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'

export type Color = 'red' | 'blue' | 'green' | 'black'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export function createOrder(size: Size, color: Color) {
	return {
		size,
		color,
		orderId: Math.random().toString(36).slice(2),
	}
}

export function makeRequest(method: HttpMethod, url: string): void {
	console.log(`${method} ${url}`)
}

// These work:
console.log(createOrder('m', 'blue'))
makeRequest('GET', '/api/users')
makeRequest('POST', '/api/orders')

// These would error (uncomment to verify):
// createOrder('medium', 'blue')  // ❌ 'medium' not in Size
// makeRequest('PATCH', '/api')    // ❌ 'PATCH' not in HttpMethod

export {}
