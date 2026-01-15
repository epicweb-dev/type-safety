import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('userSample is exported', () => {
	assert.ok(
		'userSample' in solution,
		'🚨 Make sure you export "userSample" - add: export { userSample, ... }',
	)
})

await test('postSample is exported', () => {
	assert.ok(
		'postSample' in solution,
		'🚨 Make sure you export "postSample" - add: export { postSample, ... }',
	)
})

await test('User type should have all required fields', () => {
	assert.strictEqual(
		solution.userSample.id,
		'user-1',
		'🚨 user.id should be "user-1" - verify your User type definition',
	)
	assert.strictEqual(
		solution.userSample.createdAt,
		1000000,
		'🚨 user.createdAt should be 1000000 - verify your User type definition',
	)
	assert.strictEqual(
		solution.userSample.updatedAt,
		1000000,
		'🚨 user.updatedAt should be 1000000 - verify your User type definition',
	)
	assert.strictEqual(
		solution.userSample.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User type includes name property',
	)
	assert.strictEqual(
		solution.userSample.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User type includes email property',
	)
})

await test('Post type should have all required fields', () => {
	assert.strictEqual(
		solution.postSample.id,
		'post-1',
		'🚨 post.id should be "post-1" - verify your Post type definition',
	)
	assert.strictEqual(
		solution.postSample.createdAt,
		2000000,
		'🚨 post.createdAt should be 2000000 - verify your Post type definition',
	)
	assert.strictEqual(
		solution.postSample.updatedAt,
		2000000,
		'🚨 post.updatedAt should be 2000000 - verify your Post type definition',
	)
	assert.strictEqual(
		solution.postSample.title,
		'Test Post',
		'🚨 post.title should be "Test Post" - ensure Post type includes title property',
	)
	assert.strictEqual(
		solution.postSample.content,
		'Test content',
		'🚨 post.content should be "Test content" - ensure Post type includes content property',
	)
	assert.strictEqual(
		solution.postSample.authorId,
		'user-1',
		'🚨 post.authorId should be "user-1" - ensure Post type includes authorId property',
	)
})
