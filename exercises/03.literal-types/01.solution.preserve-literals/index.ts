const roles = {
	admin: {
		canDeleteUsers: true,
		canBanUsers: true,
	},
	editor: {
		canDeleteUsers: false,
		canBanUsers: true,
	},
	viewer: {
		canDeleteUsers: false,
		canBanUsers: false,
	},
} as const

type Role = keyof typeof roles

const adminCanDelete: true = roles.admin.canDeleteUsers

function canDeleteUsers(role: Role): boolean {
	return roles[role].canDeleteUsers
}

export { roles, adminCanDelete, canDeleteUsers }
