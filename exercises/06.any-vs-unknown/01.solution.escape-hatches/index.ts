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

const malformedJson = 'not json'
let malformedThrew = false
try {
	parseUser(malformedJson)
} catch {
	malformedThrew = true
}

const parsedValid = parseJsonSafely('{"name": "Alice", "age": 30}')
const parsedTest = parseJsonSafely('{"test": "value"}')

console.log(
	'Results:',
	JSON.stringify({
		safeProcess: [
			safeProcess('hello'),
			safeProcess('test'),
			safeProcess(''),
			safeProcess(123),
			safeProcess(0),
			safeProcess(3.14159),
			safeProcess(true),
			safeProcess(false),
			safeProcess(null),
			safeProcess(undefined),
			safeProcess({}),
		],
		parsedValid,
		parsedTestType: typeof parsedTest,
		parsedTestIsNull: parsedTest === null,
		isUserResults: [
			isUser({ name: 'Alice', email: 'alice@example.com' }),
			isUser({ name: 'Alice' }),
			isUser({ email: 'alice@example.com' }),
			isUser({ name: 123, email: 'alice@example.com' }),
			isUser(null),
			isUser('not an object'),
		],
		parseUserValid: parseUser(validJson),
		parseUserInvalid: parseUser(invalidJson),
		malformedThrew,
	}),
)
