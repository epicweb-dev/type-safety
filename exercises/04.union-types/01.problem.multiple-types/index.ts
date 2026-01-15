// Working with Union Types

// 🐨 Create a type `ID` that can be string or number
// type ID = string | number

// 🐨 Create a type `Result` that can be string (success) or Error (failure)
// type Result = string | Error

// 🐨 Create a function `formatId` that takes an ID and returns a string
// If it's a number, prefix with '#'
// If it's a string, return as-is
// function formatId(id: ID): string

// 🐨 Create a function `processResult` that takes a Result
// If it's a string, log "Success: [value]"
// If it's an Error, log "Error: [message]"
// 💰 Use instanceof to check for Error

// console.log(formatId(123))      // "#123"
// console.log(formatId('abc'))    // "abc"
// processResult('Done!')          // "Success: Done!"
// processResult(new Error('Oops')) // "Error: Oops"

// 🐨 When you're done, uncomment this:
// const sampleError = new Error('Test error')
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		formatId: [
// 			formatId(123),
// 			formatId(456),
// 			formatId(0),
// 			formatId('abc'),
// 			formatId('user-123'),
// 			formatId(''),
// 		],
// 		processResult: [
// 			processResult('Done!'),
// 			processResult('Success'),
// 			processResult(sampleError),
// 			processResult(new Error('Another error')),
// 		],
// 		idTypes: { stringId: typeof 'test-id', numberId: typeof 123 },
// 		resultTypes: { stringResult: typeof 'success', errorIsError: sampleError instanceof Error },
// 	}),
// )
