import 'module-alias/register'
import next from 'next'
import express from 'express'
import path from 'path'
import nextI18NextMiddleware from 'next-i18next/middleware'

import nextI18next from './i18n'
import devProxy from './proxy'
import { routerInstance } from '~router/configureRouter'
import { createStore } from '~/store/createStore'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  const server = express()

  app.setAssetPrefix(process.env.STATIC_PATH)
  server.use(express.static(path.join(__dirname, '../public/static')))
  server.use(nextI18NextMiddleware(nextI18next))

  if (process.env.PROXY_MODE === 'local') {
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach(context => {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }

  server.get('/*', async (req: any, res, next) => {
    try {
      await new Promise(resolve => routerInstance.start(req.originalUrl, resolve))
      const store = createStore()
      req.store = store

      await app.render(req, res, req.originalUrl)
    } catch (e) {
      next(e)
    }
  })

  server.listen(port)

  console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`)
})
