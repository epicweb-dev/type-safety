// Type Guards (Predicate Functions)

export type TextInput = string | Array<string>

function isStringArray(value: unknown): value is Array<string> {
	return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

function normalizeText(input: TextInput) {
	if (isStringArray(input)) {
		return input.join(' ').trim()
	}
	return input.trim()
}

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

export type User = AdminUser | RegularUser | GuestUser

function isAdminUser(value: unknown): value is AdminUser {
	return (
		typeof value === 'object' &&
		value !== null &&
		'permissions' in value &&
		Array.isArray((value as AdminUser).permissions) &&
		(value as AdminUser).permissions.every(
			(permission) => typeof permission === 'string',
		)
	)
}

function isRegularUser(value: unknown): value is RegularUser {
	return (
		typeof value === 'object' &&
		value !== null &&
		'subscription' in value &&
		((value as RegularUser).subscription === 'free' ||
			(value as RegularUser).subscription === 'premium')
	)
}

function isGuestUser(value: unknown): value is GuestUser {
	return (
		typeof value === 'object' &&
		value !== null &&
		'guestCode' in value &&
		typeof (value as GuestUser).guestCode === 'string'
	)
}

function describeUser(user: User) {
	if (isAdminUser(user)) {
		return `Admin with ${user.permissions.length} permissions`
	}
	if (isRegularUser(user)) {
		return `Regular user (${user.subscription})`
	}
	if (isGuestUser(user)) {
		return 'Guest user'
	}
	return 'Unknown user'
}

export {
	isStringArray,
	normalizeText,
	isAdminUser,
	isRegularUser,
	isGuestUser,
	describeUser,
}
