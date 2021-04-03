import { Route, Router } from 'router5'
import { MiddlewareFactory } from 'router5/dist/types/router'

const findDeepRoute = (routes: Route[], findName: string): Route | undefined => {
  const findRoute = routes.find(({ name }) => name === findName)
  if (!findRoute) {
    const findNameArr = findName.split('.')
    findNameArr.shift()
    return routes
      .map(route => {
        return findDeepRoute(route.children || [], findNameArr.join('.'))
      })
      .filter(Boolean)[0]
  }
  return findRoute
}

const appNavigationMiddleware = (routes: Route[]): MiddlewareFactory => (router: Router) => toState => {
  const findRoute = findDeepRoute(routes, toState.name)

  if (toState.meta) {
    toState.meta.route = findRoute
  }
  return true
}

export { appNavigationMiddleware }
