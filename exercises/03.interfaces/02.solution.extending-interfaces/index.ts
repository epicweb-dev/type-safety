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

console.log('User:', user.name, '- ID:', user.id)
console.log('Product:', product.name, '- ID:', product.id)
console.log('Log:', log.action, 'by', log.userId)

console.log(
	'Results:',
	JSON.stringify({
		user: {
			id: 'user-1',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
			name: 'Alice',
			email: 'alice@example.com',
		},
		product: {
			id: 'prod-1',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
			name: 'Widget',
			price: 29.99,
		},
		log: {
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
			action: 'USER_LOGIN',
			userId: 'user-1',
		},
		entity: {
			id: 'test-id',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
		},
	}),
)
