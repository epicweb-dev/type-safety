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
	expect(user.id, '🚨 user.id should be "user-1" - ensure User extends BaseEntity correctly').toBe('user-1')
	expect(user.createdAt, '🚨 user.createdAt should be 1000000 - ensure User extends BaseEntity correctly').toBe(1000000)
	expect(user.updatedAt, '🚨 user.updatedAt should be 1000000 - ensure User extends BaseEntity correctly').toBe(1000000)
	expect(user.name, '🚨 user.name should be "Alice" - ensure User type includes name property').toBe('Alice')
	expect(user.email, '🚨 user.email should be "alice@example.com" - ensure User type includes email property').toBe('alice@example.com')
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
	expect(post.id, '🚨 post.id should be "post-1" - ensure Post extends BaseEntity correctly').toBe('post-1')
	expect(post.createdAt, '🚨 post.createdAt should be 2000000 - ensure Post extends BaseEntity correctly').toBe(2000000)
	expect(post.updatedAt, '🚨 post.updatedAt should be 2000000 - ensure Post extends BaseEntity correctly').toBe(2000000)
	expect(post.title, '🚨 post.title should be "Test Post" - ensure Post type includes title property').toBe('Test Post')
	expect(post.content, '🚨 post.content should be "Test content" - ensure Post type includes content property').toBe('Test content')
	expect(post.authorId, '🚨 post.authorId should be "user-1" - ensure Post type includes authorId property').toBe('user-1')
})

await testStep('BaseEntity should have required fields', async () => {
	const base: BaseEntity = {
		id: 'test-id',
		createdAt: 1000,
		updatedAt: 2000,
	}
	expect(base.id, '🚨 base.id should be "test-id" - verify your BaseEntity type definition').toBe('test-id')
	expect(base.createdAt, '🚨 base.createdAt should be 1000 - verify your BaseEntity type definition').toBe(1000)
	expect(base.updatedAt, '🚨 base.updatedAt should be 2000 - verify your BaseEntity type definition').toBe(2000)
})
