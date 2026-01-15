// Generic Constraints

// 🐨 Create a function `getId` that:
// - Takes any object with an `id: string` property
// - Returns the id
// 💰 function getId<T extends { id: string }>(obj: T): string

// 🐨 Create a function `getName` that:
// - Takes any object with a `name: string` property
// - Returns the name

// 🐨 Create a function `getProperty` that:
// - Takes an object T and a key K (where K is a key of T)
// - Returns the value at that key with correct type
// 💰 function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]

// 🐨 Create a function `merge` that:
// - Takes two objects of types T and U (both must be objects)
// - Returns a merged object of type T & U
// 💰 function merge<T extends object, U extends object>(a: T, b: U): T & U

// Test types
type User = { id: string; name: string; email: string }
type Product = { id: string; name: string; price: number }

// Test
// const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
// console.log(getId(user))                    // '1'
// console.log(getName(user))                  // 'Alice'
// console.log(getProperty(user, 'email'))     // 'alice@example.com'
// const merged = merge({ a: 1 }, { b: 2 })    // { a: 1, b: 2 }

// 🐨 When you're done, uncomment this:
// const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
// const product: Product = { id: 'p1', name: 'Widget', price: 9.99 }
// const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 })
// const mergedOverride = merge({ a: 1, b: 2 }, { b: 3, c: 4 })
// const mergedDifferent = merge({ name: 'Alice' }, { age: 30 })
// const mergedTypes = merge({ a: 1, b: 'test' }, { c: true, d: 42 })
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		getId: [getId(user), getId(product)],
// 		getName: [getName(user), getName(product)],
// 		getProperty: [
// 			getProperty(user, 'id'),
// 			getProperty(user, 'name'),
// 			getProperty(user, 'email'),
// 			getProperty(product, 'id'),
// 			getProperty(product, 'name'),
// 			getProperty(product, 'price'),
// 		],
// 		merge: [merged, mergedOverride, mergedDifferent, mergedTypes],
// 		propertyTypes: {
// 			id: typeof getProperty(user, 'id'),
// 			name: typeof getProperty(user, 'name'),
// 			email: typeof getProperty(user, 'email'),
// 			mergeA: typeof mergedTypes.a,
// 			mergeB: typeof mergedTypes.b,
// 			mergeC: typeof mergedTypes.c,
// 			mergeD: typeof mergedTypes.d,
// 		},
// 	}),
// )
