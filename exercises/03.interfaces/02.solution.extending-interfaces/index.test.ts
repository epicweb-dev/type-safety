import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { user, product, log, entity } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('User should extend Entity interface', () => {
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
		Boolean(user.createdAt),
		'🚨 user.createdAt should be a Date instance - ensure User extends Entity interface',
	)
	assert.ok(
		Boolean(user.updatedAt),
		'🚨 user.updatedAt should be a Date instance - ensure User extends Entity interface',
	)
})

await test('Product should extend Entity interface', () => {
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
		Boolean(product.createdAt),
		'🚨 product.createdAt should be a Date instance - ensure Product extends Entity interface',
	)
	assert.ok(
		Boolean(product.updatedAt),
		'🚨 product.updatedAt should be a Date instance - ensure Product extends Entity interface',
	)
})

await test('AuditLog should have timestamps and action', () => {
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
		Boolean(log.createdAt),
		'🚨 log.createdAt should be a Date instance - ensure AuditLog extends Entity interface',
	)
	assert.ok(
		Boolean(log.updatedAt),
		'🚨 log.updatedAt should be a Date instance - ensure AuditLog extends Entity interface',
	)
})

await test('Entity interface should have required fields', () => {
	assert.strictEqual(
		entity.id,
		'test-id',
		'🚨 entity.id should be "test-id" - verify your Entity interface definition',
	)
	assert.ok(
		Boolean(entity.createdAt),
		'🚨 entity.createdAt should be a Date instance - verify your Entity interface definition',
	)
	assert.ok(
		Boolean(entity.updatedAt),
		'🚨 entity.updatedAt should be a Date instance - verify your Entity interface definition',
	)
})
