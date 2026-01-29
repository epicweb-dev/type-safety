// Generic Types and Interfaces

type LoadingState<Data> =
	| { status: 'idle' }
	| { status: 'loading' }
	| { status: 'success'; data: Data }
	| { status: 'error'; error: string }

function createSuccess<Data>(data: Data) {
	return { status: 'success', data }
}

function createError<Data>(error: string) {
	return { status: 'error', error }
}

export { createSuccess, createError }
