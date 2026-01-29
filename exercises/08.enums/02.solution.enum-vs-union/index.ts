// Migrating from Enums to Union Types
// Migrated to union types - the preferred approach

// Union type approach - migrated from enum
// Inline union type replaces the enum parameter
function logWithUnion(
	level: 'debug' | 'info' | 'warn' | 'error',
	message: string,
): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

// Using union - just use strings directly (no enum import needed!)
logWithUnion('info', 'Server started')
logWithUnion('error', 'Connection failed')

// Type safety is preserved:
// logWithUnion('unknown')  // ❌ Error

export { logWithUnion }
