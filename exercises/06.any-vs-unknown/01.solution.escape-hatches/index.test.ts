import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import {
	safeProcess,
	parseJsonSafely,
	isUser,
	parseUser,
	type User,
} from './index.ts'

await testStep('safeProcess should handle string values', async () => {
	expect(safeProcess('hello')).toBe('HELLO')
	expect(safeProcess('test')).toBe('TEST')
	expect(safeProcess('')).toBe('')
})

await testStep('safeProcess should handle number values', async () => {
	expect(safeProcess(123)).toBe('123.00')
	expect(safeProcess(0)).toBe('0.00')
	expect(safeProcess(3.14159)).toBe('3.14')
})

await testStep('safeProcess should handle boolean values', async () => {
	expect(safeProcess(true)).toBe('true')
	expect(safeProcess(false)).toBe('false')
})

await testStep('safeProcess should handle other types', async () => {
	expect(safeProcess(null)).toBe('null')
	expect(safeProcess(undefined)).toBe('undefined')
	expect(safeProcess({})).toBe('[object Object]')
})

await testStep('parseJsonSafely should parse valid JSON', async () => {
	const result = parseJsonSafely('{"name": "Alice", "age": 30}')
	expect(result).toEqual({ name: 'Alice', age: 30 })
})

await testStep('parseJsonSafely should return unknown type', async () => {
	const result = parseJsonSafely('{"test": "value"}')
	expect(typeof result).toBe('object')
	expect(result).not.toBeNull()
})

await testStep('isUser should correctly identify User objects', async () => {
	const validUser = { name: 'Alice', email: 'alice@example.com' }
	const invalidUser1 = { name: 'Alice' }
	const invalidUser2 = { email: 'alice@example.com' }
	const invalidUser3 = { name: 123, email: 'alice@example.com' }
	const invalidUser4 = null
	const invalidUser5 = 'not an object'

	expect(isUser(validUser)).toBe(true)
	expect(isUser(invalidUser1)).toBe(false)
	expect(isUser(invalidUser2)).toBe(false)
	expect(isUser(invalidUser3)).toBe(false)
	expect(isUser(invalidUser4)).toBe(false)
	expect(isUser(invalidUser5)).toBe(false)
})

await testStep('parseUser should return User for valid JSON', async () => {
	const validJson = '{"name": "Alice", "email": "alice@example.com"}'
	const result = parseUser(validJson)
	expect(result).not.toBeNull()
	if (result) {
		expect(result.name).toBe('Alice')
		expect(result.email).toBe('alice@example.com')
	}
})

await testStep('parseUser should return null for invalid JSON', async () => {
	const invalidJson = '{"foo": "bar"}'
	const result = parseUser(invalidJson)
	expect(result).toBeNull()
})

await testStep('parseUser should throw for malformed JSON', async () => {
	const malformedJson = 'not json'
	let threw = false
	try {
		parseUser(malformedJson)
	} catch {
		threw = true
	}
	expect(threw).toBe(true)
})
