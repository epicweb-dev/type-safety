import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('user is exported', () => {
	assert.ok(
		'user' in solution,
		'🚨 Make sure you export "user" - add: export { user, ... }',
	)
})

await test('post is exported', () => {
	assert.ok(
		'post' in solution,
		'🚨 Make sure you export "post" - add: export { post, ... }',
	)
})

await test('comment is exported', () => {
	assert.ok(
		'comment' in solution,
		'🚨 Make sure you export "comment" - add: export { comment, ... }',
	)
})

await test('getAgeInDays should calculate days correctly', () => {
	const fixedNow = new Date('2024-01-03T00:00:00.000Z')
	const pastDate = new Date(fixedNow.getTime() - 2 * 24 * 60 * 60 * 1000)
	const ageSample = Math.floor(
		(fixedNow.getTime() - pastDate.getTime()) / (1000 * 60 * 60 * 24),
	)
	assert.strictEqual(
		ageSample,
		2,
		'🚨 getAgeInDays should calculate days correctly - check your date calculation logic',
	)
})

await test('User should combine WithId, WithTimestamps, and user fields', () => {
	assert.strictEqual(
		solution.user.id,
		'user-1',
		'🚨 user.id should be "user-1" - ensure User combines WithId, WithTimestamps, and user fields',
	)
	assert.strictEqual(
		solution.user.name,
		'Alice',
		'🚨 user.name should be "Alice" - ensure User combines WithId, WithTimestamps, and user fields',
	)
	assert.strictEqual(
		solution.user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - ensure User combines WithId, WithTimestamps, and user fields',
	)
	assert.ok(
		solution.user.createdAt instanceof Date,
		'🚨 user.createdAt should be a Date instance - ensure User combines WithTimestamps',
	)
	assert.ok(
		solution.user.updatedAt instanceof Date,
		'🚨 user.updatedAt should be a Date instance - ensure User combines WithTimestamps',
	)
})

await test('Post should combine WithId, WithTimestamps, WithAuthor, and post fields', () => {
	assert.strictEqual(
		solution.post.id,
		'post-1',
		'🚨 post.id should be "post-1" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields',
	)
	assert.strictEqual(
		solution.post.title,
		'Test Post',
		'🚨 post.title should be "Test Post" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields',
	)
	assert.strictEqual(
		solution.post.content,
		'Test content',
		'🚨 post.content should be "Test content" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields',
	)
	assert.strictEqual(
		solution.post.authorId,
		'user-1',
		'🚨 post.authorId should be "user-1" - ensure Post combines WithAuthor',
	)
	assert.strictEqual(
		solution.post.authorName,
		'Alice',
		'🚨 post.authorName should be "Alice" - ensure Post combines WithAuthor',
	)
	assert.ok(
		solution.post.createdAt instanceof Date,
		'🚨 post.createdAt should be a Date instance - ensure Post combines WithTimestamps',
	)
	assert.ok(
		solution.post.updatedAt instanceof Date,
		'🚨 post.updatedAt should be a Date instance - ensure Post combines WithTimestamps',
	)
})

await test('Comment should combine WithId, WithTimestamps, WithAuthor, and comment fields', () => {
	assert.strictEqual(
		solution.comment.id,
		'comment-1',
		'🚨 comment.id should be "comment-1" - ensure Comment combines WithId, WithTimestamps, WithAuthor, and comment fields',
	)
	assert.strictEqual(
		solution.comment.text,
		'Test comment',
		'🚨 comment.text should be "Test comment" - ensure Comment combines WithId, WithTimestamps, WithAuthor, and comment fields',
	)
	assert.strictEqual(
		solution.comment.postId,
		'post-1',
		'🚨 comment.postId should be "post-1" - ensure Comment includes postId field',
	)
	assert.strictEqual(
		solution.comment.authorId,
		'user-1',
		'🚨 comment.authorId should be "user-1" - ensure Comment combines WithAuthor',
	)
	assert.strictEqual(
		solution.comment.authorName,
		'Alice',
		'🚨 comment.authorName should be "Alice" - ensure Comment combines WithAuthor',
	)
})

await test('getAgeInDays should work with any entity that has WithTimestamps', () => {
	assert.ok(
		solution.user.createdAt instanceof Date,
		'🚨 getAgeInDays should work with User type - ensure it accepts types with WithTimestamps',
	)
	assert.ok(
		solution.post.createdAt instanceof Date,
		'🚨 getAgeInDays should work with Post type - ensure it accepts types with WithTimestamps',
	)
})
