import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	getAgeInDays,
	type User,
	type Post,
	type Comment,
	type WithId,
	type WithTimestamps,
	type WithAuthor,
} from './index.ts'

await test('getAgeInDays should calculate days correctly', () => {
	const now = new Date()
	const pastDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
	const entity: WithTimestamps = {
		createdAt: pastDate,
		updatedAt: now,
	}
	const age = getAgeInDays(entity)
	assert.strictEqual(
		age,
		2,
		'🚨 getAgeInDays should calculate days correctly - check your date calculation logic',
	)
})

await test('User should combine WithId, WithTimestamps, and user fields', () => {
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
		user.createdAt instanceof Date,
		'🚨 user.createdAt should be a Date instance - ensure User combines WithTimestamps',
	)
	assert.ok(
		user.updatedAt instanceof Date,
		'🚨 user.updatedAt should be a Date instance - ensure User combines WithTimestamps',
	)
})

await test('Post should combine WithId, WithTimestamps, WithAuthor, and post fields', () => {
	const post: Post = {
		id: 'post-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		authorId: 'user-1',
		authorName: 'Alice',
		title: 'Test Post',
		content: 'Test content',
	}
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
		post.createdAt instanceof Date,
		'🚨 post.createdAt should be a Date instance - ensure Post combines WithTimestamps',
	)
	assert.ok(
		post.updatedAt instanceof Date,
		'🚨 post.updatedAt should be a Date instance - ensure Post combines WithTimestamps',
	)
})

await test('Comment should combine WithId, WithTimestamps, WithAuthor, and comment fields', () => {
	const comment: Comment = {
		id: 'comment-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		authorId: 'user-1',
		authorName: 'Alice',
		text: 'Test comment',
		postId: 'post-1',
	}
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
	const user: User = {
		id: 'user-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date(),
		name: 'Alice',
		email: 'alice@example.com',
	}
	const post: Post = {
		id: 'post-1',
		createdAt: new Date('2024-06-01'),
		updatedAt: new Date(),
		authorId: 'user-1',
		authorName: 'Alice',
		title: 'Test',
		content: 'Test',
	}
	assert.doesNotThrow(
		() => getAgeInDays(user),
		'🚨 getAgeInDays should work with User type - ensure it accepts types with WithTimestamps',
	)
	assert.doesNotThrow(
		() => getAgeInDays(post),
		'🚨 getAgeInDays should work with Post type - ensure it accepts types with WithTimestamps',
	)
})
