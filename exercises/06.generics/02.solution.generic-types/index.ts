// Generic Types and Interfaces

type Result<T> = { success: true; data: T } | { success: false; error: string }

function createSuccess<T>(data: T): Result<T> {
	return { success: true, data }
}

function createError<T>(error: string): Result<T> {
	return { success: false, error }
}

type Pair<T, U> = {
	first: T
	second: U
}

function makePair<T, U>(first: T, second: U): Pair<T, U> {
	return { first, second }
}

export interface ApiResponse<T> {
	data: T
	status: number
	timestamp: Date
}

export { createSuccess, createError, makePair }
