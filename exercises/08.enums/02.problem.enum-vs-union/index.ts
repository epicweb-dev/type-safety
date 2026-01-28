// Comparing Enums and Union Types
// Same problem, different solutions

// 🐨 Create an enum for LogLevel
// enum LogLevel { Debug = 'debug', Info = 'info', Warn = 'warn', Error = 'error' }

// 🐨 Create a function using the enum
// function logWithEnum(level: LogLevel, message: string): void

// 🐨 Create the same function using inline union types (no type alias needed!)
// function logWithUnion(level: 'debug' | 'info' | 'warn' | 'error', message: string): void

// Compare usage:
// logWithEnum(LogLevel.Info, 'Server started')
// logWithUnion('info', 'Server started')

// console.log(LogLevel.Info)

// Which do you prefer?

// 🐨 Export your enum and functions so we can verify your work
// export { LogLevel, logWithEnum, logWithUnion }
