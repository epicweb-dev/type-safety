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

export { identity, first, last, reverse }
