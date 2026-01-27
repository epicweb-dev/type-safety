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

// 🐨 Create a UsersById type using Record to map IDs to User
// 🦺 Use string keys for IDs

// 🐨 Create a RoleCounts type using Record and the User roles
// 🦺 Extract the role union and map each role to a number

// 🐨 Create a usersById object that matches UsersById
// @ts-expect-error - 💣 remove this comment when you create UsersById
const usersById: UsersById = {
	u1: users[0],
	u2: users[1],
}

// 🐨 Create a roleCounts object that matches RoleCounts
// @ts-expect-error - 💣 remove this comment when you create RoleCounts
const roleCounts: RoleCounts = {
	admin: 1,
	member: 1,
}

// console.log('Users by ID:', usersById)
// console.log('Role counts:', roleCounts)

// 🐨 Export your variables so we can verify your work
// export { usersById, roleCounts }
