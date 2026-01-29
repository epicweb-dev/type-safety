// Generic Types and Interfaces

// 🐨 Create a LoadingState<Data> type that represents:
// - { status: 'idle' }
// - { status: 'loading' }
// - { status: 'success', data: Data }
// - { status: 'error', error: string }
// 💰 Model all four states with a generic discriminated union

// 🐨 Create a function `createSuccess<Data>` that:
// - takes data of type Data
// - returns a LoadingState<Data> with status 'success'

// 🐨 Create a function `createError<Data>` that:
// - takes an error message string
// - returns a LoadingState<Data> with status 'error'

// const userState = createSuccess({ id: 1, name: 'Ada' })
// console.log(userState)
// const errorState = createError<User>('Failed to load user')
// console.log(errorState)

// 🐨 Export `createSuccess` and `createError`. Tests import these by name.
// export { createSuccess, createError }
