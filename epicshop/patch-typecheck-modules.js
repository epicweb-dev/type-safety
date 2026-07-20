import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cliPath = path.join(
	__dirname,
	'..',
	'node_modules',
	'@kentcdodds',
	'typecheck-modules',
	'cli.js',
)

const brokenDirectoryPattern = `const pattern = path.join(resolved, '**/*.{ts,tsx}')`
const fixedDirectoryPattern = `const pattern = path
			.join(resolved, '**/*.{ts,tsx}')
			.split(path.sep)
			.join('/')`

const brokenGlobPattern = `\t\tpatterns.push(resolved)`
const fixedGlobPattern = `\t\tpatterns.push(resolved.split(path.sep).join('/'))`

let cli = await fs.readFile(cliPath, 'utf8')

if (
	cli.includes(fixedDirectoryPattern) &&
	cli.includes(fixedGlobPattern)
) {
	console.log('✅ typecheck-modules already patched for Windows globs')
	process.exit(0)
}

if (!cli.includes(brokenDirectoryPattern)) {
	throw new Error(
		'Unable to patch typecheck-modules: directory glob pattern not found',
	)
}

if (!cli.includes(brokenGlobPattern)) {
	throw new Error(
		'Unable to patch typecheck-modules: dynamic glob pattern push not found',
	)
}

cli = cli.replace(brokenDirectoryPattern, fixedDirectoryPattern)
cli = cli.replace(brokenGlobPattern, fixedGlobPattern)

await fs.writeFile(cliPath, cli)
console.log('✅ Patched typecheck-modules for Windows-safe fast-glob paths')
