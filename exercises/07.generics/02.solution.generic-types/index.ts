// Generic Types and Interfaces

type Result<T> = { success: true; data: T } | { success: false; error: string }

type Pair<T, U> = {
	first: T
	second: U
}

interface ApiResponse<T> {
	data: T
	status: number
	timestamp: Date
}

function createSuccess<T>(data: T): Result<T> {
	return { success: true, data }
}

function createError<T>(error: string): Result<T> {
	return { success: false, error }
}

function makePair<T, U>(first: T, second: U): Pair<T, U> {
	return { first, second }
}

// Test
type User = { id: number; name: string }

const success = createSuccess<User>({ id: 1, name: 'Alice' })
const error = createError<User>('User not found')
const pair = makePair('hello', 42)

console.log('Success result:', success)
console.log('Error result:', error)
console.log('Pair:', pair)

// TypeScript knows the types!
if (success.success) {
	console.log('User name:', success.data.name) // ✅ Safe access
}

console.log('Pair first (string):', pair.first.toUpperCase())
console.log('Pair second (number):', pair.second.toFixed(2))

console.log(
	'Results:',
	JSON.stringify({
		createSuccess: [
			createSuccess('test data'),
			createSuccess('hello'),
			createSuccess(42),
			createSuccess({ id: 1, name: 'Alice' }),
		],
		createError: [createError('error message')],
		makePair: [
			makePair('hello', 42),
			makePair(1, 'test'),
			makePair(true, false),
		],
		resultSamples: {
			success: { success: true, data: 'test' },
			error: { success: false, error: 'error' },
		},
		pairSample: { first: 'test', second: 42 },
		apiResponseSample: {
			data: { id: 1 },
			status: 200,
			timestamp: '2024-01-01T00:00:00.000Z',
		},
	}),
)
