import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('usersById is exported', () => {
	assert.ok('usersById' in solution, '🚨 Make sure you export "usersById"')
})

await test('roleCounts is exported', () => {
	assert.ok('roleCounts' in solution, '🚨 Make sure you export "roleCounts"')
})

await test('usersById should map ids to users', () => {
	assert.strictEqual(
		solution.usersById.u1.name,
		'Ava',
		'🚨 usersById.u1 should be the user named Ava',
	)
	assert.strictEqual(
		solution.usersById.u2.role,
		'member',
		'🚨 usersById.u2 should have role "member"',
	)
})

await test('roleCounts should include each role', () => {
	assert.deepStrictEqual(
		solution.roleCounts,
		{ admin: 1, member: 1 },
		'🚨 roleCounts should include counts for each role',
	)
})
