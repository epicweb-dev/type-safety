// Generic Functions

// 🐨 Create a generic `identity` function
// It takes a value of type T and returns it
// function identity<T>(value: T): T

// 🐨 Create a generic `first` function
// Takes an array of T, returns T | undefined
// function first<T>(arr: Array<T>): T | undefined

// 🐨 Create a generic `last` function
// Takes an array of T, returns T | undefined
// 💰 Use arr[arr.length - 1]

// 🐨 Create a generic `reverse` function
// Takes an array of T, returns a new reversed array of T
// 💰 Use [...arr].reverse() to avoid mutating

// Test your functions
// console.log(identity('hello'))      // 'hello'
// console.log(identity(42))           // 42
// console.log(first([1, 2, 3]))       // 1
// console.log(first(['a', 'b']))      // 'a'
// console.log(last([1, 2, 3]))        // 3
// console.log(reverse([1, 2, 3]))     // [3, 2, 1]

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		identity: [identity('hello'), identity(42), identity(true), identity(null)],
// 		first: [first([1, 2, 3]), first(['a', 'b', 'c']), first([true, false]), first([])],
// 		last: [last([1, 2, 3]), last(['a', 'b', 'c']), last([true, false]), last([])],
// 		reverse: [
// 			reverse([1, 2, 3]),
// 			reverse(['a', 'b', 'c']),
// 			reverse([true, false]),
// 			reverse([]),
// 			reverse([1]),
// 			reverse(['a']),
// 		],
// 		original: [1, 2, 3],
// 		reversed: reverse([1, 2, 3]),
// 	}),
// )
