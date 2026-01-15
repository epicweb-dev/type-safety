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

const freeUser: RegularUser = { type: 'user', subscription: 'free' }
const sampleAdmin: AdminUser = { type: 'admin', permissions: ['read', 'write'] }

console.log(
	'Results:',
	JSON.stringify({
		normalizeText: [
			normalizeText('  hello  '),
			normalizeText('world'),
			normalizeText('  test  '),
			normalizeText(['hello', 'world']),
			normalizeText(['a', 'b', 'c']),
			normalizeText(['single']),
			normalizeText(['  hello  ', '  world  ']),
		],
		describeUser: [
			describeUser(sampleAdmin),
			describeUser(freeUser),
			describeUser(regular),
			describeUser(guest),
		],
		textInputTypes: {
			stringType: typeof 'test',
			arrayIsArray: Array.isArray(['test', 'array']),
		},
	}),
)
