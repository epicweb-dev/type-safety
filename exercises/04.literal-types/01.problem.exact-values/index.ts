// Using Literal Types for Exact Values

// 🐨 Create a type `Size` for t-shirt sizes: 'xs' | 's' | 'm' | 'l' | 'xl'

// 🐨 Create a type `Color` for available colors: 'red' | 'blue' | 'green' | 'black'

// 🐨 Create a type `HttpMethod` for HTTP methods: 'GET' | 'POST' | 'PUT' | 'DELETE'

// 🐨 Create a function `createOrder` that takes size and color
// and returns an order object

// 🐨 Create a function `makeRequest` that takes a method and url
// Log the request being made

// Test - these should work:
// createOrder('m', 'blue')
// makeRequest('GET', '/api/users')

// Test - these should error (uncomment to verify):
// createOrder('medium', 'blue')  // ❌ 'medium' not in Size
// makeRequest('PATCH', '/api')    // ❌ 'PATCH' not in HttpMethod

export {}
