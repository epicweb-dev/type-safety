// State Machines with Literal Types

// 🐨 Create an array `orderStates` with states:
// 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
// 🐨 Create a type `OrderState` from that array

// 🐨 Create a function `advanceOrder` that takes the current state
// and returns the next state:
// pending → processing → shipped → delivered
// If already delivered or cancelled, return the same state

// 🐨 Create an array `playerStates` for a media player:
// 'stopped' | 'playing' | 'paused'
// 🐨 Create a type `PlayerState` from that array

// 🐨 Create an array `playerActions` for actions:
// 'play' | 'pause' | 'stop'

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

// console.log(orderStates)
// console.log(playerStates)

// 🐨 Export your functions and state arrays so we can verify your work
// 💰 Export the functions and state arrays you created
// export { advanceOrder, playerAction, orderStates, playerStates }
