// Defining Object Shapes with Interfaces

// 🐨 Create a User interface with:
// - id: string
// - name: string
// - email: string
// - role: 'admin' | 'user'

// 🐨 Create a Product interface with:
// - id: string
// - name: string
// - price: number
// - description?: string (optional)

// 🐨 Create a function `isAdmin` that takes a User and returns boolean

// 🐨 Create a function `getProductSummary` that takes a Product
// and returns a string summary

// Test data
// const admin: User = { id: '1', name: 'Admin', email: 'admin@example.com', role: 'admin' }
// const product: Product = { id: 'p1', name: 'Widget', price: 29.99 }

// 🐨 When you're done, uncomment this:
// const regularUser: User = { id: '2', name: 'User', email: 'user@example.com', role: 'user' }
// const productWithDesc: Product = {
// 	id: 'p2',
// 	name: 'Gadget',
// 	price: 49.99,
// 	description: 'A fancy gadget',
// }
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		isAdmin: [isAdmin(admin), isAdmin(regularUser)],
// 		productSummary: [
// 			getProductSummary(product),
// 			getProductSummary(productWithDesc),
// 		],
// 		productDescriptions: [product.description, productWithDesc.description],
// 	}),
// )
