import assert from 'node:assert/strict'
import { test } from 'node:test'
import { type User, type Post, type BaseEntity } from './index.ts'

await test('User type should extend BaseEntity', () => {
	const user: User = {
		id: 'user-1',
		createdAt: 1000000,
		updatedAt: 1000000,
		name: 'Alice',
		email: 'alice@example.com',
	}
	assert.strictEqual(
		user.id,
		'user-1',
		'🚨 user.id should be "user-1" - ensure User extends BaseEntity correctly',
	)
	assert.strictEqual(
		user.createdAt,
		1000000,
		'🚨 user.createdAt should be 1000000 - ensure User extends BaseEntity correctly',
	)
	assert.strictEqual(
		user.updatedAt,
		1000000,
		'🚨 user.updatedAt should be 1000000 - ensure User extends BaseEntity correctly',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User type includes name property',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User type includes email property',
	)
})

await test('Post type should extend BaseEntity', () => {
	const post: Post = {
		id: 'post-1',
		createdAt: 2000000,
		updatedAt: 2000000,
		title: 'Test Post',
		content: 'Test content',
		authorId: 'user-1',
	}
	assert.strictEqual(
		post.id,
		'post-1',
		'🚨 post.id should be "post-1" - ensure Post extends BaseEntity correctly',
	)
	assert.strictEqual(
		post.createdAt,
		2000000,
		'🚨 post.createdAt should be 2000000 - ensure Post extends BaseEntity correctly',
	)
	assert.strictEqual(
		post.updatedAt,
		2000000,
		'🚨 post.updatedAt should be 2000000 - ensure Post extends BaseEntity correctly',
	)
	assert.strictEqual(
		post.title,
		'Test Post',
		'🚨 post.title should be "Test Post" - ensure Post type includes title property',
	)
	assert.strictEqual(
		post.content,
		'Test content',
		'🚨 post.content should be "Test content" - ensure Post type includes content property',
	)
	assert.strictEqual(
		post.authorId,
		'user-1',
		'🚨 post.authorId should be "user-1" - ensure Post type includes authorId property',
	)
})

await test('BaseEntity should have required fields', () => {
	const base: BaseEntity = {
		id: 'test-id',
		createdAt: 1000,
		updatedAt: 2000,
	}
	assert.strictEqual(
		base.id,
		'test-id',
		'🚨 base.id should be "test-id" - verify your BaseEntity type definition',
	)
	assert.strictEqual(
		base.createdAt,
		1000,
		'🚨 base.createdAt should be 1000 - verify your BaseEntity type definition',
	)
	assert.strictEqual(
		base.updatedAt,
		2000,
		'🚨 base.updatedAt should be 2000 - verify your BaseEntity type definition',
	)
})
