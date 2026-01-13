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
	expect(user.id).toBe('user-1')
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
	expect(user.createdAt).toBeInstanceOf(Date)
	expect(user.updatedAt).toBeInstanceOf(Date)
})

await testStep('Product should extend Entity interface', async () => {
	const product: Product = {
		id: 'prod-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Widget',
		price: 29.99,
	}
	expect(product.id).toBe('prod-1')
	expect(product.name).toBe('Widget')
	expect(product.price).toBe(29.99)
	expect(product.createdAt).toBeInstanceOf(Date)
	expect(product.updatedAt).toBeInstanceOf(Date)
})

await testStep('AuditLog should have timestamps and action', async () => {
	const log: AuditLog = {
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		action: 'USER_LOGIN',
		userId: 'user-1',
	}
	expect(log.action).toBe('USER_LOGIN')
	expect(log.userId).toBe('user-1')
	expect(log.createdAt).toBeInstanceOf(Date)
	expect(log.updatedAt).toBeInstanceOf(Date)
})

await testStep('Entity interface should have required fields', async () => {
	const entity: Entity = {
		id: 'test-id',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
	}
	expect(entity.id).toBe('test-id')
	expect(entity.createdAt).toBeInstanceOf(Date)
	expect(entity.updatedAt).toBeInstanceOf(Date)
})
