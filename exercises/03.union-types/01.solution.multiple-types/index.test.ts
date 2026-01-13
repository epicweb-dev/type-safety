import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { formatId, processResult, type ID, type Result } from './index.ts'

await testStep('formatId should format number IDs correctly', async () => {
	expect(formatId(123), '🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic').toBe('#123')
	expect(formatId(456), '🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic').toBe('#456')
	expect(formatId(0), '🚨 formatId should format number IDs with "#" prefix even for 0 - check your type narrowing logic').toBe('#0')
})

await testStep('formatId should return string IDs as-is', async () => {
	expect(formatId('abc'), '🚨 formatId should return string IDs unchanged - check your type narrowing logic').toBe('abc')
	expect(formatId('user-123'), '🚨 formatId should return string IDs unchanged - check your type narrowing logic').toBe('user-123')
	expect(formatId(''), '🚨 formatId should return empty strings unchanged - check your type narrowing logic').toBe('')
})

await testStep('processResult should handle string results', async () => {
	// We can't easily test console.log, but we can test the function doesn't throw
	expect(() => processResult('Done!'), '🚨 processResult should handle string results without throwing - check your union type handling').not.toThrow()
	expect(() => processResult('Success'), '🚨 processResult should handle string results without throwing - check your union type handling').not.toThrow()
})

await testStep('processResult should handle Error results', async () => {
	const error = new Error('Test error')
	expect(() => processResult(error), '🚨 processResult should handle Error results without throwing - check your union type handling').not.toThrow()
	expect(() => processResult(new Error('Another error')), '🚨 processResult should handle Error results without throwing - check your union type handling').not.toThrow()
})

await testStep('ID type should accept string or number', async () => {
	const stringId: ID = 'test-id'
	const numberId: ID = 123
	expect(typeof stringId, '🚨 stringId should be type "string" - verify your ID union type accepts strings').toBe('string')
	expect(typeof numberId, '🚨 numberId should be type "number" - verify your ID union type accepts numbers').toBe('number')
})

await testStep('Result type should accept string or Error', async () => {
	const stringResult: Result = 'success'
	const errorResult: Result = new Error('error')
	expect(typeof stringResult, '🚨 stringResult should be type "string" - verify your Result union type accepts strings').toBe('string')
	expect(errorResult, '🚨 errorResult should be an Error instance - verify your Result union type accepts Error').toBeInstanceOf(Error)
})
