import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from '@mozaikjs/react'
import { RouterProvider } from 'react-router5'
import '@vkontakte/vkui/dist/vkui.css'

import { theme } from '~/definitions'
import { appWithTranslation } from '~server/i18n'
import '~static/css/reset.scss'
import '~static/css/global.scss'
import 'swiper/swiper.scss'
import Index from '~pages/index.tsx'
import { routerInstance } from '~router/configureRouter'
import { ExtendAppInitialProps } from '~/definitions/App'
import { createStore } from '~/store/createStore'

class WebApp extends App<ExtendAppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<ExtendAppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    // @ts-ignore
    const store = ctx.req?.store
    return {
      originalUrl: ctx.req?.url || '',
      pageProps,
      store
    }
  }

  componentDidMount() {
    routerInstance.start(this.props.originalUrl)
  }

  render() {
    const { pageProps, store } = this.props
    console.log(store.routerStore.path, 'path')
    const newStore = createStore(store)

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={newStore}>
          <RouterProvider router={routerInstance}>
            <Index {...pageProps} />
          </RouterProvider>
        </StoreProvider>
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(WebApp)
