// State Machines with Literal Types

// Value-first approach: derive types from runtime values
const orderStates = [
	'pending',
	'processing',
	'shipped',
	'delivered',
	'cancelled',
] as const
type OrderState = (typeof orderStates)[number]

function advanceOrder(current: OrderState): OrderState {
	switch (current) {
		case 'pending':
			return 'processing'
		case 'processing':
			return 'shipped'
		case 'shipped':
			return 'delivered'
		case 'delivered':
		case 'cancelled':
			return current // Terminal states
	}
}

const playerStates = ['stopped', 'playing', 'paused'] as const
type PlayerState = (typeof playerStates)[number]

const playerActions = ['play', 'pause', 'stop'] as const
type PlayerAction = (typeof playerActions)[number]

function playerAction(current: PlayerState, action: PlayerAction): PlayerState {
	switch (action) {
		case 'play':
			return 'playing'
		case 'pause':
			return current === 'playing' ? 'paused' : current
		case 'stop':
			return 'stopped'
	}
}

export { advanceOrder, playerAction, orderStates, playerStates }

// 🦉 Note: State machine functions keep explicit return types because they
// constrain the implementation to return only valid states. This catches bugs
// at compile time if you accidentally return an invalid state.
//
// 🦉 Traditional approach (you may see this in other codebases):
// export type OrderState = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
// export type PlayerState = 'stopped' | 'playing' | 'paused'
// export type PlayerAction = 'play' | 'pause' | 'stop'
