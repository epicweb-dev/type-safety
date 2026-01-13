// Type Narrowing Techniques

export type TextInput = string | Array<string>

export function normalizeText(input: TextInput) {
	if (Array.isArray(input)) {
		return input.join(' ').trim()
	}
	return input.trim()
}

// Different user types
export type AdminUser = { type: 'admin'; permissions: Array<string> }
export type RegularUser = { type: 'user'; subscription: 'free' | 'premium' }
export type GuestUser = { type: 'guest' }

export type User = AdminUser | RegularUser | GuestUser

export function describeUser(user: User) {
	switch (user.type) {
		case 'admin':
			return `Admin with ${user.permissions.length} permissions`
		case 'user':
			return `Regular user (${user.subscription})`
		case 'guest':
			return 'Guest user'
	}
}

console.log(normalizeText('  hello  '))
console.log(normalizeText(['hello', 'world']))

const admin: AdminUser = {
	type: 'admin',
	permissions: ['read', 'write', 'delete'],
}
const regular: RegularUser = { type: 'user', subscription: 'premium' }
const guest: GuestUser = { type: 'guest' }

console.log(describeUser(admin))
console.log(describeUser(regular))
console.log(describeUser(guest))

export {}
