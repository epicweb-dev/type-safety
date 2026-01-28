// Type Narrowing Techniques

export type TextInput = string | Array<string>

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

function describeUser(user: User) {
	if ('permissions' in user) {
		return `Admin with ${user.permissions.length} permissions`
	}
	if ('subscription' in user) {
		return `Regular user (${user.subscription})`
	}
	return 'Guest user'
}

export { normalizeText, describeUser }
