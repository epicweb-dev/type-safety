// Creating Reusable Type Aliases

type User = {
	id: string
	name: string
	email: string
}

type Product = {
	id: string
	name: string
	price: number
	inStock: boolean
}

const alice: User = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

const bob: User = {
	id: '2',
	name: 'Bob',
	email: 'bob@example.com',
}

const laptop: Product = {
	id: 'p1',
	name: 'Laptop',
	price: 999.99,
	inStock: true,
}

function greet(user: User) {
	return `Hello, ${user.name}!`
}

function formatProduct(product: Product) {
	const status = product.inStock ? 'In Stock' : 'Out of Stock'
	return `${product.name} - $${product.price} (${status})`
}

console.log(greet(alice))
console.log(greet(bob))
console.log(formatProduct(laptop))
const outOfStockProduct: Product = {
	id: 'p2',
	name: 'Mouse',
	price: 29.99,
	inStock: false,
}

console.log(
	'Results:',
	JSON.stringify({
		greet: [greet(alice), greet(bob)],
		formatProduct: [formatProduct(laptop), formatProduct(outOfStockProduct)],
		userSample: { id: '1', name: 'Test User', email: 'test@example.com' },
		productSample: {
			id: 'p1',
			name: 'Test Product',
			price: 49.99,
			inStock: true,
		},
	}),
)

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
