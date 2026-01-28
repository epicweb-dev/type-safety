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

const entity: Entity = {
	id: 'test-id',
	createdAt: new Date('2024-01-01T00:00:00.000Z'),
	updatedAt: new Date('2024-01-02T00:00:00.000Z'),
}

export { user, product, log, entity }
