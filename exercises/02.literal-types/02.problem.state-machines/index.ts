// State Machines with Literal Types

// 🐨 Create a type `OrderState` with states:
// 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

// 🐨 Create a function `advanceOrder` that takes the current state
// and returns the next state:
// pending → processing → shipped → delivered
// If already delivered or cancelled, return the same state

// 🐨 Create a type `PlayerState` for a media player:
// 'stopped' | 'playing' | 'paused'

// 🐨 Create a function `playerAction` that takes current state
// and an action ('play' | 'pause' | 'stop')
// Return the new state based on the action

// Test order state machine
// let order: OrderState = 'pending'
// console.log(order)
// order = advanceOrder(order)
// console.log(order)

// Test player state machine
// let player: PlayerState = 'stopped'
// player = playerAction(player, 'play')
// console.log(player)

// 🐨 Export your functions and state arrays so we can verify your work
// 💰 export { advanceOrder, playerAction, orderStates, playerStates }
