// Extending Interfaces

interface Entity {
	id: string
	createdAt: Date
	updatedAt: Date
}

interface Timestamps {
	createdAt: Date
	updatedAt: Date
}

interface User extends Entity {
	name: string
	email: string
}

interface Product extends Entity {
	name: string
	price: number
}

interface AuditLog extends Timestamps {
	action: string
	userId: string
}

const user: User = {
	id: 'user-1',
	createdAt: new Date(),
	updatedAt: new Date(),
	name: 'Alice',
	email: 'alice@example.com',
}

const product: Product = {
	id: 'prod-1',
	createdAt: new Date(),
	updatedAt: new Date(),
	name: 'Widget',
	price: 29.99,
}

const log: AuditLog = {
	createdAt: new Date(),
	updatedAt: new Date(),
	action: 'USER_LOGIN',
	userId: user.id,
}

export type { User, Product, AuditLog, Entity, Timestamps }

console.log('User:', user.name, '- ID:', user.id)
console.log('Product:', product.name, '- ID:', product.id)
console.log('Log:', log.action, 'by', log.userId)
