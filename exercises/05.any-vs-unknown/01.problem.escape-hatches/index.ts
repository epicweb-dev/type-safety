// Understanding any vs unknown

// Example of `any` - no type checking
function dangerousProcess(value: any): string {
	// These all compile but might crash at runtime!
	return value.toUpperCase()
}

// 🐨 Rewrite this function using `unknown` instead of `any`.
// Handle string, number, and at least one other type safely.

// 🐨 Create a function `parseJsonSafely` that:
// - Takes a JSON string
// - Parses it (JSON.parse returns `any` by default)
// - Returns unknown (forcing callers to narrow)
// function parseJsonSafely(json: string): unknown

// 🐨 Define a `User` type with `name` and `email` strings.
// 🐨 Create an `isUser` type guard that checks an unknown value.
// 🐨 Create `parseUser` that uses `parseJsonSafely` and `isUser` to return
// `User | null`.
// 🐨 Export `safeProcess`, `parseJsonSafely`, `isUser`, and `parseUser`. Tests
// import these by name and check the runtime behavior.
// export { safeProcess, parseJsonSafely, isUser, parseUser }
