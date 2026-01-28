// Type Guards for Safe Narrowing

// 🐨 Create a type guard `isString` that checks if a value is a string

// 🐨 Create a type guard `isNumber` that checks if a value is a number
// (and not NaN!)

// 🐨 Create a Product type:

// 🐨 Create a type guard `isProduct` that checks if a value is a Product
// Check that:
// - value is an object (not null)
// - has id (string)
// - has name (string)
// - has price (number)

// 🐨 Create a function `processApiResponse` that:
// - Takes an unknown value
// - If it's a Product, return formatted product info
// - If it's a string, return it as-is
// - Otherwise, return "Unknown data"

// Test
// console.log(processApiResponse({ id: '1', name: 'Widget', price: 9.99 }))
// console.log(processApiResponse('Hello'))
// console.log(processApiResponse(42))

// console.log(isString('hi'))
// console.log(isNumber(123))

// 🐨 Export `isString`, `isNumber`, `isProduct`, and `processApiResponse`.
// Tests import these by name and check the guard behavior.
// export { isString, isNumber, isProduct, processApiResponse }
