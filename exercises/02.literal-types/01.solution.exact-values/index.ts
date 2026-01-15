// Using Literal Types for Exact Values

// Value-first approach: derive types from runtime values
const sizes = ['xs', 's', 'm', 'l', 'xl'] as const
export type Size = (typeof sizes)[number]

const colors = ['red', 'blue', 'green', 'black'] as const
export type Color = (typeof colors)[number]

const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'] as const
export type HttpMethod = (typeof httpMethods)[number]

export function createOrder(size: Size, color: Color) {
	return {
		size,
		color,
		orderId: Math.random().toString(36).slice(2),
	}
}

export function makeRequest(method: HttpMethod, url: string) {
	console.log(`${method} ${url}`)
}

// These work:
console.log(createOrder('m', 'blue'))
makeRequest('GET', '/api/users')
makeRequest('POST', '/api/orders')

// These would error (uncomment to verify):
// createOrder('medium', 'blue')  // ❌ 'medium' not in Size
// makeRequest('PATCH', '/api')    // ❌ 'PATCH' not in HttpMethod

// Bonus: the arrays are available at runtime for validation/iteration
console.log('Available sizes:', sizes)
console.log('Available colors:', colors)

export { sizes, colors, httpMethods }

// 🦉 Traditional approach (you may see this in other codebases):
// export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
// export type Color = 'red' | 'blue' | 'green' | 'black'
// export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
//
// The value-first approach above is preferred because:
// - The array is useful at runtime (iteration, validation)
// - Type and values stay in sync automatically
// - Less duplication between runtime and type-level code
