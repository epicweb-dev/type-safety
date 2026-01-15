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

// 🐨 Export your functions so we can verify your work
// 💰 export { safeProcess, parseJsonSafely, isUser, parseUser }
