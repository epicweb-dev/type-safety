// Order Management System
// Using string enums for status values

enum OrderStatus {
	Pending = 'pending',
	Processing = 'processing',
	Shipped = 'shipped',
	Delivered = 'delivered',
}

const order = {
	id: 'ORD-001',
	status: OrderStatus.Pending,
	customerName: 'Alice Johnson',
}

function getStatusMessage(status: OrderStatus) {
	switch (status) {
		case OrderStatus.Pending:
			return 'Your order is pending confirmation'
		case OrderStatus.Processing:
			return 'Your order is being processed'
		case OrderStatus.Shipped:
			return 'Your order has been shipped!'
		case OrderStatus.Delivered:
			return 'Your order has been delivered'
	}
}

console.log(order)
console.log(getStatusMessage(order.status))

const initialStatus = order.status
// Update status and check again
order.status = OrderStatus.Shipped
console.log(getStatusMessage(order.status))

export { OrderStatus, order, getStatusMessage }
