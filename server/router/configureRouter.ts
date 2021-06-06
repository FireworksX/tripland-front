import browserPlugin from 'router5-plugin-browser'
import createRouter from 'router5'
import { routes } from '~router/routes'
import { appNavigationMiddleware } from '~router/middleware/appNavigationMiddleware'

export const configureRouter = () => {
  const defineRoutes = routes()

  const middlewares = [appNavigationMiddleware(defineRoutes)]

  const plugins = [browserPlugin({ useHash: false, mergeState: true, preserveHash: false })]

  const router = createRouter(defineRoutes, {
    allowNotFound: true,
    trailingSlashMode: 'never',
    queryParamsMode: 'default'
  })

  router.usePlugin(...plugins)
  router.useMiddleware(...middlewares)

  return router
}

export const routerInstance = configureRouter()
