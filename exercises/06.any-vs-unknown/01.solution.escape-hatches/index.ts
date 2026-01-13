// Understanding any vs unknown

// Example of `any` - no type checking (dangerous!)
function dangerousProcess(value: any): string {
	return value.toUpperCase() // Will crash if not a string!
}

// Safe version using `unknown`
function safeProcess(value: unknown): string {
	if (typeof value === 'string') {
		return value.toUpperCase()
	}
	if (typeof value === 'number') {
		return value.toFixed(2)
	}
	if (typeof value === 'boolean') {
		return value ? 'true' : 'false'
	}
	return String(value)
}

function parseJsonSafely(json: string): unknown {
	return JSON.parse(json)
}

type User = { name: string; email: string }

function isUser(value: unknown): value is User {
	return (
		typeof value === 'object' &&
		value !== null &&
		'name' in value &&
		'email' in value &&
		typeof (value as User).name === 'string' &&
		typeof (value as User).email === 'string'
	)
}

function parseUser(json: string): User | null {
	const data = parseJsonSafely(json)
	if (isUser(data)) {
		return data
	}
	return null
}

// Test safe processing
console.log(safeProcess('hello')) // "HELLO"
console.log(safeProcess(123)) // "123.00"
console.log(safeProcess(true)) // "true"

// Test JSON parsing
const validJson = '{"name": "Alice", "email": "alice@example.com"}'
const invalidJson = '{"foo": "bar"}'

console.log(parseUser(validJson)) // { name: "Alice", email: "..." }
console.log(parseUser(invalidJson)) // null

export {}
