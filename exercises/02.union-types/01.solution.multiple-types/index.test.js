'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var strict_1 = require('node:assert/strict')
var node_test_1 = require('node:test')
var solution = require('./index.ts')
await (0, node_test_1.test)('formatId is exported', function () {
	strict_1.default.ok(
		'formatId' in solution,
		'🚨 Make sure you export "formatId" - add: export { formatId, ... }',
	)
})
await (0, node_test_1.test)('processResult is exported', function () {
	strict_1.default.ok(
		'processResult' in solution,
		'🚨 Make sure you export "processResult" - add: export { processResult, ... }',
	)
})
await (0, node_test_1.test)(
	'formatId should format number IDs correctly',
	function () {
		strict_1.default.strictEqual(
			solution.formatId(123),
			'#123',
			'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
		)
		strict_1.default.strictEqual(
			solution.formatId(456),
			'#456',
			'🚨 formatId should format number IDs with "#" prefix - check your type narrowing logic',
		)
		strict_1.default.strictEqual(
			solution.formatId(0),
			'#0',
			'🚨 formatId should format number IDs with "#" prefix even for 0 - check your type narrowing logic',
		)
	},
)
await (0, node_test_1.test)(
	'formatId should return string IDs as-is',
	function () {
		strict_1.default.strictEqual(
			solution.formatId('abc'),
			'abc',
			'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
		)
		strict_1.default.strictEqual(
			solution.formatId('user-123'),
			'user-123',
			'🚨 formatId should return string IDs unchanged - check your type narrowing logic',
		)
		strict_1.default.strictEqual(
			solution.formatId(''),
			'',
			'🚨 formatId should return empty strings unchanged - check your type narrowing logic',
		)
	},
)
await (0, node_test_1.test)(
	'processResult should handle string results',
	function () {
		strict_1.default.strictEqual(
			solution.processResult('Done!'),
			'Success: Done!',
			'🚨 processResult should handle string results without throwing - check your union type handling',
		)
		strict_1.default.strictEqual(
			solution.processResult('Success'),
			'Success: Success',
			'🚨 processResult should handle string results without throwing - check your union type handling',
		)
	},
)
await (0, node_test_1.test)(
	'processResult should handle Error results',
	function () {
		var sampleError = new Error('Test error')
		strict_1.default.strictEqual(
			solution.processResult(sampleError),
			'Error: Test error',
			'🚨 processResult should handle Error results without throwing - check your union type handling',
		)
		strict_1.default.strictEqual(
			solution.processResult(new Error('Another error')),
			'Error: Another error',
			'🚨 processResult should handle Error results without throwing - check your union type handling',
		)
	},
)
await (0, node_test_1.test)(
	'ID type should accept string or number',
	function () {
		var stringId = 'test-id'
		var numberId = 123
		strict_1.default.strictEqual(
			typeof stringId,
			'string',
			'🚨 stringId should be type "string" - verify your ID union type accepts strings',
		)
		strict_1.default.strictEqual(
			typeof numberId,
			'number',
			'🚨 numberId should be type "number" - verify your ID union type accepts numbers',
		)
	},
)
await (0, node_test_1.test)(
	'Result type should accept string or Error',
	function () {
		var stringResult = 'success'
		var sampleError = new Error('Test error')
		strict_1.default.strictEqual(
			typeof stringResult,
			'string',
			'🚨 stringResult should be type "string" - verify your Result union type accepts strings',
		)
		strict_1.default.ok(
			sampleError instanceof Error,
			'🚨 errorResult should be an Error instance - verify your Result union type accepts Error',
		)
	},
)
