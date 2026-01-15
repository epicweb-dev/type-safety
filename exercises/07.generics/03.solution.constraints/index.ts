// Generic Constraints

function getId<T extends { id: string }>(obj: T): string {
	return obj.id
}

function getName<T extends { name: string }>(obj: T): string {
	return obj.name
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key]
}

function merge<T extends object, U extends object>(a: T, b: U): T & U {
	return { ...a, ...b }
}

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

const mergedOverride = merge({ a: 1, b: 2 }, { b: 3, c: 4 })
const mergedDifferent = merge({ name: 'Alice' }, { age: 30 })
const mergedTypes = merge({ a: 1, b: 'test' }, { c: true, d: 42 })

console.log(
	'Results JSON:',
	JSON.stringify({
		getId: [getId(user), getId(product)],
		getName: [getName(user), getName(product)],
		getProperty: [
			getProperty(user, 'id'),
			getProperty(user, 'name'),
			getProperty(user, 'email'),
			getProperty(product, 'id'),
			getProperty(product, 'name'),
			getProperty(product, 'price'),
		],
		merge: [merged, mergedOverride, mergedDifferent, mergedTypes],
		propertyTypes: {
			id: typeof getProperty(user, 'id'),
			name: typeof getProperty(user, 'name'),
			email: typeof getProperty(user, 'email'),
			mergeA: typeof mergedTypes.a,
			mergeB: typeof mergedTypes.b,
			mergeC: typeof mergedTypes.c,
			mergeD: typeof mergedTypes.d,
		},
	}),
)
