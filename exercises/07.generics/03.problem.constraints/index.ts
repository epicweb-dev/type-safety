// Generic Constraints

// 🐨 Create a function `getId` that:
// - Takes any object with an `id: string` property
// - Returns the id
// 💰 Limit T to objects with an id property

// 🐨 Create a function `getName` that:
// - Takes any object with a `name: string` property
// - Returns the name

// 🐨 Create a function `getProperty` that:
// - Takes an object T and a key K (where K is a key of T)
// - Returns the value at that key with correct type
// 💰 Make sure the return type matches the property type

// 🐨 Create a function `merge` that:
// - Takes two objects of types T and U (both must be objects)
// - Returns a merged object of type T & U
// 💰 Both parameters should be objects

// Test types
type User = { id: string; name: string; email: string }
type Product = { id: string; name: string; price: number }

// Test
// const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
// console.log(getId(user))                    // '1'
// console.log(getName(user))                  // 'Alice'
// console.log(getProperty(user, 'email'))     // 'alice@example.com'
// const merged = merge({ a: 1 }, { b: 2 })    // { a: 1, b: 2 }

// console.log(merged)

// 🐨 Export your functions so we can verify your work
// export { getId, getName, getProperty, merge }
