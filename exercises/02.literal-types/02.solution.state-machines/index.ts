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

console.log(
	'Results JSON:',
	JSON.stringify({
		orderTransitions: [
			advanceOrder('pending'),
			advanceOrder('processing'),
			advanceOrder('shipped'),
			advanceOrder('delivered'),
			advanceOrder('cancelled'),
		],
		playerTransitions: [
			playerAction('stopped', 'play'),
			playerAction('paused', 'play'),
			playerAction('playing', 'play'),
			playerAction('playing', 'pause'),
			playerAction('stopped', 'pause'),
			playerAction('paused', 'pause'),
			playerAction('stopped', 'stop'),
			playerAction('playing', 'stop'),
			playerAction('paused', 'stop'),
		],
		orderStates,
		playerStates,
	}),
)

// 🦉 Note: State machine functions keep explicit return types because they
// constrain the implementation to return only valid states. This catches bugs
// at compile time if you accidentally return an invalid state.
//
// 🦉 Traditional approach (you may see this in other codebases):
// export type OrderState = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
// export type PlayerState = 'stopped' | 'playing' | 'paused'
// export type PlayerAction = 'play' | 'pause' | 'stop'
