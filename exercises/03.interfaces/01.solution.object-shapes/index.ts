// Defining Object Shapes with Interfaces

interface User {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
}

interface Product {
	id: string
	name: string
	price: number
	description?: string
}

function isAdmin(user: User) {
	return user.role === 'admin'
}

function getProductSummary(product: Product) {
	const desc = product.description ?? 'No description'
	return `${product.name} - $${product.price}: ${desc}`
}

const admin: User = {
	id: '1',
	name: 'Admin',
	email: 'admin@example.com',
	role: 'admin',
}
const regularUser: User = {
	id: '2',
	name: 'User',
	email: 'user@example.com',
	role: 'user',
}

const product: Product = { id: 'p1', name: 'Widget', price: 29.99 }
const productWithDesc: Product = {
	id: 'p2',
	name: 'Gadget',
	price: 49.99,
	description: 'Has description',
}

const product: Product = { id: 'p1', name: 'Widget', price: 29.99 }
const productWithDesc: Product = {
	id: 'p2',
	name: 'Gadget',
	price: 49.99,
	description: 'Has description',
}

export { isAdmin, getProductSummary, product, productWithDesc, regularUser }
