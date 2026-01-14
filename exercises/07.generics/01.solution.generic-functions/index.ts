// Generic Functions

export function identity<T>(value: T): T {
	return value
}

export function first<T>(arr: Array<T>): T | undefined {
	return arr[0]
}

export function last<T>(arr: Array<T>): T | undefined {
	return arr[arr.length - 1]
}

export function reverse<T>(arr: Array<T>): Array<T> {
	return [...arr].reverse()
}

// Test your functions
console.log(identity('hello')) // 'hello'
console.log(identity(42)) // 42
console.log(first([1, 2, 3])) // 1
console.log(first(['a', 'b'])) // 'a'
console.log(last([1, 2, 3])) // 3
console.log(reverse([1, 2, 3])) // [3, 2, 1]

// TypeScript knows the types!
const num = first([1, 2, 3]) // number | undefined
const str = first(['a', 'b']) // string | undefined
const reversed = reverse([1, 2, 3]) // Array<number>
