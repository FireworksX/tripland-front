import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      accent: string
      border: string
      yellow: string
      background: string
      backgroundWhite: string
      textColor: string
      textColorWhite: string
    }
    paddings: {
      main: string
    }
    radius: {
      main: string
      second: string
    }
  }
}
