// Type Narrowing Techniques

type TextInput = string | Array<string>

// 🐨 Create a function `normalizeText` that:
// - If string, returns it trimmed
// - If array, joins with spaces and trims
// 💰 Check the type before processing

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

type User = AdminUser | RegularUser | GuestUser

// 🐨 Create a function `describeUser` that returns a description
// Narrow by checking which properties exist
// - Admin: "Admin with X permissions"
// - Regular: "Regular user (subscription)"
// - Guest: "Guest user"

// console.log(normalizeText('  hello  '))
// console.log(normalizeText(['hello', 'world']))

// 🐨 Export your functions so we can verify your work
