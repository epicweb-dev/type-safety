import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('getId is exported', () => {
	assert.ok(
		'getId' in solution,
		'🚨 Make sure you export "getId" - add: export { getId, ... }',
	)
})

await test('getProperty is exported', () => {
	assert.ok(
		'getProperty' in solution,
		'🚨 Make sure you export "getProperty" - add: export { getProperty, ... }',
	)
})

await test('merge is exported', () => {
	assert.ok(
		'merge' in solution,
		'🚨 Make sure you export "merge" - add: export { merge, ... }',
	)
})

await test('getId should work with objects that have id property', () => {
	type User = { id: string; name: string; email: string }
	type Product = { id: string; name: string; price: number }
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }
	assert.strictEqual(
		solution.getId(user),
		'1',
		'🚨 getId should work with User objects - ensure your generic constraint includes id property',
	)
	assert.strictEqual(
		solution.getId(product),
		'p1',
		'🚨 getId should work with Product objects - ensure your generic constraint includes id property',
	)
})

await test('getProperty should access properties safely', () => {
	type User = { id: string; name: string; email: string }
	type Product = { id: string; name: string; price: number }
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }
	assert.strictEqual(
		solution.getProperty(user, 'id'),
		'1',
		'🚨 getProperty should access id property - check your generic keyof constraint',
	)
	assert.strictEqual(
		solution.getProperty(user, 'name'),
		'Alice',
		'🚨 getProperty should access name property - check your generic keyof constraint',
	)
	assert.strictEqual(
		solution.getProperty(user, 'email'),
		'alice@example.com',
		'🚨 getProperty should access email property - check your generic keyof constraint',
	)
	assert.strictEqual(
		solution.getProperty(product, 'id'),
		'p1',
		'🚨 getProperty should access id property - check your generic keyof constraint',
	)
	assert.strictEqual(
		solution.getProperty(product, 'name'),
		'Widget',
		'🚨 getProperty should access name property - check your generic keyof constraint',
	)
	assert.strictEqual(
		solution.getProperty(product, 'price'),
		9.99,
		'🚨 getProperty should access price property - check your generic keyof constraint',
	)
})

await test('merge should combine two objects', () => {
	const merged = solution.merge({ a: 1, b: 2 }, { c: 3, d: 4 })
	assert.strictEqual(
		merged.a,
		1,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
	assert.strictEqual(
		merged.b,
		2,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
	assert.strictEqual(
		merged.c,
		3,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
	assert.strictEqual(
		merged.d,
		4,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
})

await test('merge should override properties from first object', () => {
	const mergedOverride = solution.merge({ a: 1, b: 2 }, { b: 3, c: 4 })
	assert.strictEqual(
		mergedOverride.a,
		1,
		'🚨 merge should preserve properties from first object - check your merge implementation',
	)
	assert.strictEqual(
		mergedOverride.b,
		3,
		'🚨 merge should override properties from second object - check your merge implementation',
	) // Overridden by second object
	assert.strictEqual(
		mergedOverride.c,
		4,
		'🚨 merge should add properties from second object - check your merge implementation',
	)
})

await test('merge should work with different object types', () => {
	const mergedDifferent = solution.merge({ name: 'Alice' }, { age: 30 })
	assert.strictEqual(
		mergedDifferent.name,
		'Alice',
		'🚨 merge should work with different object types - check your generic type handling',
	)
	assert.strictEqual(
		mergedDifferent.age,
		30,
		'🚨 merge should work with different object types - check your generic type handling',
	)
})

await test('getProperty should have correct return types', () => {
	type User = { id: string; name: string; email: string }
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	assert.strictEqual(
		typeof solution.getProperty(user, 'id'),
		'string',
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	)
	assert.strictEqual(
		typeof solution.getProperty(user, 'name'),
		'string',
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	)
	assert.strictEqual(
		typeof solution.getProperty(user, 'email'),
		'string',
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	)
})

await test('merge should preserve type information', () => {
	const mergedTypes = solution.merge({ a: 1, b: 'test' }, { c: true, d: 42 })
	assert.strictEqual(
		typeof mergedTypes.a,
		'number',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
	assert.strictEqual(
		typeof mergedTypes.b,
		'string',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
	assert.strictEqual(
		typeof mergedTypes.c,
		'boolean',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
	assert.strictEqual(
		typeof mergedTypes.d,
		'number',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
})
