// Declaration Merging

interface Config {
	appName: string
}

interface Config {
	theme: 'light' | 'dark'
}

interface Config {
	maxConnections: number
}

const config: Config = {
	appName: 'MyApp',
	theme: 'dark',
	maxConnections: 10,
}

function getTheme(config: Config) {
	return config.theme
}

export { config, getTheme }
