// Understanding any vs unknown

// Example of `any` - no type checking
function dangerousProcess(value: any): string {
	// These all compile but might crash at runtime!
	return value.toUpperCase()
}

// 🐨 Rewrite this function using `unknown` instead of `any`
// Handle string, number, and other types safely
// function safeProcess(value: unknown): string {
//   if (typeof value === 'string') {
//     return value.toUpperCase()
//   }
//   // Handle other types...
// }

// 🐨 Create a function `parseJsonSafely` that:
// - Takes a JSON string
// - Parses it (JSON.parse returns `any` by default)
// - Returns unknown (forcing callers to narrow)
// function parseJsonSafely(json: string): unknown

// 🐨 Create a function that uses parseJsonSafely
// and properly narrows the result to a User type
// type User = { name: string; email: string }

// Test
// console.log(dangerousProcess('hello'))  // Works
// console.log(dangerousProcess(123))       // Runtime error!

// 🐨 When you're done, uncomment this:
// const malformedJson = 'not json'
// let malformedThrew = false
// try {
// 	parseUser(malformedJson)
// } catch {
// 	malformedThrew = true
// }
// const parsedValid = parseJsonSafely('{"name": "Alice", "age": 30}')
// const parsedTest = parseJsonSafely('{"test": "value"}')
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		safeProcess: [
// 			safeProcess('hello'),
// 			safeProcess('test'),
// 			safeProcess(''),
// 			safeProcess(123),
// 			safeProcess(0),
// 			safeProcess(3.14159),
// 			safeProcess(true),
// 			safeProcess(false),
// 			safeProcess(null),
// 			safeProcess(undefined),
// 			safeProcess({}),
// 		],
// 		parsedValid,
// 		parsedTestType: typeof parsedTest,
// 		parsedTestIsNull: parsedTest === null,
// 		isUserResults: [
// 			isUser({ name: 'Alice', email: 'alice@example.com' }),
// 			isUser({ name: 'Alice' }),
// 			isUser({ email: 'alice@example.com' }),
// 			isUser({ name: 123, email: 'alice@example.com' }),
// 			isUser(null),
// 			isUser('not an object'),
// 		],
// 		parseUserValid: parseUser('{"name": "Alice", "email": "alice@example.com"}'),
// 		parseUserInvalid: parseUser('{"foo": "bar"}'),
// 		malformedThrew,
// 	}),
// )
