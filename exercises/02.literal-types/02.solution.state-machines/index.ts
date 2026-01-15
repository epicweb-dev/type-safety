// State Machines with Literal Types

// Value-first approach: derive types from runtime values
const orderStates = [
	'pending',
	'processing',
	'shipped',
	'delivered',
	'cancelled',
] as const
export type OrderState = (typeof orderStates)[number]

export function advanceOrder(current: OrderState): OrderState {
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
export type PlayerState = (typeof playerStates)[number]

const playerActions = ['play', 'pause', 'stop'] as const
export type PlayerAction = (typeof playerActions)[number]

export function playerAction(
	current: PlayerState,
	action: PlayerAction,
): PlayerState {
	switch (action) {
		case 'play':
			return 'playing'
		case 'pause':
			return current === 'playing' ? 'paused' : current
		case 'stop':
			return 'stopped'
	}
}

// Test order state machine
let order: OrderState = 'pending'
console.log('Order:', order)
order = advanceOrder(order)
console.log('Order:', order)
order = advanceOrder(order)
console.log('Order:', order)

// Test player state machine
let player: PlayerState = 'stopped'
console.log('Player:', player)
player = playerAction(player, 'play')
console.log('Player:', player)
player = playerAction(player, 'pause')
console.log('Player:', player)
player = playerAction(player, 'stop')
console.log('Player:', player)

export { orderStates, playerStates, playerActions }

// 🦉 Note: State machine functions keep explicit return types because they
// constrain the implementation to return only valid states. This catches bugs
// at compile time if you accidentally return an invalid state.
//
// 🦉 Traditional approach (you may see this in other codebases):
// export type OrderState = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
// export type PlayerState = 'stopped' | 'playing' | 'paused'
// export type PlayerAction = 'play' | 'pause' | 'stop'
