import React from 'react'
import App, { AppContext } from 'next/app'
import Head from 'next/head'
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
import { rootStore } from '~/store/rootStore'

class WebApp extends App<ExtendAppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<ExtendAppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    // @ts-ignore
    const store: rootStore = ctx.req?.store

    return {
      originalUrl: ctx.req?.url || '',
      pageProps,
      store
    }
  }

  constructor(props: App['props'] & ExtendAppInitialProps) {
    super(props)
    this.state = {
      store: createStore()
    }
  }

  componentDidMount() {
    const newStore = createStore()
    routerInstance.start(this.props.originalUrl)

    this.setState({
      store: newStore
    })
  }

  render() {
    const { pageProps } = this.props
    // @ts-ignore
    const { store } = this.state

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <RouterProvider router={routerInstance}>
            <Head>
              <title>TripLand - спланируй своё лучшее путишествие</title>
              <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
              <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
              <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
              <link rel='manifest' href='/favicon/site.webmanifest' />
              <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
              <meta name='msapplication-TileColor' content='#da532c' />
              <meta name='theme-color' content='#ffffff' />
            </Head>
            <Index {...pageProps} />
          </RouterProvider>
        </StoreProvider>
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(WebApp)
