// Type Narrowing Techniques

type TextInput = string | Array<string>

// 🐨 Create a function `normalizeText` that:
// - If string, returns it trimmed
// - If array, joins with spaces and trims
// 💰 Use Array.isArray() to check

// Different user types
type AdminUser = { type: 'admin'; permissions: Array<string> }
type RegularUser = { type: 'user'; subscription: 'free' | 'premium' }
type GuestUser = { type: 'guest' }

type User = AdminUser | RegularUser | GuestUser

// 🐨 Create a function `describeUser` that returns a description
// Use the 'type' property to narrow
// - Admin: "Admin with X permissions"
// - Regular: "Regular user (subscription)"
// - Guest: "Guest user"

// console.log(normalizeText('  hello  '))
// console.log(normalizeText(['hello', 'world']))

// 🐨 When you're done, uncomment this:
// const freeUser: RegularUser = { type: 'user', subscription: 'free' }
// const sampleAdmin: AdminUser = { type: 'admin', permissions: ['read', 'write'] }
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		normalizeText: [
// 			normalizeText('  hello  '),
// 			normalizeText('world'),
// 			normalizeText('  test  '),
// 			normalizeText(['hello', 'world']),
// 			normalizeText(['a', 'b', 'c']),
// 			normalizeText(['single']),
// 			normalizeText(['  hello  ', '  world  ']),
// 		],
// 		describeUser: [
// 			describeUser(sampleAdmin),
// 			describeUser(freeUser),
// 			describeUser({ type: 'user', subscription: 'premium' }),
// 			describeUser({ type: 'guest' }),
// 		],
// 		textInputTypes: {
// 			stringType: typeof 'test',
// 			arrayIsArray: Array.isArray(['test', 'array']),
// 		},
// 	}),
// )
