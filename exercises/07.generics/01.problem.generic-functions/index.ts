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

// 🐨 Export your functions so we can verify your work
// 💰 export { identity, first, last, reverse }
