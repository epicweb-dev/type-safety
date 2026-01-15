// Discriminated Unions Pattern

type LoadingState = { status: 'loading' }
type SuccessState = { status: 'success'; data: Array<string> }
type ErrorState = { status: 'error'; error: string }
type ApiState = LoadingState | SuccessState | ErrorState

function renderState(state: ApiState): string {
	switch (state.status) {
		case 'loading':
			return 'Loading...'
		case 'success':
			return `Loaded ${state.data.length} items`
		case 'error':
			return `Error: ${state.error}`
		default: {
			const _exhaustive: never = state
			return _exhaustive
		}
	}
}

type CreditCard = { type: 'credit_card'; last4: string; expiry: string }
type PayPal = { type: 'paypal'; email: string }
type BankTransfer = { type: 'bank'; accountNumber: string }
type PaymentMethod = CreditCard | PayPal | BankTransfer

function describePayment(method: PaymentMethod): string {
	switch (method.type) {
		case 'credit_card':
			return `Card ending in ${method.last4} (exp: ${method.expiry})`
		case 'paypal':
			return `PayPal: ${method.email}`
		case 'bank':
			return `Bank account: ${method.accountNumber}`
		default: {
			const _exhaustive: never = method
			return _exhaustive
		}
	}
}

// Test API states
console.log(renderState({ status: 'loading' }))
console.log(renderState({ status: 'success', data: ['a', 'b', 'c'] }))
console.log(renderState({ status: 'error', error: 'Network failed' }))

// Test payment methods
const card: CreditCard = { type: 'credit_card', last4: '4242', expiry: '12/25' }
const paypal: PayPal = { type: 'paypal', email: 'user@example.com' }
console.log(describePayment(card))
console.log(describePayment(paypal))

const bank: BankTransfer = { type: 'bank', accountNumber: '123456789' }
const successEmpty: SuccessState = { status: 'success', data: [] }

console.log(
	'Results:',
	JSON.stringify({
		renderState: [
			renderState({ status: 'loading' }),
			renderState({ status: 'success', data: ['a', 'b', 'c'] }),
			renderState(successEmpty),
			renderState({ status: 'error', error: 'Network failed' }),
		],
		describePayment: [
			describePayment(card),
			describePayment(paypal),
			describePayment(bank),
		],
		apiStateStatuses: ['loading', 'success', 'error'],
	}),
)
