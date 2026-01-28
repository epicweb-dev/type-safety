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

await test('User should combine WithId, WithTimestamps, and user fields', () => {
	assert.strictEqual(
		typeof solution.user.id,
		'string',
		'🚨 user.id should be a string - ensure User combines WithId',
	)
	assert.strictEqual(
		typeof solution.user.name,
		'string',
		'🚨 user.name should be a string - ensure User has name property',
	)
	assert.strictEqual(
		typeof solution.user.email,
		'string',
		'🚨 user.email should be a string - ensure User has email property',
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
		typeof solution.post.id,
		'string',
		'🚨 post.id should be a string - ensure Post combines WithId',
	)
	assert.strictEqual(
		typeof solution.post.title,
		'string',
		'🚨 post.title should be a string - ensure Post has title property',
	)
	assert.strictEqual(
		typeof solution.post.content,
		'string',
		'🚨 post.content should be a string - ensure Post has content property',
	)
	assert.strictEqual(
		typeof solution.post.authorId,
		'string',
		'🚨 post.authorId should be a string - ensure Post combines WithAuthor',
	)
	assert.strictEqual(
		typeof solution.post.authorName,
		'string',
		'🚨 post.authorName should be a string - ensure Post combines WithAuthor',
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
		typeof solution.comment.id,
		'string',
		'🚨 comment.id should be a string - ensure Comment combines WithId',
	)
	assert.strictEqual(
		typeof solution.comment.text,
		'string',
		'🚨 comment.text should be a string - ensure Comment has text property',
	)
	assert.strictEqual(
		typeof solution.comment.postId,
		'string',
		'🚨 comment.postId should be a string - ensure Comment has postId property',
	)
	assert.strictEqual(
		typeof solution.comment.authorId,
		'string',
		'🚨 comment.authorId should be a string - ensure Comment combines WithAuthor',
	)
	assert.strictEqual(
		typeof solution.comment.authorName,
		'string',
		'🚨 comment.authorName should be a string - ensure Comment combines WithAuthor',
	)
	assert.ok(
		solution.comment.createdAt instanceof Date,
		'🚨 comment.createdAt should be a Date instance - ensure Comment combines WithTimestamps',
	)
	assert.ok(
		solution.comment.updatedAt instanceof Date,
		'🚨 comment.updatedAt should be a Date instance - ensure Comment combines WithTimestamps',
	)
})
