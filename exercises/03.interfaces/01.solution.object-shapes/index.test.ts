import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const {
	isAdmin,
	productSummary,
	productDescriptionMissing,
	productDescriptionValue,
	userRole,
} = JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('isAdmin should correctly identify admin users', () => {
	assert.strictEqual(
		isAdmin[0],
		true,
		'🚨 isAdmin should return true for admin users - check your role comparison logic',
	)
	assert.strictEqual(
		isAdmin[1],
		false,
		'🚨 isAdmin should return false for regular users - check your role comparison logic',
	)
})

await test('getProductSummary should format products correctly', () => {
	assert.strictEqual(
		productSummary[0],
		'Widget - $29.99: No description',
		'🚨 getProductSummary should handle products without description - check your optional property handling',
	)
	assert.strictEqual(
		productSummary[1],
		'Gadget - $49.99: Has description',
		'🚨 getProductSummary should include description when present - check your optional property handling',
	)
})

await test('User interface should enforce correct structure', () => {
	assert.strictEqual(
		userRole,
		'user',
		'🚨 user.role should be "user" - verify your User interface includes role property',
	)
})

await test('Product interface should allow optional description', () => {
	assert.strictEqual(
		productDescriptionMissing,
		true,
		'🚨 product1.description should be undefined when not provided - verify description is optional in Product interface',
	)
	assert.strictEqual(
		productDescriptionValue,
		'Has description',
		'🚨 product2.description should be "Has description" when provided - verify description is optional in Product interface',
	)
})
