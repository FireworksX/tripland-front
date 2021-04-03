// #region Global Imports
import next from 'next'
import express from 'express'
import path from 'path'
import nextI18NextMiddleware from 'next-i18next/middleware'
// #endregion Global Imports

// #region Local Imports
import nextI18next from './i18n'
import devProxy from './proxy'
import { configureRouter, routerInstance } from './router/configureRouter'
// #endregion Local Imports

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  const server = express()

  app.setAssetPrefix(process.env.STATIC_PATH)
  server.use(express.static(path.join(__dirname, '../public/static')))
  server.use(nextI18NextMiddleware(nextI18next))

  if (process.env.PROXY_MODE === 'local') {
    // eslint-disable-next-line global-require
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach(context => {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }

  server.all('*', async (req: any, res, next) => {
    try {
      await new Promise(resolve => routerInstance.start(req.originalUrl, resolve))

      await app.render(req, res, '/')
    } catch (e) {
      next(e)
    }
  })

  server.listen(port)

  console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`)
})
