import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from '@mozaikjs/react'
import { RouterProvider } from 'react-router5'
import '@vkontakte/vkui/dist/vkui.css'

import { theme } from '~definitions'
import { appWithTranslation } from '~server/i18n'
import '~static/css/reset.scss'
import Index from '~pages/index.tsx'
import { routerInstance } from '~router/configureRouter'
import { ExtendAppInitialProps } from '~definitions/App'
import { rootStore } from '~store/rootStore'

class WebApp extends App<ExtendAppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<ExtendAppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return {
      originalUrl: ctx.req?.url || '',
      pageProps
    }
  }

  componentDidMount() {
    routerInstance.start(this.props.originalUrl)
  }

  render() {
    const { pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={rootStore}>
          <RouterProvider router={routerInstance}>
            <Index {...pageProps} />
          </RouterProvider>
        </StoreProvider>
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(WebApp)
