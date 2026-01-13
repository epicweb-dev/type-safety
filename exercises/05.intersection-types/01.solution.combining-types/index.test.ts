import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import {
	getAgeInDays,
	type User,
	type Post,
	type Comment,
	type WithId,
	type WithTimestamps,
	type WithAuthor,
} from './index.ts'

await testStep('getAgeInDays should calculate days correctly', async () => {
	const now = new Date()
	const pastDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
	const entity: WithTimestamps = {
		createdAt: pastDate,
		updatedAt: now,
	}
	const age = getAgeInDays(entity)
	expect(age).toBe(2)
})

await testStep('User should combine WithId, WithTimestamps, and user fields', async () => {
	const user: User = {
		id: 'user-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(user.id).toBe('user-1')
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
	expect(user.createdAt).toBeInstanceOf(Date)
	expect(user.updatedAt).toBeInstanceOf(Date)
})

await testStep('Post should combine WithId, WithTimestamps, WithAuthor, and post fields', async () => {
	const post: Post = {
		id: 'post-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		authorId: 'user-1',
		authorName: 'Alice',
		title: 'Test Post',
		content: 'Test content',
	}
	expect(post.id).toBe('post-1')
	expect(post.title).toBe('Test Post')
	expect(post.content).toBe('Test content')
	expect(post.authorId).toBe('user-1')
	expect(post.authorName).toBe('Alice')
	expect(post.createdAt).toBeInstanceOf(Date)
	expect(post.updatedAt).toBeInstanceOf(Date)
})

await testStep('Comment should combine WithId, WithTimestamps, WithAuthor, and comment fields', async () => {
	const comment: Comment = {
		id: 'comment-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		authorId: 'user-1',
		authorName: 'Alice',
		text: 'Test comment',
		postId: 'post-1',
	}
	expect(comment.id).toBe('comment-1')
	expect(comment.text).toBe('Test comment')
	expect(comment.postId).toBe('post-1')
	expect(comment.authorId).toBe('user-1')
	expect(comment.authorName).toBe('Alice')
})

await testStep('getAgeInDays should work with any entity that has WithTimestamps', async () => {
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
	expect(() => getAgeInDays(user)).not.toThrow()
	expect(() => getAgeInDays(post)).not.toThrow()
})
