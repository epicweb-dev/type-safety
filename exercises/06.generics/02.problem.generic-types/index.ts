// Generic Types and Interfaces

// 🐨 Create a Result<T> type that represents either:
// - { success: true, data: T }
// - { success: false, error: string }
// 💰 Model both success and error cases

// 🐨 Create a function `createSuccess<T>` that takes data
// and returns a successful Result<T>

// 🐨 Create a function `createError<T>` that takes an error message
// and returns a failed Result<T>

// 🐨 Create a Pair<T, U> type with:
// - first: T
// - second: U
// 💰 Create a type that holds two values

// 🐨 Create a function `makePair<T, U>` that takes two values
// and returns a Pair<T, U>

// 🐨 Create and export an ApiResponse<T> interface with:
// - data: T
// - status: number
// - timestamp: Date

// Test
// const success = createSuccess({ id: 1, name: 'Alice' })
// console.log(success)
// const error = createError<User>('User not found')
// console.log(error)
// const pair = makePair('hello', 42)
// console.log(pair)

// 🐨 Export `createSuccess`, `createError`, and `makePair`. Tests import these
// by name and check the resulting types.
// export { createSuccess, createError, makePair }
