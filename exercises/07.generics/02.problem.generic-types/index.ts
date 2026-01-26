// Generic Types and Interfaces

// 🐨 Create a Result<T> type that represents either:
// - { success: true, data: T }
// - { success: false, error: string }
// 💰 This is a discriminated union with a generic!

// 🐨 Create a Pair<T, U> type with:
// - first: T
// - second: U
// 💰 Pair should hold two values of different types

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

// 🐨 Export your functions so we can verify your work
// 💰 Export the functions you created
