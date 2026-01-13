import { testStep, expect } from '@epic-web/workshop-utils/test'
import { greet, formatProduct, type User, type Product } from './index.ts'

await testStep('greet function should work correctly', async () => {
	const user: User = {
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(
		greet(user),
		'🚨 greet function should return "Hello, Alice!" - check your function implementation',
	).toBe('Hello, Alice!')
})

await testStep(
	'formatProduct function should format products correctly',
	async () => {
		const inStockProduct: Product = {
			id: 'p1',
			name: 'Laptop',
			price: 999.99,
			inStock: true,
		}
		const outOfStockProduct: Product = {
			id: 'p2',
			name: 'Mouse',
			price: 29.99,
			inStock: false,
		}
		expect(
			formatProduct(inStockProduct),
			'🚨 formatProduct should format in-stock products correctly - check your formatting logic',
		).toBe('Laptop - $999.99 (In Stock)')
		expect(
			formatProduct(outOfStockProduct),
			'🚨 formatProduct should format out-of-stock products correctly - check your conditional logic',
		).toBe('Mouse - $29.99 (Out of Stock)')
	},
)

await testStep('User type should enforce correct structure', async () => {
	const user: User = {
		id: '1',
		name: 'Test User',
		email: 'test@example.com',
	}
	expect(
		user.id,
		'🚨 user.id should be "1" - verify your User type definition',
	).toBe('1')
	expect(
		user.name,
		'🚨 user.name should be "Test User" - verify your User type definition',
	).toBe('Test User')
	expect(
		user.email,
		'🚨 user.email should be "test@example.com" - verify your User type definition',
	).toBe('test@example.com')
})

await testStep('Product type should enforce correct structure', async () => {
	const product: Product = {
		id: 'p1',
		name: 'Test Product',
		price: 49.99,
		inStock: true,
	}
	expect(
		product.id,
		'🚨 product.id should be "p1" - verify your Product type definition',
	).toBe('p1')
	expect(
		product.name,
		'🚨 product.name should be "Test Product" - verify your Product type definition',
	).toBe('Test Product')
	expect(
		product.price,
		'🚨 product.price should be 49.99 - verify your Product type definition',
	).toBe(49.99)
	expect(
		product.inStock,
		'🚨 product.inStock should be true - verify your Product type definition',
	).toBe(true)
})
