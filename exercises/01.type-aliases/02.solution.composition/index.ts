// Composing Types from Building Blocks

type ID = string
type Timestamp = number
type Email = string

type BaseEntity = {
	id: ID
	createdAt: Timestamp
	updatedAt: Timestamp
}

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

export {}
