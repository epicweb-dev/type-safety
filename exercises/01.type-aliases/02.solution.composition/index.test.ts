import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('userSample is exported', () => {
	assert.ok(
		'userSample' in solution,
		'🚨 Make sure you export "userSample" - add: export { userSample, ... }',
	)
})

await test('postSample is exported', () => {
	assert.ok(
		'postSample' in solution,
		'🚨 Make sure you export "postSample" - add: export { postSample, ... }',
	)
})

await test('User type should have all required fields', () => {
	assert.ok(
		typeof solution.userSample.id === 'string',
		'🚨 user.id should be a string - verify your User type definition',
	)
	assert.ok(
		typeof solution.userSample.createdAt === 'number',
		'🚨 user.createdAt should be a number (timestamp) - verify your User type definition',
	)
	assert.ok(
		typeof solution.userSample.updatedAt === 'number',
		'🚨 user.updatedAt should be a number (timestamp) - verify your User type definition',
	)
	assert.ok(
		typeof solution.userSample.name === 'string',
		'🚨 user.name should be a string - ensure User type includes name property',
	)
	assert.ok(
		typeof solution.userSample.email === 'string',
		'🚨 user.email should be a string - ensure User type includes email property',
	)
})

await test('Post type should have all required fields', () => {
	assert.ok(
		typeof solution.postSample.id === 'string',
		'🚨 post.id should be a string - verify your Post type definition',
	)
	assert.ok(
		typeof solution.postSample.createdAt === 'number',
		'🚨 post.createdAt should be a number (timestamp) - verify your Post type definition',
	)
	assert.ok(
		typeof solution.postSample.updatedAt === 'number',
		'🚨 post.updatedAt should be a number (timestamp) - verify your Post type definition',
	)
	assert.ok(
		typeof solution.postSample.title === 'string',
		'🚨 post.title should be a string - ensure Post type includes title property',
	)
	assert.ok(
		typeof solution.postSample.content === 'string',
		'🚨 post.content should be a string - ensure Post type includes content property',
	)
	assert.ok(
		typeof solution.postSample.authorId === 'string',
		'🚨 post.authorId should be a string - ensure Post type includes authorId property',
	)
})
