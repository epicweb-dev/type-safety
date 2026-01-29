// Migrating from Enums to Union Types
// Start with an enum, migrate to unions

// Enum approach
enum LogLevel {
	Debug = 'debug',
	Info = 'info',
	Warn = 'warn',
	Error = 'error',
}

function logWithEnum(level: LogLevel, message: string): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

// 🐨 Migrate the function above to use union types instead of the enum
// Replace the LogLevel enum parameter with an inline union type
// The function should accept: 'debug' | 'info' | 'warn' | 'error'
// Name the new function `logWithUnion`

// 🐨 Export `logWithUnion`. Tests import this by name and check log output.
// export { logWithUnion }
