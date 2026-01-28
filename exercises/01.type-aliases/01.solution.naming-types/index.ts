// Creating Reusable Type Aliases

type User = {
	id: string
	name: string
	email: string
}

function greet(user: User) {
	return `Hello, ${user.name}!`
}

const userSample: User = {
	id: '1',
	name: 'Test User',
	email: 'test@example.com',
}

type Product = {
	id: string
	name: string
	price: number
	inStock: boolean
}

function formatProduct(product: Product) {
	const status = product.inStock ? 'In Stock' : 'Out of Stock'
	return `${product.name} - $${product.price} (${status})`
}

const productSample: Product = {
	id: 'p1',
	name: 'Test Product',
	price: 49.99,
	inStock: true,
}

export { greet, formatProduct, userSample, productSample }

// 🦉 Alternative: Inference-first approach with typeof
// Instead of defining a type first, you can derive it from a value:
//
// const defaultUser = {
//   id: '',
//   name: '',
//   email: '',
// } as const
//
// type User = typeof defaultUser
//
// This is especially useful when you have a canonical "default" or "example"
// value. The type stays in sync with the value automatically!
