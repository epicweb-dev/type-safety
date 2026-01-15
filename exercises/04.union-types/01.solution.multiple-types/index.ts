// Working with Union Types

type ID = string | number

type Result = string | Error

function formatId(id: ID) {
	if (typeof id === 'number') {
		return `#${id}`
	}
	return id
}

function processResult(result: Result) {
	if (result instanceof Error) {
		const message = `Error: ${result.message}`
		console.log(message)
		return message
	}
	const message = `Success: ${result}`
	console.log(message)
	return message
}

export { formatId, processResult }
