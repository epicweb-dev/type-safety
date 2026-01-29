// Generic Functions

function identity<Value>(value: Value): Value {
	return value
}

function first<Item>(arr: Array<Item>): Item | undefined {
	return arr[0]
}

function last<Item>(arr: Array<Item>): Item | undefined {
	return arr[arr.length - 1]
}

function reverse<Item>(arr: Array<Item>): Array<Item> {
	return [...arr].reverse()
}

export { identity, first, last, reverse }
