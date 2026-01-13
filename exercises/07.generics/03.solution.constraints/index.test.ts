import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { getId, getName, getProperty, merge, type User, type Product } from './index.ts'

await testStep('getId should work with objects that have id property', async () => {
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

	expect(getId(user)).toBe('1')
	expect(getId(product)).toBe('p1')
})

await testStep('getName should work with objects that have name property', async () => {
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

	expect(getName(user)).toBe('Alice')
	expect(getName(product)).toBe('Widget')
})

await testStep('getProperty should access properties safely', async () => {
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

	expect(getProperty(user, 'id')).toBe('1')
	expect(getProperty(user, 'name')).toBe('Alice')
	expect(getProperty(user, 'email')).toBe('alice@example.com')
	expect(getProperty(product, 'id')).toBe('p1')
	expect(getProperty(product, 'name')).toBe('Widget')
	expect(getProperty(product, 'price')).toBe(9.99)
})

await testStep('merge should combine two objects', async () => {
	const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 })
	expect(merged.a).toBe(1)
	expect(merged.b).toBe(2)
	expect(merged.c).toBe(3)
	expect(merged.d).toBe(4)
})

await testStep('merge should override properties from first object', async () => {
	const merged = merge({ a: 1, b: 2 }, { b: 3, c: 4 })
	expect(merged.a).toBe(1)
	expect(merged.b).toBe(3) // Overridden by second object
	expect(merged.c).toBe(4)
})

await testStep('merge should work with different object types', async () => {
	const merged = merge({ name: 'Alice' }, { age: 30 })
	expect(merged.name).toBe('Alice')
	expect(merged.age).toBe(30)
})

await testStep('getProperty should have correct return types', async () => {
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const id = getProperty(user, 'id')
	const name = getProperty(user, 'name')
	const email = getProperty(user, 'email')

	expect(typeof id).toBe('string')
	expect(typeof name).toBe('string')
	expect(typeof email).toBe('string')
})

await testStep('merge should preserve type information', async () => {
	const obj1 = { a: 1, b: 'test' }
	const obj2 = { c: true, d: 42 }
	const merged = merge(obj1, obj2)

	expect(typeof merged.a).toBe('number')
	expect(typeof merged.b).toBe('string')
	expect(typeof merged.c).toBe('boolean')
	expect(typeof merged.d).toBe('number')
})
