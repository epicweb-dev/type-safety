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
	expect(isAdmin(admin), '🚨 isAdmin should return true for admin users - check your role comparison logic').toBe(true)
	expect(isAdmin(regularUser), '🚨 isAdmin should return false for regular users - check your role comparison logic').toBe(false)
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
	expect(getProductSummary(productWithoutDesc), '🚨 getProductSummary should handle products without description - check your optional property handling').toBe('Widget - $29.99: No description')
	expect(getProductSummary(productWithDesc), '🚨 getProductSummary should include description when present - check your optional property handling').toBe('Gadget - $49.99: A fancy gadget')
})

await testStep('User interface should enforce correct structure', async () => {
	const user: User = {
		id: '1',
		name: 'Test User',
		email: 'test@example.com',
		role: 'user',
	}
	expect(user.role, '🚨 user.role should be "user" - verify your User interface includes role property').toBe('user')
})

await testStep('Product interface should allow optional description', async () => {
	const product1: Product = { id: 'p1', name: 'Product', price: 10 }
	const product2: Product = {
		id: 'p2',
		name: 'Product',
		price: 10,
		description: 'Has description',
	}
	expect(product1.description, '🚨 product1.description should be undefined when not provided - verify description is optional in Product interface').toBeUndefined()
	expect(product2.description, '🚨 product2.description should be "Has description" when provided - verify description is optional in Product interface').toBe('Has description')
})
