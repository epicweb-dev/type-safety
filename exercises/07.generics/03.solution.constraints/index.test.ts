import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { getId, getName, getProperty, merge, propertyTypes } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('getId should work with objects that have id property', () => {
	assert.strictEqual(
		getId[0],
		'1',
		'🚨 getId should work with User objects - ensure your generic constraint includes id property',
	)
	assert.strictEqual(
		getId[1],
		'p1',
		'🚨 getId should work with Product objects - ensure your generic constraint includes id property',
	)
})

await test('getName should work with objects that have name property', () => {
	assert.strictEqual(
		getName[0],
		'Alice',
		'🚨 getName should work with User objects - ensure your generic constraint includes name property',
	)
	assert.strictEqual(
		getName[1],
		'Widget',
		'🚨 getName should work with Product objects - ensure your generic constraint includes name property',
	)
})

await test('getProperty should access properties safely', () => {
	assert.strictEqual(
		getProperty[0],
		'1',
		'🚨 getProperty should access id property - check your generic keyof constraint',
	)
	assert.strictEqual(
		getProperty[1],
		'Alice',
		'🚨 getProperty should access name property - check your generic keyof constraint',
	)
	assert.strictEqual(
		getProperty[2],
		'alice@example.com',
		'🚨 getProperty should access email property - check your generic keyof constraint',
	)
	assert.strictEqual(
		getProperty[3],
		'p1',
		'🚨 getProperty should access id property - check your generic keyof constraint',
	)
	assert.strictEqual(
		getProperty[4],
		'Widget',
		'🚨 getProperty should access name property - check your generic keyof constraint',
	)
	assert.strictEqual(
		getProperty[5],
		9.99,
		'🚨 getProperty should access price property - check your generic keyof constraint',
	)
})

await test('merge should combine two objects', () => {
	assert.strictEqual(
		merge[0].a,
		1,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
	assert.strictEqual(
		merge[0].b,
		2,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
	assert.strictEqual(
		merge[0].c,
		3,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
	assert.strictEqual(
		merge[0].d,
		4,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	)
})

await test('merge should override properties from first object', () => {
	assert.strictEqual(
		merge[1].a,
		1,
		'🚨 merge should preserve properties from first object - check your merge implementation',
	)
	assert.strictEqual(
		merge[1].b,
		3,
		'🚨 merge should override properties from second object - check your merge implementation',
	) // Overridden by second object
	assert.strictEqual(
		merge[1].c,
		4,
		'🚨 merge should add properties from second object - check your merge implementation',
	)
})

await test('merge should work with different object types', () => {
	assert.strictEqual(
		merge[2].name,
		'Alice',
		'🚨 merge should work with different object types - check your generic type handling',
	)
	assert.strictEqual(
		merge[2].age,
		30,
		'🚨 merge should work with different object types - check your generic type handling',
	)
})

await test('getProperty should have correct return types', () => {
	assert.strictEqual(
		propertyTypes.id,
		'string',
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	)
	assert.strictEqual(
		propertyTypes.name,
		'string',
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	)
	assert.strictEqual(
		propertyTypes.email,
		'string',
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	)
})

await test('merge should preserve type information', () => {
	assert.strictEqual(
		propertyTypes.mergeA,
		'number',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
	assert.strictEqual(
		propertyTypes.mergeB,
		'string',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
	assert.strictEqual(
		propertyTypes.mergeC,
		'boolean',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
	assert.strictEqual(
		propertyTypes.mergeD,
		'number',
		'🚨 merge should preserve type information - verify your generic intersection type',
	)
})
