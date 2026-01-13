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

export {}
