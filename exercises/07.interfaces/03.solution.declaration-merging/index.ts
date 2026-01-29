// Declaration Merging

// Declare Config in the global scope so it can be merged across modules
declare global {
	interface Config {
		appName: string
	}
}

// Import the config-augment module to activate declaration merging
import './config-augment.ts'

const config: Config = {
	appName: 'MyApp',
	theme: 'dark',
	maxConnections: 10,
}

function getTheme(config: Config) {
	return config.theme
}

export { config, getTheme }
