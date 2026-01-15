import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { ageSample, user, post, comment } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('getAgeInDays should calculate days correctly', () => {
	assert.strictEqual(
		ageSample,
		2,
		'🚨 getAgeInDays should calculate days correctly - check your date calculation logic',
	)
})

await test('User should combine WithId, WithTimestamps, and user fields', () => {
	assert.strictEqual(
		user.id,
		'user-1',
		'🚨 user.id should be "user-1" - ensure User combines WithId, WithTimestamps, and user fields',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User combines WithId, WithTimestamps, and user fields',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User combines WithId, WithTimestamps, and user fields',
	)
	assert.ok(
		Boolean(user.createdAt),
		'🚨 user.createdAt should be a Date instance - ensure User combines WithTimestamps',
	)
	assert.ok(
		Boolean(user.updatedAt),
		'🚨 user.updatedAt should be a Date instance - ensure User combines WithTimestamps',
	)
})

await test('Post should combine WithId, WithTimestamps, WithAuthor, and post fields', () => {
	assert.strictEqual(
		post.id,
		'post-1',
		'🚨 post.id should be "post-1" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields',
	)
	assert.strictEqual(
		post.title,
		'Test Post',
		'🚨 post.title should be "Test Post" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields',
	)
	assert.strictEqual(
		post.content,
		'Test content',
		'🚨 post.content should be "Test content" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields',
	)
	assert.strictEqual(
		post.authorId,
		'user-1',
		'🚨 post.authorId should be "user-1" - ensure Post combines WithAuthor',
	)
	assert.strictEqual(
		post.authorName,
		'Alice',
		'🚨 post.authorName should be "Alice" - ensure Post combines WithAuthor',
	)
	assert.ok(
		Boolean(post.createdAt),
		'🚨 post.createdAt should be a Date instance - ensure Post combines WithTimestamps',
	)
	assert.ok(
		Boolean(post.updatedAt),
		'🚨 post.updatedAt should be a Date instance - ensure Post combines WithTimestamps',
	)
})

await test('Comment should combine WithId, WithTimestamps, WithAuthor, and comment fields', () => {
	assert.strictEqual(
		comment.id,
		'comment-1',
		'🚨 comment.id should be "comment-1" - ensure Comment combines WithId, WithTimestamps, WithAuthor, and comment fields',
	)
	assert.strictEqual(
		comment.text,
		'Test comment',
		'🚨 comment.text should be "Test comment" - ensure Comment combines WithId, WithTimestamps, WithAuthor, and comment fields',
	)
	assert.strictEqual(
		comment.postId,
		'post-1',
		'🚨 comment.postId should be "post-1" - ensure Comment includes postId field',
	)
	assert.strictEqual(
		comment.authorId,
		'user-1',
		'🚨 comment.authorId should be "user-1" - ensure Comment combines WithAuthor',
	)
	assert.strictEqual(
		comment.authorName,
		'Alice',
		'🚨 comment.authorName should be "Alice" - ensure Comment combines WithAuthor',
	)
})

await test('getAgeInDays should work with any entity that has WithTimestamps', () => {
	assert.ok(
		Boolean(user.createdAt),
		'🚨 getAgeInDays should work with User type - ensure it accepts types with WithTimestamps',
	)
	assert.ok(
		Boolean(post.createdAt),
		'🚨 getAgeInDays should work with Post type - ensure it accepts types with WithTimestamps',
	)
})
