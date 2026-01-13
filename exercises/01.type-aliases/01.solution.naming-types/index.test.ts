import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { greet, formatProduct, type User, type Product } from './index.ts'

await testStep('greet function should work correctly', async () => {
	const user: User = {
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(greet(user)).toBe('Hello, Alice!')
})

await testStep('formatProduct function should format products correctly', async () => {
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
	expect(formatProduct(inStockProduct)).toBe('Laptop - $999.99 (In Stock)')
	expect(formatProduct(outOfStockProduct)).toBe('Mouse - $29.99 (Out of Stock)')
})

await testStep('User type should enforce correct structure', async () => {
	const user: User = {
		id: '1',
		name: 'Test User',
		email: 'test@example.com',
	}
	expect(user.id).toBe('1')
	expect(user.name).toBe('Test User')
	expect(user.email).toBe('test@example.com')
})

await testStep('Product type should enforce correct structure', async () => {
	const product: Product = {
		id: 'p1',
		name: 'Test Product',
		price: 49.99,
		inStock: true,
	}
	expect(product.id).toBe('p1')
	expect(product.name).toBe('Test Product')
	expect(product.price).toBe(49.99)
	expect(product.inStock).toBe(true)
})
