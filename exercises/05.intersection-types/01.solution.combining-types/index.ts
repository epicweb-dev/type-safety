// Combining Types with Intersection

type WithId = { id: string }
type WithTimestamps = { createdAt: Date; updatedAt: Date }
type WithAuthor = { authorId: string; authorName: string }

type User = WithId & WithTimestamps & { name: string; email: string }

type Post = WithId &
	WithTimestamps &
	WithAuthor & { title: string; content: string }

type Comment = WithId &
	WithTimestamps &
	WithAuthor & { text: string; postId: string }

function getAgeInDays(entity: WithTimestamps) {
	const now = new Date()
	const created = entity.createdAt
	const diffMs = now.getTime() - created.getTime()
	return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}

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
	authorId: user.id,
	authorName: user.name,
	title: 'Hello World',
	content: 'This is my first post!',
}

const comment: Comment = {
	id: 'comment-1',
	createdAt: new Date('2024-01-01T00:00:00.000Z'),
	updatedAt: new Date('2024-01-02T00:00:00.000Z'),
	authorId: 'user-1',
	authorName: 'Alice',
	text: 'Test comment',
	postId: 'post-1',
}

const user: User = {
	id: 'user-1',
	createdAt: new Date('2024-01-01T00:00:00.000Z'),
	updatedAt: new Date('2024-01-02T00:00:00.000Z'),
	name: 'Alice',
	email: 'alice@example.com',
}

const post: Post = {
	id: 'post-1',
	createdAt: new Date('2024-01-01T00:00:00.000Z'),
	updatedAt: new Date('2024-01-02T00:00:00.000Z'),
	authorId: 'user-1',
	authorName: 'Alice',
	title: 'Test Post',
	content: 'Test content',
}

export { user, post, comment }
