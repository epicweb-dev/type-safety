// Working with Union Types

type ID = string | number

type Result = string | Error

function formatId(id: ID): string {
	if (typeof id === 'number') {
		return `#${id}`
	}
	return id
}

function processResult(result: Result): void {
	if (result instanceof Error) {
		console.log(`Error: ${result.message}`)
	} else {
		console.log(`Success: ${result}`)
	}
}

console.log(formatId(123)) // "#123"
console.log(formatId('abc')) // "abc"
processResult('Done!') // "Success: Done!"
processResult(new Error('Oops')) // "Error: Oops"

export {}
