import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('user is exported', () => {
	assert.ok(
		'user' in solution,
		'🚨 Make sure you export "user" - add: export { user, ... }',
	)
})

await test('product is exported', () => {
	assert.ok(
		'product' in solution,
		'🚨 Make sure you export "product" - add: export { product, ... }',
	)
})

await test('log is exported', () => {
	assert.ok(
		'log' in solution,
		'🚨 Make sure you export "log" - add: export { log, ... }',
	)
})

await test('entity is exported', () => {
	assert.ok(
		'entity' in solution,
		'🚨 Make sure you export "entity" - add: export { entity, ... }',
	)
})

await test('User should extend Entity interface', () => {
	assert.strictEqual(
		solution.user.id,
		'user-1',
		'🚨 user.id should be "user-1" - ensure User extends Entity interface',
	)
	assert.strictEqual(
		solution.user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User interface includes name property',
	)
	assert.strictEqual(
		solution.user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User interface includes email property',
	)
	assert.ok(
		solution.user.createdAt instanceof Date,
		'🚨 user.createdAt should be a Date instance - ensure User extends Entity interface',
	)
	assert.ok(
		solution.user.updatedAt instanceof Date,
		'🚨 user.updatedAt should be a Date instance - ensure User extends Entity interface',
	)
})

await test('Product should extend Entity interface', () => {
	assert.strictEqual(
		solution.product.id,
		'prod-1',
		'🚨 product.id should be "prod-1" - ensure Product extends Entity interface',
	)
	assert.strictEqual(
		solution.product.name,
		'Widget',
		'🚨 product.name should be "Widget" - ensure Product interface includes name property',
	)
	assert.strictEqual(
		solution.product.price,
		29.99,
		'🚨 product.price should be 29.99 - ensure Product interface includes price property',
	)
	assert.ok(
		solution.product.createdAt instanceof Date,
		'🚨 product.createdAt should be a Date instance - ensure Product extends Entity interface',
	)
	assert.ok(
		solution.product.updatedAt instanceof Date,
		'🚨 product.updatedAt should be a Date instance - ensure Product extends Entity interface',
	)
})

await test('AuditLog should have timestamps and action', () => {
	assert.strictEqual(
		solution.log.action,
		'USER_LOGIN',
		'🚨 log.action should be "USER_LOGIN" - ensure AuditLog interface includes action property',
	)
	assert.strictEqual(
		solution.log.userId,
		'user-1',
		'🚨 log.userId should be "user-1" - ensure AuditLog interface includes userId property',
	)
	assert.ok(
		solution.log.createdAt instanceof Date,
		'🚨 log.createdAt should be a Date instance - ensure AuditLog extends Entity interface',
	)
	assert.ok(
		solution.log.updatedAt instanceof Date,
		'🚨 log.updatedAt should be a Date instance - ensure AuditLog extends Entity interface',
	)
})

await test('Entity interface should have required fields', () => {
	assert.strictEqual(
		solution.entity.id,
		'test-id',
		'🚨 entity.id should be "test-id" - verify your Entity interface definition',
	)
	assert.ok(
		solution.entity.createdAt instanceof Date,
		'🚨 entity.createdAt should be a Date instance - verify your Entity interface definition',
	)
	assert.ok(
		solution.entity.updatedAt instanceof Date,
		'🚨 entity.updatedAt should be a Date instance - verify your Entity interface definition',
	)
})
