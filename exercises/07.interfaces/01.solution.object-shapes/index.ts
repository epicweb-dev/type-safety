// Defining Object Shapes with Interfaces

interface Product {
	id: string
	name: string
	price: number
	status: 'active' | 'inactive' | 'discontinued'
	description?: string
}

function getProductSummary(product: Product) {
	const desc = product.description ?? 'No description'
	return `${product.name} - $${product.price}: ${desc}`
}

const product: Product = {
	id: 'p1',
	name: 'Widget',
	price: 29.99,
	status: 'active',
}
const productWithDesc: Product = {
	id: 'p2',
	name: 'Gadget',
	price: 49.99,
	status: 'inactive',
	description: 'Has description',
}

export { getProductSummary, product, productWithDesc }
