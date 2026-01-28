// Discriminated Unions Pattern

// 🐨 Create discriminated union types for API response states:
// - Loading: status "loading"
// - Success: status "success" with data: Array<string>
// - Error: status "error" with error: string
// 💰 Replace the placeholder ApiState with a real discriminated union

type ApiState = {
	status: string
	data: Array<string>
	error: string
}

// const loadingState: ApiState = { status: 'loading' }
// console.log(renderState(loadingState))
// const successState: ApiState = { status: 'success', data: ['a', 'b'] }
// console.log(renderState(successState))
// const errorState: ApiState = { status: 'error', error: 'Network error' }
// console.log(renderState(errorState))

function renderState(state: ApiState): string {
	switch (state.status) {
		case 'loading':
			return 'Loading...'
		case 'success':
			return `Loaded ${state.data.length} items`
		case 'error':
			return `Error: ${state.error}`
		default: {
			// @ts-expect-error - 💣 remove this comment when ApiState is discriminated
			const _exhaustive: never = state
			return _exhaustive
		}
	}
}

// 🐨 Create a discriminated union for payment methods:
// - Credit card: type "credit_card" with last4 and expiry strings
// - PayPal: type "paypal" with email string
// - Bank transfer: type "bank" with accountNumber string
// 💰 Replace the placeholder PaymentMethod with a real discriminated union

type PaymentMethod = {
	type: string
	last4: string
	expiry: string
	email: string
	accountNumber: string
}

// const card: PaymentMethod = { type: 'credit_card', last4: '1234', expiry: '12/25' }
// console.log(describePayment(card))
// const paypal: PaymentMethod = { type: 'paypal', email: 'me@example.com' }
// console.log(describePayment(paypal))
// const bank: PaymentMethod = { type: 'bank', accountNumber: '000123' }
// console.log(describePayment(bank))

function describePayment(method: PaymentMethod): string {
	switch (method.type) {
		case 'credit_card':
			return `Card ending in ${method.last4} (exp: ${method.expiry})`
		case 'paypal':
			return `PayPal: ${method.email}`
		case 'bank':
			return `Bank account: ${method.accountNumber}`
		default: {
			// @ts-expect-error - 💣 remove this comment when PaymentMethod is discriminated
			const _exhaustive: never = method
			return _exhaustive
		}
	}
}

// 🐨 Export `renderState` and `describePayment`. Tests import these by name and
// check the output for each union variant.
// export { renderState, describePayment }
