// Generic Types and Interfaces

export type Result<T> =
	| { success: true; data: T }
	| { success: false; error: string }

export type Pair<T, U> = {
	first: T
	second: U
}

export interface ApiResponse<T> {
	data: T
	status: number
	timestamp: Date
}

export function createSuccess<T>(data: T): Result<T> {
	return { success: true, data }
}

export function createError<T>(error: string): Result<T> {
	return { success: false, error }
}

export function makePair<T, U>(first: T, second: U): Pair<T, U> {
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
