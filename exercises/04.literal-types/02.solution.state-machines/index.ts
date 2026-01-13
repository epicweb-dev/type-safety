// State Machines with Literal Types

export type OrderState =
	| 'pending'
	| 'processing'
	| 'shipped'
	| 'delivered'
	| 'cancelled'

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

export type PlayerState = 'stopped' | 'playing' | 'paused'
export type PlayerAction = 'play' | 'pause' | 'stop'

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

export {}
