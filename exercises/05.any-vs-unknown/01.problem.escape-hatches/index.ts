// Understanding any vs unknown

// Example of `any` - no type checking
function dangerousProcess(value: any): string {
	// These all compile but might crash at runtime!
	return value.toUpperCase()
}

dangerousProcess('example')

// 🐨 Rewrite this function using `unknown` instead of `any`.
// Handle string, number, and at least one other type safely.

// 🐨 Export `safeProcess`. Tests import it by name and check runtime behavior.
// export { safeProcess }
