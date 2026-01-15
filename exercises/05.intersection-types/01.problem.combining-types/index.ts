// Combining Types with Intersection

// 🐨 Create base types:
// type WithId = { id: string }
// type WithTimestamps = { createdAt: Date; updatedAt: Date }
// type WithAuthor = { authorId: string; authorName: string }

// 🐨 Create a User type by combining WithId and WithTimestamps
// plus name and email properties
// type User = WithId & WithTimestamps & { name: string; email: string }

// 🐨 Create a Post type by combining WithId, WithTimestamps, and WithAuthor
// plus title and content properties

// 🐨 Create a Comment type by combining WithId, WithTimestamps, and WithAuthor
// plus text and postId properties

// 🐨 Create a function that takes any type with WithTimestamps
// and returns how old it is in days

// Test your types
// const user: User = { ... }
// const post: Post = { ... }

// 🐨 When you're done, uncomment this:
// const fixedNow = new Date('2024-01-03T00:00:00.000Z')
// const pastDate = new Date(fixedNow.getTime() - 2 * 24 * 60 * 60 * 1000)
// const ageSample = Math.floor(
// 	(fixedNow.getTime() - pastDate.getTime()) / (1000 * 60 * 60 * 24),
// )
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		ageSample,
// 		user: {
// 			id: 'user-1',
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 			name: 'Alice',
// 			email: 'alice@example.com',
// 		},
// 		post: {
// 			id: 'post-1',
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 			authorId: 'user-1',
// 			authorName: 'Alice',
// 			title: 'Test Post',
// 			content: 'Test content',
// 		},
// 		comment: {
// 			id: 'comment-1',
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 			authorId: 'user-1',
// 			authorName: 'Alice',
// 			text: 'Test comment',
// 			postId: 'post-1',
// 		},
// 	}),
// )
