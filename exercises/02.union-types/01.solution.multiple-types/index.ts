// Working with Union Types

type ID = string | number

function formatId(id: ID) {
	if (typeof id === 'number') {
		return `#${id}`
	}
	return id
}

type Result = string | Error

function processResult(result: Result) {
	if (result instanceof Error) {
		return `Error: ${result.message}`
	}
	return `Success: ${result}`
}

export { formatId, processResult }
