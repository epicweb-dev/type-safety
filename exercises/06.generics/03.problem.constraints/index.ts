// Generic Constraints

// 🐨 Create a function `getId` that:
// - Takes any object type with an `id: string` property
// - Returns the id
// 💰 Limit ItemWithId to objects with an id property

// 🐨 Create a function `getName` that:
// - Takes any object type with a `name: string` property
// - Returns the name

// 🐨 Create a function `getProperty` that:
// - Takes an object ObjectType and a key Key (where Key is a key of ObjectType)
// - Returns the value at that key with correct type
// 💰 Make sure the return type matches the property type

// const user = { id: '1', name: 'Alice', email: 'alice@example.com' }
// console.log(getId(user))                    // '1'
// console.log(getName(user))                  // 'Alice'
// console.log(getProperty(user, 'email'))     // 'alice@example.com'

// 🐨 Create a function `merge` that:
// - Takes two objects of types Left and Right (both must be objects)
// - Returns a merged object of type Left & Right
// 💰 Both parameters should be objects

// const merged = merge({ a: 1 }, { b: 2 })    // { a: 1, b: 2 }
// console.log(merged)

// 🐨 Export `getId`, `getName`, `getProperty`, and `merge`. Tests import these
// by name and check inferred types.
// export { getId, getName, getProperty, merge }
