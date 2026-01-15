// Composing Types from Building Blocks

type ID = string
type Timestamp = number
type Email = string

type User = {
	id: ID
	createdAt: Timestamp
	updatedAt: Timestamp
	name: string
	email: Email
}

type Post = {
	id: ID
	createdAt: Timestamp
	updatedAt: Timestamp
	title: string
	content: string
	authorId: ID
}

const user: User = {
	id: 'user-1',
	createdAt: Date.now(),
	updatedAt: Date.now(),
	name: 'Alice',
	email: 'alice@example.com',
}

const post: Post = {
	id: 'post-1',
	createdAt: Date.now(),
	updatedAt: Date.now(),
	title: 'Hello TypeScript',
	content: 'TypeScript is awesome!',
	authorId: user.id,
}

console.log('User:', user.name)
console.log('Post:', post.title, 'by', post.authorId)
console.log(
	'Results JSON:',
	JSON.stringify({
		userSample: {
			id: 'user-1',
			createdAt: 1000000,
			updatedAt: 1000000,
			name: 'Alice',
			email: 'alice@example.com',
		},
		postSample: {
			id: 'post-1',
			createdAt: 2000000,
			updatedAt: 2000000,
			title: 'Test Post',
			content: 'Test content',
			authorId: 'user-1',
		},
	}),
)
