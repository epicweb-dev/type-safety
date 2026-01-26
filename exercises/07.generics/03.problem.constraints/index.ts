// Generic Constraints

// 🐨 Create a function `getId` that:
// - Takes any object with an `id: string` property
// - Returns the id
// 💰 Constrain T so it always has an id string

// 🐨 Create a function `getName` that:
// - Takes any object with a `name: string` property
// - Returns the name

// 🐨 Create a function `getProperty` that:
// - Takes an object T and a key K (where K is a key of T)
// - Returns the value at that key with correct type
// 💰 Use a key constraint so the return type matches the property

// 🐨 Create a function `merge` that:
// - Takes two objects of types T and U (both must be objects)
// - Returns a merged object of type T & U
// 💰 Constrain both types to objects before merging

// Test types
type User = { id: string; name: string; email: string }
type Product = { id: string; name: string; price: number }

// Test
// const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' }
// console.log(getId(user))                    // '1'
// console.log(getName(user))                  // 'Alice'
// console.log(getProperty(user, 'email'))     // 'alice@example.com'
// const merged = merge({ a: 1 }, { b: 2 })    // { a: 1, b: 2 }

// 🐨 Export your functions so we can verify your work
// 💰 Export the functions you created
