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
	expect(age, '🚨 getAgeInDays should calculate days correctly - check your date calculation logic').toBe(2)
})

await testStep('User should combine WithId, WithTimestamps, and user fields', async () => {
	const user: User = {
		id: 'user-1',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(user.id, '🚨 user.id should be "user-1" - ensure User combines WithId, WithTimestamps, and user fields').toBe('user-1')
	expect(user.name, '🚨 user.name should be "Alice" - ensure User combines WithId, WithTimestamps, and user fields').toBe('Alice')
	expect(user.email, '🚨 user.email should be "alice@example.com" - ensure User combines WithId, WithTimestamps, and user fields').toBe('alice@example.com')
	expect(user.createdAt, '🚨 user.createdAt should be a Date instance - ensure User combines WithTimestamps').toBeInstanceOf(Date)
	expect(user.updatedAt, '🚨 user.updatedAt should be a Date instance - ensure User combines WithTimestamps').toBeInstanceOf(Date)
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
	expect(post.id, '🚨 post.id should be "post-1" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields').toBe('post-1')
	expect(post.title, '🚨 post.title should be "Test Post" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields').toBe('Test Post')
	expect(post.content, '🚨 post.content should be "Test content" - ensure Post combines WithId, WithTimestamps, WithAuthor, and post fields').toBe('Test content')
	expect(post.authorId, '🚨 post.authorId should be "user-1" - ensure Post combines WithAuthor').toBe('user-1')
	expect(post.authorName, '🚨 post.authorName should be "Alice" - ensure Post combines WithAuthor').toBe('Alice')
	expect(post.createdAt, '🚨 post.createdAt should be a Date instance - ensure Post combines WithTimestamps').toBeInstanceOf(Date)
	expect(post.updatedAt, '🚨 post.updatedAt should be a Date instance - ensure Post combines WithTimestamps').toBeInstanceOf(Date)
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
	expect(comment.id, '🚨 comment.id should be "comment-1" - ensure Comment combines WithId, WithTimestamps, WithAuthor, and comment fields').toBe('comment-1')
	expect(comment.text, '🚨 comment.text should be "Test comment" - ensure Comment combines WithId, WithTimestamps, WithAuthor, and comment fields').toBe('Test comment')
	expect(comment.postId, '🚨 comment.postId should be "post-1" - ensure Comment includes postId field').toBe('post-1')
	expect(comment.authorId, '🚨 comment.authorId should be "user-1" - ensure Comment combines WithAuthor').toBe('user-1')
	expect(comment.authorName, '🚨 comment.authorName should be "Alice" - ensure Comment combines WithAuthor').toBe('Alice')
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
	expect(() => getAgeInDays(user), '🚨 getAgeInDays should work with User type - ensure it accepts types with WithTimestamps').not.toThrow()
	expect(() => getAgeInDays(post), '🚨 getAgeInDays should work with Post type - ensure it accepts types with WithTimestamps').not.toThrow()
})
