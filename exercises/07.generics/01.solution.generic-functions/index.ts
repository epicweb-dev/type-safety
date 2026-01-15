// Generic Functions

function identity<T>(value: T): T {
	return value
}

function first<T>(arr: Array<T>): T | undefined {
	return arr[0]
}

function last<T>(arr: Array<T>): T | undefined {
	return arr[arr.length - 1]
}

function reverse<T>(arr: Array<T>): Array<T> {
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

console.log(
	'Results:',
	JSON.stringify({
		identity: [identity('hello'), identity(42), identity(true), identity(null)],
		first: [first([1, 2, 3]), first(['a', 'b', 'c']), first([true, false])],
		firstEmptyIsUndefined: first([]) === undefined,
		last: [last([1, 2, 3]), last(['a', 'b', 'c']), last([true, false])],
		lastEmptyIsUndefined: last([]) === undefined,
		reverse: [
			reverse([1, 2, 3]),
			reverse(['a', 'b', 'c']),
			reverse([true, false]),
			reverse([]),
			reverse([1]),
			reverse(['a']),
		],
		original: [1, 2, 3],
		reversed: reverse([1, 2, 3]),
	}),
)
