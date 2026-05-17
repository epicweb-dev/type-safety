import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const workshopAppBuildPath = path.join(
	__dirname,
	'node_modules',
	'@epic-web',
	'workshop-app',
	'build',
	'server',
	'index.js',
)

const catchAllAction = `async function catchAllNotFoundAction() {
  throw new Response("Not found", {
    status: 404
  });
}
`

const rootAction = `async function rootMethodNotAllowedAction() {
  throw new Response("Method Not Allowed", {
    status: 405,
    headers: {
      Allow: "GET, HEAD, OPTIONS"
    }
  });
}
`

const rootRouteWithoutAction = `  ErrorBoundary: ErrorBoundary$8,
  default: root,
  links,
  loader: loader$M,
  meta: meta$8`

const rootRouteWithAction = `  ErrorBoundary: ErrorBoundary$8,
  action: rootMethodNotAllowedAction,
  default: root,
  links,
  loader: loader$M,
  meta: meta$8`

const loaderEnd = `  throw new Response("Not found", {
    status: 404
  });
}
`

const routeWithoutAction = `  ErrorBoundary: ErrorBoundary$7,
  default: $,
  loader: loader$L`

const routeWithAction = `  ErrorBoundary: ErrorBoundary$7,
  action: catchAllNotFoundAction,
  default: $,
  loader: loader$L`

const catchAllManifestWithoutAction =
	/("routes\/\$":\s*\{[^{}]*?"hasAction": )false/
const catchAllManifestWithAction =
	/"routes\/\$":\s*\{[^{}]*?"hasAction": true/
const rootManifestWithoutAction = /("root":\s*\{[^{}]*?"hasAction": )false/
const rootManifestWithAction = /"root":\s*\{[^{}]*?"hasAction": true/

let serverBuild = await fs.readFile(workshopAppBuildPath, 'utf8')

function replaceOrThrow(contents, search, replacement, message) {
	if (!contents.includes(search)) {
		throw new Error(message)
	}
	return contents.replace(search, replacement)
}

function replaceRegexOrThrow(contents, search, replacement, message) {
	if (!search.test(contents)) {
		throw new Error(message)
	}
	return contents.replace(search, replacement)
}

if (!serverBuild.includes('action: rootMethodNotAllowedAction')) {
	serverBuild = replaceOrThrow(
		serverBuild,
		rootRouteWithoutAction,
		rootRouteWithAction,
		'Could not find the workshop app root route module.',
	)
	serverBuild = replaceOrThrow(
		serverBuild,
		'const route0 = /* @__PURE__ */ Object.freeze',
		`${rootAction}const route0 = /* @__PURE__ */ Object.freeze`,
		'Could not find the workshop app root route declaration.',
	)
}

if (!serverBuild.includes('action: catchAllNotFoundAction')) {
	serverBuild = replaceOrThrow(
		serverBuild,
		loaderEnd,
		`${loaderEnd}${catchAllAction}`,
		'Could not find the workshop app catch-all loader.',
	)
	serverBuild = replaceOrThrow(
		serverBuild,
		routeWithoutAction,
		routeWithAction,
		'Could not find the workshop app catch-all route module.',
	)
}

if (catchAllManifestWithoutAction.test(serverBuild)) {
	serverBuild = replaceRegexOrThrow(
		serverBuild,
		catchAllManifestWithoutAction,
		'$1true',
		'Could not mark the workshop app catch-all route as having an action.',
	)
} else if (!catchAllManifestWithAction.test(serverBuild)) {
	throw new Error('Could not find the workshop app catch-all route manifest.')
}

if (rootManifestWithoutAction.test(serverBuild)) {
	serverBuild = replaceRegexOrThrow(
		serverBuild,
		rootManifestWithoutAction,
		'$1true',
		'Could not mark the workshop app root route as having an action.',
	)
} else if (!rootManifestWithAction.test(serverBuild)) {
	throw new Error('Could not find the workshop app root route manifest.')
}

await fs.writeFile(workshopAppBuildPath, serverBuild)
