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

console.log(formatId(123)) // "#123"
console.log(formatId('abc')) // "abc"
processResult('Done!') // "Success: Done!"
processResult(new Error('Oops')) // "Error: Oops"

const sampleError = new Error('Test error')
console.log(
	'Results JSON:',
	JSON.stringify({
		formatId: [
			formatId(123),
			formatId(456),
			formatId(0),
			formatId('abc'),
			formatId('user-123'),
			formatId(''),
		],
		processResult: [
			processResult('Done!'),
			processResult('Success'),
			processResult(sampleError),
			processResult(new Error('Another error')),
		],
		idTypes: { stringId: typeof 'test-id', numberId: typeof 123 },
		resultTypes: {
			stringResult: typeof 'success',
			errorIsError: sampleError instanceof Error,
		},
	}),
)
