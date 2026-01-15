import assert from 'node:assert/strict'
import { test } from 'node:test'
import { type User, type Product, type AuditLog, type Entity } from './index.ts'

await test('User should extend Entity interface', () => {
	const user: User = {
		id: 'user-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Alice',
		email: 'alice@example.com',
	}
	assert.strictEqual(
		user.id,
		'user-1',
		'🚨 user.id should be "user-1" - ensure User extends Entity interface',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User interface includes name property',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User interface includes email property',
	)
	assert.ok(
		user.createdAt instanceof Date,
		'🚨 user.createdAt should be a Date instance - ensure User extends Entity interface',
	)
	assert.ok(
		user.updatedAt instanceof Date,
		'🚨 user.updatedAt should be a Date instance - ensure User extends Entity interface',
	)
})

await test('Product should extend Entity interface', () => {
	const product: Product = {
		id: 'prod-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Widget',
		price: 29.99,
	}
	assert.strictEqual(
		product.id,
		'prod-1',
		'🚨 product.id should be "prod-1" - ensure Product extends Entity interface',
	)
	assert.strictEqual(
		product.name,
		'Widget',
		'🚨 product.name should be "Widget" - ensure Product interface includes name property',
	)
	assert.strictEqual(
		product.price,
		29.99,
		'🚨 product.price should be 29.99 - ensure Product interface includes price property',
	)
	assert.ok(
		product.createdAt instanceof Date,
		'🚨 product.createdAt should be a Date instance - ensure Product extends Entity interface',
	)
	assert.ok(
		product.updatedAt instanceof Date,
		'🚨 product.updatedAt should be a Date instance - ensure Product extends Entity interface',
	)
})

await test('AuditLog should have timestamps and action', () => {
	const log: AuditLog = {
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		action: 'USER_LOGIN',
		userId: 'user-1',
	}
	assert.strictEqual(
		log.action,
		'USER_LOGIN',
		'🚨 log.action should be "USER_LOGIN" - ensure AuditLog interface includes action property',
	)
	assert.strictEqual(
		log.userId,
		'user-1',
		'🚨 log.userId should be "user-1" - ensure AuditLog interface includes userId property',
	)
	assert.ok(
		log.createdAt instanceof Date,
		'🚨 log.createdAt should be a Date instance - ensure AuditLog extends Entity interface',
	)
	assert.ok(
		log.updatedAt instanceof Date,
		'🚨 log.updatedAt should be a Date instance - ensure AuditLog extends Entity interface',
	)
})

await test('Entity interface should have required fields', () => {
	const entity: Entity = {
		id: 'test-id',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
	}
	assert.strictEqual(
		entity.id,
		'test-id',
		'🚨 entity.id should be "test-id" - verify your Entity interface definition',
	)
	assert.ok(
		entity.createdAt instanceof Date,
		'🚨 entity.createdAt should be a Date instance - verify your Entity interface definition',
	)
	assert.ok(
		entity.updatedAt instanceof Date,
		'🚨 entity.updatedAt should be a Date instance - verify your Entity interface definition',
	)
})
