import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { userSample, postSample } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('User type should have all required fields', () => {
	assert.strictEqual(
		userSample.id,
		'user-1',
		'🚨 user.id should be "user-1" - verify your User type definition',
	)
	assert.strictEqual(
		userSample.createdAt,
		1000000,
		'🚨 user.createdAt should be 1000000 - verify your User type definition',
	)
	assert.strictEqual(
		userSample.updatedAt,
		1000000,
		'🚨 user.updatedAt should be 1000000 - verify your User type definition',
	)
	assert.strictEqual(
		userSample.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User type includes name property',
	)
	assert.strictEqual(
		userSample.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User type includes email property',
	)
})

await test('Post type should have all required fields', () => {
	assert.strictEqual(
		postSample.id,
		'post-1',
		'🚨 post.id should be "post-1" - verify your Post type definition',
	)
	assert.strictEqual(
		postSample.createdAt,
		2000000,
		'🚨 post.createdAt should be 2000000 - verify your Post type definition',
	)
	assert.strictEqual(
		postSample.updatedAt,
		2000000,
		'🚨 post.updatedAt should be 2000000 - verify your Post type definition',
	)
	assert.strictEqual(
		postSample.title,
		'Test Post',
		'🚨 post.title should be "Test Post" - ensure Post type includes title property',
	)
	assert.strictEqual(
		postSample.content,
		'Test content',
		'🚨 post.content should be "Test content" - ensure Post type includes content property',
	)
	assert.strictEqual(
		postSample.authorId,
		'user-1',
		'🚨 post.authorId should be "user-1" - ensure Post type includes authorId property',
	)
})
