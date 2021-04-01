import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '~definitions'
import { appWithTranslation } from '~server/i18n'

import '~static/css/reset.scss'

class WebApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(WebApp)
