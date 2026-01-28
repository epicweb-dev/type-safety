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

export { renderState, describePayment }
