// Creating Reusable Type Aliases

// 🐨 Create a type alias `User` with:
// - id: string
// - name: string
// - email: string

// 🐨 Create a type alias `Product` with:
// - id: string
// - name: string
// - price: number
// - inStock: boolean

// 🐨 Use the User type for these variables
const alice = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

const bob = {
	id: '2',
	name: 'Bob',
	email: 'bob@example.com',
}

// 🐨 Use the Product type for this variable
const laptop = {
	id: 'p1',
	name: 'Laptop',
	price: 999.99,
	inStock: true,
}

// 🐨 Create a function that takes a User and returns a greeting
// function greet(user: User): string

// 🐨 Create a function that takes a Product and returns a formatted string
// function formatProduct(product: Product): string

// 🐨 When you're done, uncomment this:
// const outOfStockProduct = {
// 	id: 'p2',
// 	name: 'Mouse',
// 	price: 29.99,
// 	inStock: false,
// }
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		greet: [greet(alice), greet(bob)],
// 		formatProduct: [formatProduct(laptop), formatProduct(outOfStockProduct)],
// 		userSample: { id: '1', name: 'Test User', email: 'test@example.com' },
// 		productSample: {
// 			id: 'p1',
// 			name: 'Test Product',
// 			price: 49.99,
// 			inStock: true,
// 		},
// 	}),
// )
