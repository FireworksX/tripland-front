import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      accent: string
      accentBlue: string
      border: string
      gray: string
      yellow: string
      background: string
      backgroundWhite: string
      textColor: string
      textColorWhite: string
      red: string
      icon: string
    }
    paddings: {
      main: string
    }
    radius: {
      main: string
      second: string
    }
    shadow: {
      main: string
    }
  }
}
