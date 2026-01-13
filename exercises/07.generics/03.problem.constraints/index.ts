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

export {}
