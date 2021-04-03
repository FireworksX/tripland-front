import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router5'
import '@vkontakte/vkui/dist/vkui.css'

import { theme } from '~definitions'
import { appWithTranslation } from '~server/i18n'
import '~static/css/reset.scss'
import Index from '~pages/index.tsx'
import { routerInstance } from '~router/configureRouter'

class WebApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const initialProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return {
      pageProps: {
        ...initialProps,
        originalUrl: ctx.req?.url
      }
    }
  }

  componentDidMount() {
    routerInstance.start(this.props.pageProps.originalUrl)
  }

  render() {
    const { pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <RouterProvider router={routerInstance}>
          <Index {...pageProps} />
        </RouterProvider>
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(WebApp)
