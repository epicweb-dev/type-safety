// Type Guards for Safe Narrowing

// 🐨 Create a type guard `isString` that checks if a value is a string
// function isString(value: unknown): value is string

// 🐨 Create a type guard `isNumber` that checks if a value is a number
// (and not NaN!)

// 🐨 Create a Product type:
// type Product = { id: string; name: string; price: number }

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

// 🐨 When you're done, uncomment this:
// const validProduct = { id: '1', name: 'Widget', price: 9.99 }
// const invalidProducts = [
// 	{ id: '1', name: 'Widget' },
// 	{ id: '1', price: 9.99 },
// 	{ name: 'Widget', price: 9.99 },
// 	{ id: 1, name: 'Widget', price: 9.99 },
// 	{ id: '1', name: 'Widget', price: '9.99' },
// 	null,
// 	'not an object',
// ]
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		isString: [
// 			isString('hello'),
// 			isString(''),
// 			isString('123'),
// 			isString(123),
// 			isString(null),
// 			isString(undefined),
// 			isString({}),
// 		],
// 		isNumber: [
// 			isNumber(123),
// 			isNumber(0),
// 			isNumber(-42),
// 			isNumber(3.14),
// 			isNumber(NaN),
// 			isNumber('123'),
// 			isNumber(null),
// 			isNumber(undefined),
// 		],
// 		isProduct: [
// 			isProduct(validProduct),
// 			...invalidProducts.map((value) => isProduct(value)),
// 		],
// 		processApiResponse: [
// 			processApiResponse(validProduct),
// 			processApiResponse('Hello'),
// 			processApiResponse('Test'),
// 			processApiResponse(42),
// 			processApiResponse({ invalid: 'data' }),
// 			processApiResponse(null),
// 		],
// 		narrowedProduct: validProduct,
// 	}),
// )
