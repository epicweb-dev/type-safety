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
}

// 🐨 Create a `Role` type from the keys of `roles`

// 🐨 Add `as const` to the `roles` object so this becomes `true`
// @ts-expect-error - 💣 remove this comment
const adminCanDelete: true = roles.admin.canDeleteUsers

// 🐨 Implement `canDeleteUsers` to return whether a role can delete users

// 🐨 Export `roles`, `adminCanDelete`, and `canDeleteUsers` for tests.
// export { roles, adminCanDelete, canDeleteUsers }
