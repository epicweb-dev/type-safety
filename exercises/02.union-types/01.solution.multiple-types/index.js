'use strict'
// Working with Union Types
Object.defineProperty(exports, '__esModule', { value: true })
exports.formatId = formatId
exports.processResult = processResult
function formatId(id) {
	if (typeof id === 'number') {
		return '#'.concat(id)
	}
	return id
}
function processResult(result) {
	if (result instanceof Error) {
		return 'Error: '.concat(result.message)
	}
	return 'Success: '.concat(result)
}
