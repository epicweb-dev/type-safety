// Understanding any vs unknown

// Example of `any` - no type checking (dangerous!)
function dangerousProcess(value: any): string {
	return value.toUpperCase() // Will crash if not a string!
}

dangerousProcess('example')

// Safe version using `unknown`
function safeProcess(value: unknown): string {
	if (typeof value === 'string') {
		return value.toUpperCase()
	}
	if (typeof value === 'number') {
		return value.toFixed(2)
	}
	if (typeof value === 'boolean') {
		return value ? 'true' : 'false'
	}
	return String(value)
}

export { safeProcess }
