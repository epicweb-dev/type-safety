import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'
import { isAdmin, getProductSummary, type User, type Product } from './index.ts'

await testStep('isAdmin should correctly identify admin users', async () => {
	const admin: User = {
		id: '1',
		name: 'Admin',
		email: 'admin@example.com',
		role: 'admin',
	}
	const regularUser: User = {
		id: '2',
		name: 'User',
		email: 'user@example.com',
		role: 'user',
	}
	expect(isAdmin(admin)).toBe(true)
	expect(isAdmin(regularUser)).toBe(false)
})

await testStep('getProductSummary should format products correctly', async () => {
	const productWithoutDesc: Product = {
		id: 'p1',
		name: 'Widget',
		price: 29.99,
	}
	const productWithDesc: Product = {
		id: 'p2',
		name: 'Gadget',
		price: 49.99,
		description: 'A fancy gadget',
	}
	expect(getProductSummary(productWithoutDesc)).toBe('Widget - $29.99: No description')
	expect(getProductSummary(productWithDesc)).toBe('Gadget - $49.99: A fancy gadget')
})

await testStep('User interface should enforce correct structure', async () => {
	const user: User = {
		id: '1',
		name: 'Test User',
		email: 'test@example.com',
		role: 'user',
	}
	expect(user.role).toBe('user')
})

await testStep('Product interface should allow optional description', async () => {
	const product1: Product = { id: 'p1', name: 'Product', price: 10 }
	const product2: Product = {
		id: 'p2',
		name: 'Product',
		price: 10,
		description: 'Has description',
	}
	expect(product1.description).toBeUndefined()
	expect(product2.description).toBe('Has description')
})
