const routes = {
	home: '/',
	login: '/login',
	settings: '/settings',
} as const

type RouteName = keyof typeof routes
type RoutePath = (typeof routes)[RouteName]

const defaultRoute: '/' = routes.home

function getRoutePath(name: RouteName): RoutePath {
	return routes[name]
}

export { routes, defaultRoute, getRoutePath }
