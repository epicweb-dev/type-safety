import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { formatId, processResult, type ID, type Result } from './index.ts'

await testStep('formatId should format number IDs correctly', async () => {
	expect(formatId(123)).toBe('#123')
	expect(formatId(456)).toBe('#456')
	expect(formatId(0)).toBe('#0')
})

await testStep('formatId should return string IDs as-is', async () => {
	expect(formatId('abc')).toBe('abc')
	expect(formatId('user-123')).toBe('user-123')
	expect(formatId('')).toBe('')
})

await testStep('processResult should handle string results', async () => {
	// We can't easily test console.log, but we can test the function doesn't throw
	expect(() => processResult('Done!')).not.toThrow()
	expect(() => processResult('Success')).not.toThrow()
})

await testStep('processResult should handle Error results', async () => {
	const error = new Error('Test error')
	expect(() => processResult(error)).not.toThrow()
	expect(() => processResult(new Error('Another error'))).not.toThrow()
})

await testStep('ID type should accept string or number', async () => {
	const stringId: ID = 'test-id'
	const numberId: ID = 123
	expect(typeof stringId).toBe('string')
	expect(typeof numberId).toBe('number')
})

await testStep('Result type should accept string or Error', async () => {
	const stringResult: Result = 'success'
	const errorResult: Result = new Error('error')
	expect(typeof stringResult).toBe('string')
	expect(errorResult).toBeInstanceOf(Error)
})
