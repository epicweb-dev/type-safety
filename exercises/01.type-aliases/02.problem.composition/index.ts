// Composing Types from Building Blocks

// 🐨 Create type aliases for primitives
// type ID = string
// type Timestamp = number
// type Email = string

// 🐨 Create a BaseEntity type with common fields
// type BaseEntity = { id: ID; createdAt: Timestamp; updatedAt: Timestamp }

// 🐨 Create a User type that includes BaseEntity fields plus:
// - name: string
// - email: Email

// 🐨 Create a Post type that includes BaseEntity fields plus:
// - title: string
// - content: string
// - authorId: ID

// 💰 You can spread or redefine the fields from BaseEntity

// 🐨 Create example instances
// const user: User = { ... }
// const post: Post = { ... }

export {}
