// Declaration Merging

interface Config {
	appName: string
}

// 🐨 Use declaration merging to add a `theme` property to Config:
// - theme: 'light' | 'dark'
// 💰 Just declare the Config interface again with the new property!

// 🐨 Use declaration merging to add a `maxConnections` property to Config:
// - maxConnections: number

// 🐨 Create a `config` object that satisfies the merged Config interface
// (it should have appName, theme, and maxConnections)

// 🐨 Create a `getTheme` function that takes a Config and returns its theme

// 🐨 Export `config` and `getTheme`. Tests import these by name.
// export { config, getTheme }
