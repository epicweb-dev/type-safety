// Extending Interfaces

// 🐨 Create a base Entity interface with:
// - id: string
// - createdAt: Date
// - updatedAt: Date

// 🐨 Create a Timestamps interface with:
// - createdAt: Date
// - updatedAt: Date

// 🐨 Create a User interface that extends Entity with:
// - name: string
// - email: string

// 🐨 Create a Product interface that extends Entity with:
// - name: string
// - price: number

// 🐨 Create an AuditLog interface that extends Timestamps with:
// - action: string
// - userId: string

// Test the interfaces
// const user: User = { ... }
// const product: Product = { ... }
// const log: AuditLog = { ... }

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		user: {
// 			id: 'user-1',
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 			name: 'Alice',
// 			email: 'alice@example.com',
// 		},
// 		product: {
// 			id: 'prod-1',
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 			name: 'Widget',
// 			price: 29.99,
// 		},
// 		log: {
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 			action: 'USER_LOGIN',
// 			userId: 'user-1',
// 		},
// 		entity: {
// 			id: 'test-id',
// 			createdAt: '2024-01-01T00:00:00.000Z',
// 			updatedAt: '2024-01-02T00:00:00.000Z',
// 		},
// 	}),
// )
