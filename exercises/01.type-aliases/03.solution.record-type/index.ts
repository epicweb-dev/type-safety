// Record Types
// Building lookup tables with type aliases

type User = {
	id: string
	name: string
	role: 'admin' | 'member'
}

const users: Array<User> = [
	{ id: 'u1', name: 'Ava', role: 'admin' },
	{ id: 'u2', name: 'Ben', role: 'member' },
]

type UsersById = Record<string, User>
type Role = User['role']
type RoleCounts = Record<Role, number>

const usersById: UsersById = {
	u1: users[0],
	u2: users[1],
}

const roleCounts: RoleCounts = {
	admin: 1,
	member: 1,
}

console.log('Users by ID:', usersById)
console.log('Role counts:', roleCounts)

export { usersById, roleCounts }
