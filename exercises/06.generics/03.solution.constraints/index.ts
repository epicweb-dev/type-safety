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

export { getId, getName, getProperty, merge }
