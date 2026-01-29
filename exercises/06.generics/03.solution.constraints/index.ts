// Generic Constraints

function getId<ItemWithId extends { id: string }>(obj: ItemWithId): string {
	return obj.id
}

function getProperty<ObjectType, Key extends keyof ObjectType>(
	obj: ObjectType,
	key: Key,
): ObjectType[Key] {
	return obj[key]
}

function merge<Left extends object, Right extends object>(
	a: Left,
	b: Right,
): Left & Right {
	return { ...a, ...b }
}

export { getId, getProperty, merge }
