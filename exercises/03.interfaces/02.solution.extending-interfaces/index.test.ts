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
	assert.ok(
		typeof solution.user.id === 'string',
		'🚨 user.id should be a string - ensure User extends Entity interface',
	)
	assert.ok(
		typeof solution.user.name === 'string',
		'🚨 user.name should be a string - ensure User interface includes name property',
	)
	assert.ok(
		typeof solution.user.email === 'string',
		'🚨 user.email should be a string - ensure User interface includes email property',
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
	assert.ok(
		typeof solution.product.id === 'string',
		'🚨 product.id should be a string - ensure Product extends Entity interface',
	)
	assert.ok(
		typeof solution.product.name === 'string',
		'🚨 product.name should be a string - ensure Product interface includes name property',
	)
	assert.ok(
		typeof solution.product.price === 'number',
		'🚨 product.price should be a number - ensure Product interface includes price property',
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
	assert.ok(
		typeof solution.log.action === 'string',
		'🚨 log.action should be a string - ensure AuditLog interface includes action property',
	)
	assert.ok(
		typeof solution.log.userId === 'string',
		'🚨 log.userId should be a string - ensure AuditLog interface includes userId property',
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
	assert.ok(
		typeof solution.entity.id === 'string',
		'🚨 entity.id should be a string - verify your Entity interface definition',
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
