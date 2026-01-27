import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('OrderStatus is exported', () => {
	assert.ok(
		'OrderStatus' in solution,
		'🚨 Make sure you export "OrderStatus" - add: export { OrderStatus, ... }',
	)
})

await test('order is exported', () => {
	assert.ok(
		'order' in solution,
		'🚨 Make sure you export "order" - add: export { order, ... }',
	)
})

await test('getStatusMessage is exported', () => {
	assert.ok(
		'getStatusMessage' in solution,
		'🚨 Make sure you export "getStatusMessage" - add: export { getStatusMessage, ... }',
	)
})

await test('OrderStatus enum should have correct values', () => {
	assert.strictEqual(
		solution.OrderStatus.Pending,
		'pending',
		'🚨 OrderStatus.Pending should be "pending" - string enums use the assigned string value',
	)
	assert.strictEqual(
		solution.OrderStatus.Processing,
		'processing',
		'🚨 OrderStatus.Processing should be "processing" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		solution.OrderStatus.Shipped,
		'shipped',
		'🚨 OrderStatus.Shipped should be "shipped" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		solution.OrderStatus.Delivered,
		'delivered',
		'🚨 OrderStatus.Delivered should be "delivered" - check that all enum values are correctly assigned',
	)
})

await test('Order object should use OrderStatus enum correctly', () => {
	const validStatuses = [
		solution.OrderStatus.Pending,
		solution.OrderStatus.Processing,
		solution.OrderStatus.Shipped,
		solution.OrderStatus.Delivered,
	]
	assert.ok(
		validStatuses.includes(solution.order.status),
		'🚨 order.status should be one of the OrderStatus enum values',
	)
	assert.ok(
		typeof solution.order.id === 'string' && solution.order.id.length > 0,
		'🚨 order.id should be a non-empty string',
	)
	assert.ok(
		typeof solution.order.customerName === 'string' &&
			solution.order.customerName.length > 0,
		'🚨 order.customerName should be a non-empty string',
	)
})

await test('getStatusMessage should return a message for each status', () => {
	// Each status should return a non-empty string message
	const pendingMsg = solution.getStatusMessage(solution.OrderStatus.Pending)
	assert.ok(
		typeof pendingMsg === 'string' && pendingMsg.length > 0,
		'🚨 getStatusMessage(OrderStatus.Pending) should return a message string',
	)

	const processingMsg = solution.getStatusMessage(
		solution.OrderStatus.Processing,
	)
	assert.ok(
		typeof processingMsg === 'string' && processingMsg.length > 0,
		'🚨 getStatusMessage(OrderStatus.Processing) should return a message string',
	)

	const shippedMsg = solution.getStatusMessage(solution.OrderStatus.Shipped)
	assert.ok(
		typeof shippedMsg === 'string' && shippedMsg.length > 0,
		'🚨 getStatusMessage(OrderStatus.Shipped) should return a message string',
	)

	const deliveredMsg = solution.getStatusMessage(solution.OrderStatus.Delivered)
	assert.ok(
		typeof deliveredMsg === 'string' && deliveredMsg.length > 0,
		'🚨 getStatusMessage(OrderStatus.Delivered) should return a message string',
	)

	// Messages should be different for different statuses
	const messages = new Set([
		pendingMsg,
		processingMsg,
		shippedMsg,
		deliveredMsg,
	])
	assert.ok(
		messages.size === 4,
		'🚨 Each status should return a unique message',
	)
})
