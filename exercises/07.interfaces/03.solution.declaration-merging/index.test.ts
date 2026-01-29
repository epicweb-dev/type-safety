import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('config is exported', () => {
	assert.ok(
		'config' in solution,
		'🚨 Make sure you export "config" - add: export { config, ... }',
	)
})

await test('getTheme is exported', () => {
	assert.ok(
		'getTheme' in solution,
		'🚨 Make sure you export "getTheme" - add: export { getTheme, ... }',
	)
})

await test('Config should have appName from base interface', () => {
	assert.strictEqual(
		typeof solution.config.appName,
		'string',
		'🚨 config.appName should be a string - this comes from the base Config interface',
	)
})

await test('Config should have theme from merged declaration', () => {
	assert.ok(
		solution.config.theme === 'light' || solution.config.theme === 'dark',
		'🚨 config.theme should be "light" or "dark" - use declaration merging to add this property',
	)
})

await test('Config should have maxConnections from merged declaration', () => {
	assert.strictEqual(
		typeof solution.config.maxConnections,
		'number',
		'🚨 config.maxConnections should be a number - use declaration merging to add this property',
	)
})

await test('getTheme should return the theme from config', () => {
	const result = solution.getTheme(solution.config)
	assert.ok(
		result === 'light' || result === 'dark',
		'🚨 getTheme should return the theme property from the config',
	)
})
