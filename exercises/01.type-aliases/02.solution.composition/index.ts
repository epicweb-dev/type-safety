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

const userSample: User = {
	id: 'user-1',
	createdAt: 1000000,
	updatedAt: 1000000,
	name: 'Alice',
	email: 'alice@example.com',
}

const postSample: Post = {
	id: 'post-1',
	createdAt: 2000000,
	updatedAt: 2000000,
	title: 'Test Post',
	content: 'Test content',
	authorId: 'user-1',
}

export { userSample, postSample }
