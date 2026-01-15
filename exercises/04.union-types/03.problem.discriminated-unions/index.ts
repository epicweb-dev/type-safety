// Discriminated Unions Pattern

// 🐨 Create discriminated union types for API response states:
// type LoadingState = { status: 'loading' }
// type SuccessState = { status: 'success'; data: Array<string> }
// type ErrorState = { status: 'error'; error: string }
// type ApiState = LoadingState | SuccessState | ErrorState

// 🐨 Create a function `renderState` that takes an ApiState
// and returns appropriate UI text for each state:
// - Loading: "Loading..."
// - Success: "Loaded X items"
// - Error: "Error: [message]"
// Include exhaustiveness checking!

// 🐨 Create discriminated union for payment methods:
// type CreditCard = { type: 'credit_card'; last4: string; expiry: string }
// type PayPal = { type: 'paypal'; email: string }
// type BankTransfer = { type: 'bank'; accountNumber: string }
// type PaymentMethod = CreditCard | PayPal | BankTransfer

// 🐨 Create a function `describePayment` that describes each method

// 🐨 When you're done, uncomment this:
// const card: CreditCard = { type: 'credit_card', last4: '4242', expiry: '12/25' }
// const paypal: PayPal = { type: 'paypal', email: 'user@example.com' }
// const bank: BankTransfer = { type: 'bank', accountNumber: '123456789' }
// const successEmpty: SuccessState = { status: 'success', data: [] }
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		renderState: [
// 			renderState({ status: 'loading' }),
// 			renderState({ status: 'success', data: ['a', 'b', 'c'] }),
// 			renderState(successEmpty),
// 			renderState({ status: 'error', error: 'Network failed' }),
// 		],
// 		describePayment: [
// 			describePayment(card),
// 			describePayment(paypal),
// 			describePayment(bank),
// 		],
// 		apiStateStatuses: ['loading', 'success', 'error'],
// 	}),
// )
