// Generic Functions

function identity<Value>(value: Value): Value {
	return value
}

function last<Item>(arr: Array<Item>): Item | undefined {
	return arr[arr.length - 1]
}

// Test your functions
console.log(identity('hello')) // 'hello'
console.log(identity(42)) // 42
console.log(last([1, 2, 3])) // 3
console.log(last(['a', 'b'])) // 'b'
console.log(last<number>([])) // undefined

export { identity, last }
