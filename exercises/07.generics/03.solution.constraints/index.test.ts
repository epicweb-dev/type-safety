import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	getId,
	getName,
	getProperty,
	merge,
	type User,
	type Product} from './index.ts'

await testStep(
	'getId should work with objects that have id property',
	async () => {
		const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
		const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

		expect(
			getId(user),
			'🚨 getId should work with User objects - ensure your generic constraint includes id property',
		).toBe('1')
		expect(
			getId(product),
			'🚨 getId should work with Product objects - ensure your generic constraint includes id property',
		).toBe('p1')
	},
)

await testStep(
	'getName should work with objects that have name property',
	async () => {
		const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
		const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

		expect(
			getName(user),
			'🚨 getName should work with User objects - ensure your generic constraint includes name property',
		).toBe('Alice')
		expect(
			getName(product),
			'🚨 getName should work with Product objects - ensure your generic constraint includes name property',
		).toBe('Widget')
	},
)

await testStep('getProperty should access properties safely', async () => {
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }

	expect(
		getProperty(user, 'id'),
		'🚨 getProperty should access id property - check your generic keyof constraint',
	).toBe('1')
	expect(
		getProperty(user, 'name'),
		'🚨 getProperty should access name property - check your generic keyof constraint',
	).toBe('Alice')
	expect(
		getProperty(user, 'email'),
		'🚨 getProperty should access email property - check your generic keyof constraint',
	).toBe('alice@example.com')
	expect(
		getProperty(product, 'id'),
		'🚨 getProperty should access id property - check your generic keyof constraint',
	).toBe('p1')
	expect(
		getProperty(product, 'name'),
		'🚨 getProperty should access name property - check your generic keyof constraint',
	).toBe('Widget')
	expect(
		getProperty(product, 'price'),
		'🚨 getProperty should access price property - check your generic keyof constraint',
	).toBe(9.99)
})

await testStep('merge should combine two objects', async () => {
	const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 })
	expect(
		merged.a,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	).toBe(1)
	expect(
		merged.b,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	).toBe(2)
	expect(
		merged.c,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	).toBe(3)
	expect(
		merged.d,
		'🚨 merge should combine properties from both objects - check your generic intersection type',
	).toBe(4)
})

await testStep(
	'merge should override properties from first object',
	async () => {
		const merged = merge({ a: 1, b: 2 }, { b: 3, c: 4 })
		expect(
			merged.a,
			'🚨 merge should preserve properties from first object - check your merge implementation',
		).toBe(1)
		expect(
			merged.b,
			'🚨 merge should override properties from second object - check your merge implementation',
		).toBe(3) // Overridden by second object
		expect(
			merged.c,
			'🚨 merge should add properties from second object - check your merge implementation',
		).toBe(4)
	},
)

await testStep('merge should work with different object types', async () => {
	const merged = merge({ name: 'Alice' }, { age: 30 })
	expect(
		merged.name,
		'🚨 merge should work with different object types - check your generic type handling',
	).toBe('Alice')
	expect(
		merged.age,
		'🚨 merge should work with different object types - check your generic type handling',
	).toBe(30)
})

await testStep('getProperty should have correct return types', async () => {
	const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
	const id = getProperty(user, 'id')
	const name = getProperty(user, 'name')
	const email = getProperty(user, 'email')

	expect(
		typeof id,
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	).toBe('string')
	expect(
		typeof name,
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	).toBe('string')
	expect(
		typeof email,
		'🚨 getProperty should preserve return types - verify your generic keyof constraint',
	).toBe('string')
})

await testStep('merge should preserve type information', async () => {
	const obj1 = { a: 1, b: 'test' }
	const obj2 = { c: true, d: 42 }
	const merged = merge(obj1, obj2)

	expect(
		typeof merged.a,
		'🚨 merge should preserve type information - verify your generic intersection type',
	).toBe('number')
	expect(
		typeof merged.b,
		'🚨 merge should preserve type information - verify your generic intersection type',
	).toBe('string')
	expect(
		typeof merged.c,
		'🚨 merge should preserve type information - verify your generic intersection type',
	).toBe('boolean')
	expect(
		typeof merged.d,
		'🚨 merge should preserve type information - verify your generic intersection type',
	).toBe('number')
})
