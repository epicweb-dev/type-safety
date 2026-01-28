// Type Narrowing Techniques

export type TextInput = string | Array<string>

// 🐨 Create a function `normalizeText` that:
// - If string, returns it trimmed
// - If array, joins with spaces and trims
// 💰 Check the type before processing

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

export type User = AdminUser | RegularUser | GuestUser

// 🐨 Create a function `describeUser` that returns a description
// Narrow by checking which properties exist
// - Admin: "Admin with X permissions"
// - Regular: "Regular user (subscription)"
// - Guest: "Guest user"

// console.log(normalizeText('  hello  '))
// console.log(normalizeText(['hello', 'world']))

// const admin: User = { permissions: ['read', 'write'] }
// console.log(describeUser(admin))
// const regular: User = { subscription: 'premium' }
// console.log(describeUser(regular))
// const guest: User = { guestCode: 'guest-1' }
// console.log(describeUser(guest))

// 🐨 Export `normalizeText` and `describeUser`. Tests import these by name and
// check the returned strings for each input shape.
// export { normalizeText, describeUser }
