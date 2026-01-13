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

function getAgeInDays(entity: WithTimestamps): number {
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

console.log(`User ${user.name} created ${getAgeInDays(user)} days ago`)
console.log(`Post "${post.title}" created ${getAgeInDays(post)} days ago`)

export {}
