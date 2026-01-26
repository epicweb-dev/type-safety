// Type Narrowing Techniques

type TextInput = string | Array<string>

// 🐨 Create a function `normalizeText` that:
// - If string, returns it trimmed
// - If array, joins with spaces and trims
// 💰 Use a type guard to distinguish strings from arrays

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

// 🐨 Export your functions so we can verify your work
// 💰 Export the functions you created
