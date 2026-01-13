import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { type User, type Product, type AuditLog, type Entity } from './index.ts'

await testStep('User should extend Entity interface', async () => {
	const user: User = {
		id: 'user-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(user.id, '🚨 user.id should be "user-1" - ensure User extends Entity interface').toBe('user-1')
	expect(user.name, '🚨 user.name should be "Alice" - ensure User interface includes name property').toBe('Alice')
	expect(user.email, '🚨 user.email should be "alice@example.com" - ensure User interface includes email property').toBe('alice@example.com')
	expect(user.createdAt, '🚨 user.createdAt should be a Date instance - ensure User extends Entity interface').toBeInstanceOf(Date)
	expect(user.updatedAt, '🚨 user.updatedAt should be a Date instance - ensure User extends Entity interface').toBeInstanceOf(Date)
})

await testStep('Product should extend Entity interface', async () => {
	const product: Product = {
		id: 'prod-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Widget',
		price: 29.99,
	}
	expect(product.id, '🚨 product.id should be "prod-1" - ensure Product extends Entity interface').toBe('prod-1')
	expect(product.name, '🚨 product.name should be "Widget" - ensure Product interface includes name property').toBe('Widget')
	expect(product.price, '🚨 product.price should be 29.99 - ensure Product interface includes price property').toBe(29.99)
	expect(product.createdAt, '🚨 product.createdAt should be a Date instance - ensure Product extends Entity interface').toBeInstanceOf(Date)
	expect(product.updatedAt, '🚨 product.updatedAt should be a Date instance - ensure Product extends Entity interface').toBeInstanceOf(Date)
})

await testStep('AuditLog should have timestamps and action', async () => {
	const log: AuditLog = {
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		action: 'USER_LOGIN',
		userId: 'user-1',
	}
	expect(log.action, '🚨 log.action should be "USER_LOGIN" - ensure AuditLog interface includes action property').toBe('USER_LOGIN')
	expect(log.userId, '🚨 log.userId should be "user-1" - ensure AuditLog interface includes userId property').toBe('user-1')
	expect(log.createdAt, '🚨 log.createdAt should be a Date instance - ensure AuditLog extends Entity interface').toBeInstanceOf(Date)
	expect(log.updatedAt, '🚨 log.updatedAt should be a Date instance - ensure AuditLog extends Entity interface').toBeInstanceOf(Date)
})

await testStep('Entity interface should have required fields', async () => {
	const entity: Entity = {
		id: 'test-id',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
	}
	expect(entity.id, '🚨 entity.id should be "test-id" - verify your Entity interface definition').toBe('test-id')
	expect(entity.createdAt, '🚨 entity.createdAt should be a Date instance - verify your Entity interface definition').toBeInstanceOf(Date)
	expect(entity.updatedAt, '🚨 entity.updatedAt should be a Date instance - verify your Entity interface definition').toBeInstanceOf(Date)
})
