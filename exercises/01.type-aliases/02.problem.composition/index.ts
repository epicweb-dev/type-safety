// Composing Types from Building Blocks

// 🐨 Create type aliases for primitives
// type ID = string
// type Timestamp = number
// type Email = string

// 🐨 Create a BaseEntity type with common fields
// type BaseEntity = { id: ID; createdAt: Timestamp; updatedAt: Timestamp }

// 🐨 Create a User type by combining BaseEntity with additional fields:
// - name: string
// - email: Email
// 💰 Use intersection: type User = BaseEntity & { name: string; email: Email }

// 🐨 Create a Post type by combining BaseEntity with additional fields:
// - title: string
// - content: string
// - authorId: ID
// 💰 Use intersection: type Post = BaseEntity & { ... }

// 🐨 Create example instances
// const user: User = { ... }
// const post: Post = { ... }
