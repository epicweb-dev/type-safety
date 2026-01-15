// Generic Types and Interfaces

// 🐨 Create a Result<T> type that represents either:
// - { success: true, data: T }
// - { success: false, error: string }
// 💰 This is a discriminated union with a generic!

// 🐨 Create a Pair<T, U> type with:
// - first: T
// - second: U
// 💰 type Pair<T, U> = { first: T; second: U }

// 🐨 Create an ApiResponse<T> interface with:
// - data: T
// - status: number
// - timestamp: Date

// 🐨 Create a function `createSuccess<T>` that takes data
// and returns a successful Result<T>

// 🐨 Create a function `createError<T>` that takes an error message
// and returns a failed Result<T>

// 🐨 Create a function `makePair<T, U>` that takes two values
// and returns a Pair<T, U>

// Test
// const success = createSuccess({ id: 1, name: 'Alice' })
// const error = createError<User>('User not found')
// const pair = makePair('hello', 42)

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		createSuccess: [
// 			createSuccess('test data'),
// 			createSuccess('hello'),
// 			createSuccess(42),
// 			createSuccess({ id: 1, name: 'Alice' }),
// 		],
// 		createError: [createError('error message')],
// 		makePair: [
// 			makePair('hello', 42),
// 			makePair(1, 'test'),
// 			makePair(true, false),
// 		],
// 		resultSamples: {
// 			success: { success: true, data: 'test' },
// 			error: { success: false, error: 'error' },
// 		},
// 		pairSample: { first: 'test', second: 42 },
// 		apiResponseSample: {
// 			data: { id: 1 },
// 			status: 200,
// 			timestamp: '2024-01-01T00:00:00.000Z',
// 		},
// 	}),
// )
