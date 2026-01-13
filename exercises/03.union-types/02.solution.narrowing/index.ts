// Type Narrowing Techniques

type TextInput = string | string[]

function normalizeText(input: TextInput): string {
	if (Array.isArray(input)) {
		return input.join(' ').trim()
	}
	return input.trim()
}

// Different user types
type AdminUser = { type: 'admin'; permissions: string[] }
type RegularUser = { type: 'user'; subscription: 'free' | 'premium' }
type GuestUser = { type: 'guest' }

type User = AdminUser | RegularUser | GuestUser

function describeUser(user: User): string {
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

const admin: AdminUser = { type: 'admin', permissions: ['read', 'write', 'delete'] }
const regular: RegularUser = { type: 'user', subscription: 'premium' }
const guest: GuestUser = { type: 'guest' }

console.log(describeUser(admin))
console.log(describeUser(regular))
console.log(describeUser(guest))

export {}
