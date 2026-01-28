// Discriminated Unions Pattern

// 🐨 Create discriminated union types for API response states:

// 🐨 Create a function `renderState` that takes an ApiState
// and returns appropriate UI text for each state:
// - Loading: "Loading..."
// - Success: "Loaded X items"
// - Error: "Error: [message]"
// Include exhaustiveness checking!

// 🐨 Create discriminated union for payment methods:

// 🐨 Create a function `describePayment` that describes each method

// const loadingState: ApiState = { status: 'loading' }
// const successState: ApiState = { status: 'success', data: ['a', 'b'] }
// const errorState: ApiState = { status: 'error', error: 'Network error' }
// console.log(renderState(loadingState))
// console.log(renderState(successState))
// console.log(renderState(errorState))

// const card: PaymentMethod = { type: 'credit_card', last4: '1234', expiry: '12/25' }
// const paypal: PaymentMethod = { type: 'paypal', email: 'me@example.com' }
// const bank: PaymentMethod = { type: 'bank', accountNumber: '000123' }
// console.log(describePayment(card))
// console.log(describePayment(paypal))
// console.log(describePayment(bank))

// 🐨 Export `renderState` and `describePayment`. Tests import these by name and
// check the output for each union variant.
// export { renderState, describePayment }
