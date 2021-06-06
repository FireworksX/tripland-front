import { AppContext, AppInitialProps } from 'next/app'
import { NextPageContext } from 'next'
import { IncomingMessage } from 'http'

export interface ExtendAppInitialProps extends AppInitialProps {
  originalUrl: string
  store: any
}
