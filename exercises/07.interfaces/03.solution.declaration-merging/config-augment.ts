// Declaration merging works across modules! Use declare global to augment
// the Config interface declared in index.ts
declare global {
	interface Config {
		theme: 'light' | 'dark'
		maxConnections: number
	}
}
