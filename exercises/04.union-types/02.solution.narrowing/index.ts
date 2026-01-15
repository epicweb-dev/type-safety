// Type Narrowing Techniques

type TextInput = string | Array<string>

function normalizeText(input: TextInput) {
	if (Array.isArray(input)) {
		return input.join(' ').trim()
	}
	return input.trim()
}

// Different user types
type AdminUser = { type: 'admin'; permissions: Array<string> }
type RegularUser = { type: 'user'; subscription: 'free' | 'premium' }
type GuestUser = { type: 'guest' }

type User = AdminUser | RegularUser | GuestUser

function describeUser(user: User) {
	switch (user.type) {
		case 'admin':
			return `Admin with ${user.permissions.length} permissions`
		case 'user':
			return `Regular user (${user.subscription})`
		case 'guest':
			return 'Guest user'
	}
}

export { normalizeText, describeUser }
