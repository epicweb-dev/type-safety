import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('routes is exported', () => {
	assert.ok(
		'routes' in solution,
		'🚨 Make sure you export "routes" - add: export { routes, ... }',
	)
})

await test('defaultRoute is exported', () => {
	assert.ok(
		'defaultRoute' in solution,
		'🚨 Make sure you export "defaultRoute" - add: export { defaultRoute, ... }',
	)
})

await test('getRoutePath is exported', () => {
	assert.ok(
		'getRoutePath' in solution,
		'🚨 Make sure you export "getRoutePath" - add: export { getRoutePath, ... }',
	)
})

await test('getRoutePath returns the expected path', () => {
	assert.strictEqual(
		solution.getRoutePath('home'),
		'/',
		'🚨 getRoutePath should return the "/" path for home',
	)
	assert.strictEqual(
		solution.getRoutePath('login'),
		'/login',
		'🚨 getRoutePath should return "/login" for login',
	)
	assert.strictEqual(
		solution.getRoutePath('settings'),
		'/settings',
		'🚨 getRoutePath should return "/settings" for settings',
	)
})
