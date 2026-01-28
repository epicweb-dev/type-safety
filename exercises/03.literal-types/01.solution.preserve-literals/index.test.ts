import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('roles is exported', () => {
	assert.ok(
		'roles' in solution,
		'🚨 Make sure you export "roles" - add: export { roles, ... }',
	)
})

await test('adminCanDelete is exported', () => {
	assert.ok(
		'adminCanDelete' in solution,
		'🚨 Make sure you export "adminCanDelete" - add: export { adminCanDelete, ... }',
	)
})

await test('canDeleteUsers is exported', () => {
	assert.ok(
		'canDeleteUsers' in solution,
		'🚨 Make sure you export "canDeleteUsers" - add: export { canDeleteUsers, ... }',
	)
})

await test('canDeleteUsers reports permissions', () => {
	assert.strictEqual(
		solution.canDeleteUsers('admin'),
		true,
		'🚨 admin should be able to delete users',
	)
	assert.strictEqual(
		solution.canDeleteUsers('editor'),
		false,
		'🚨 editor should not be able to delete users',
	)
	assert.strictEqual(
		solution.canDeleteUsers('viewer'),
		false,
		'🚨 viewer should not be able to delete users',
	)
})
