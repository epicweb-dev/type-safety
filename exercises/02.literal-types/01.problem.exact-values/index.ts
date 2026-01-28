// Using Literal Types for Exact Values

// 🐨 Create an array `sizes` for t-shirt sizes: 'xs' | 's' | 'm' | 'l' | 'xl'
// 🐨 Create a type `Size` from that array

// 🐨 Create an array `colors` for available colors: 'red' | 'blue' | 'green' | 'black'
// 🐨 Create a type `Color` from that array

// 🐨 Create an array `httpMethods` for HTTP methods: 'GET' | 'POST' | 'PUT' | 'DELETE'
// 🐨 Create a type `HttpMethod` from that array

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

// 🐨 Create some sample orders
// const sizeOrders = sizes.map((size) => createOrder(size, 'red'))
// const colorOrders = colors.map((color) => createOrder('m', color))
// const sampleOrder = createOrder('m', 'blue')

// console.log(sizeOrders)
// console.log(colorOrders)
// console.log(sampleOrder)
// console.log(httpMethods)

// 🐨 Export your arrays and sample order so we can verify your work
// 💰 Export the arrays and sample order you created
// export { sizeOrders, colorOrders, sampleOrder, httpMethods }
