// Discriminated Unions Pattern

export type LoadingState = { status: 'loading' }
export type SuccessState = { status: 'success'; data: Array<string> }
export type ErrorState = { status: 'error'; error: string }
export type ApiState = LoadingState | SuccessState | ErrorState

export function renderState(state: ApiState): string {
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

export type CreditCard = { type: 'credit_card'; last4: string; expiry: string }
export type PayPal = { type: 'paypal'; email: string }
export type BankTransfer = { type: 'bank'; accountNumber: string }
export type PaymentMethod = CreditCard | PayPal | BankTransfer

export function describePayment(method: PaymentMethod): string {
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

export {}
