import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { type User, type Post, type BaseEntity } from './index.ts'

await testStep('User type should extend BaseEntity', async () => {
	const user: User = {
		id: 'user-1',
		createdAt: 1000000,
		updatedAt: 1000000,
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(user.id).toBe('user-1')
	expect(user.createdAt).toBe(1000000)
	expect(user.updatedAt).toBe(1000000)
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
})

await testStep('Post type should extend BaseEntity', async () => {
	const post: Post = {
		id: 'post-1',
		createdAt: 2000000,
		updatedAt: 2000000,
		title: 'Test Post',
		content: 'Test content',
		authorId: 'user-1',
	}
	expect(post.id).toBe('post-1')
	expect(post.createdAt).toBe(2000000)
	expect(post.updatedAt).toBe(2000000)
	expect(post.title).toBe('Test Post')
	expect(post.content).toBe('Test content')
	expect(post.authorId).toBe('user-1')
})

await testStep('BaseEntity should have required fields', async () => {
	const base: BaseEntity = {
		id: 'test-id',
		createdAt: 1000,
		updatedAt: 2000,
	}
	expect(base.id).toBe('test-id')
	expect(base.createdAt).toBe(1000)
	expect(base.updatedAt).toBe(2000)
})
