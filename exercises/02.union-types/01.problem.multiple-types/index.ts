// Working with Union Types

// 🐨 Create a type `ID` that can be string or number

// 🐨 Create a function `formatId` that takes an ID and returns a string
// If it's a number, prefix with '#'
// If it's a string, return as-is

// 🐨 Create a type `Result` that can be string (success) or Error (failure)

// 🐨 Create a function `processResult` that takes a Result
// If it's a string, return "Success: [value]"
// If it's an Error, return "Error: [message]"
// 💰 Check the type before accessing properties

// console.log(formatId(123))      // "#123"
// console.log(formatId('abc'))    // "abc"
// console.log(processResult('Done!'))          // "Success: Done!"
// console.log(processResult(new Error('Oops'))) // "Error: Oops"

// 🐨 Export `formatId` and `processResult`. Tests import these by name and
// check the formatted output for both union cases.
// export { formatId, processResult }
