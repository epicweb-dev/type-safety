// Working with Union Types

export type ID = string | number

export type Result = string | Error

export function formatId(id: ID) {
	if (typeof id === 'number') {
		return `#${id}`
	}
	return id
}

export function processResult(result: Result) {
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
