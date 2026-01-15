// Composing Types from Building Blocks

// 🐨 Create type aliases for primitives
// type ID = string
// type Timestamp = number
// type Email = string

// 🐨 Create a User type with these fields:
// - id: ID
// - createdAt: Timestamp
// - updatedAt: Timestamp
// - name: string
// - email: Email
// 💰 type User = { id: ID; createdAt: Timestamp; ... }

// 🐨 Create a Post type with these fields:
// - id: ID
// - createdAt: Timestamp
// - updatedAt: Timestamp
// - title: string
// - content: string
// - authorId: ID
// 💰 type Post = { id: ID; createdAt: Timestamp; ... }

// 🐨 Create example instances
// const user: User = { ... }
// const post: Post = { ... }

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		userSample: {
// 			id: 'user-1',
// 			createdAt: 1000000,
// 			updatedAt: 1000000,
// 			name: 'Alice',
// 			email: 'alice@example.com',
// 		},
// 		postSample: {
// 			id: 'post-1',
// 			createdAt: 2000000,
// 			updatedAt: 2000000,
// 			title: 'Test Post',
// 			content: 'Test content',
// 			authorId: 'user-1',
// 		},
// 	}),
// )
