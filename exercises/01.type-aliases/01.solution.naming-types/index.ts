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

export function greet(user: User): string {
	return `Hello, ${user.name}!`
}

export function formatProduct(product: Product): string {
	const status = product.inStock ? 'In Stock' : 'Out of Stock'
	return `${product.name} - $${product.price} (${status})`
}

export type { User, Product }

console.log(greet(alice))
console.log(greet(bob))
console.log(formatProduct(laptop))
