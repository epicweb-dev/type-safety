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
	createdAt: new Date('2024-06-15'),
	updatedAt: new Date(),
	authorId: user.id,
	authorName: user.name,
	text: 'Great post!',
	postId: post.id,
}

export { user, post, comment }
