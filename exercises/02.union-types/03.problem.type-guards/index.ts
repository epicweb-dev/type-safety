// Type Guards (Predicate Functions)

export type TextInput = string | Array<string>

// 🐨 Create a type guard `isStringArray` that checks if a value is an array of strings
// 💰 Use Array.isArray and verify each item is a string

// 🐨 update this function to use the type guard
function normalizeText(input: TextInput) {
	if (Array.isArray(input)) {
		return input.join(' ').trim()
	}
	return input.trim()
}

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

export type User = AdminUser | RegularUser | GuestUser

// 🐨 Create type guards:
// - `isAdminUser` (permissions array)
// - `isRegularUser` (subscription string)
// - `isGuestUser` (guestCode string)
// 💰 These should return `value is ...` so TypeScript narrows

// 🐨 update this function to use the type guards
function describeUser(user: User) {
	if ('permissions' in user) {
		return `Admin with ${user.permissions.length} permissions`
	}
	if ('subscription' in user) {
		return `Regular user (${user.subscription})`
	}
	return 'Guest user'
}

// 🐨 Export `isStringArray`, `normalizeText`, `isAdminUser`, `isRegularUser`,
// `isGuestUser`, and `describeUser`. Tests import these by name and check behavior.
// export { isStringArray, normalizeText, isAdminUser, isRegularUser, isGuestUser, describeUser }
