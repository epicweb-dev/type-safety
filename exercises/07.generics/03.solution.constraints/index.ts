// Generic Constraints

export function getId<T extends { id: string }>(obj: T): string {
	return obj.id
}

export function getName<T extends { name: string }>(obj: T): string {
	return obj.name
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key]
}

export function merge<T extends object, U extends object>(a: T, b: U): T & U {
	return { ...a, ...b }
}

export type { User, Product }

// Test types
type User = { id: string; name: string; email: string }
type Product = { id: string; name: string; price: number }

const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

// Works with any object that has id/name
console.log(getId(user)) // '1'
console.log(getId(product)) // 'p1'
console.log(getName(user)) // 'Alice'
console.log(getName(product)) // 'Widget'

// Type-safe property access
console.log(getProperty(user, 'email')) // 'alice@example.com'
console.log(getProperty(product, 'price')) // 9.99
// getProperty(user, 'foo')  // ❌ Error: 'foo' not in User

// Merging objects
const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 })
console.log(merged) // { a: 1, b: 2, c: 3, d: 4 }
console.log(merged.a + merged.c) // TypeScript knows these exist!
