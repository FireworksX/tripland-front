import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    accent: 'var(--accent)',
    accentBlue: 'var(--accent-blue)',
    border: 'var(--border)',
    yellow: 'var(--yellow)',
    background: 'var(--background)',
    backgroundWhite: 'var(--backgroundWhite)',
    textColor: 'var(--textColor)',
    textColorWhite: 'var(--textColorWhite)'
  },
  paddings: {
    main: 'var(--paddingMain)'
  },
  radius: {
    main: 'var(--radiusMain)',
    second: 'var(--radiusSecond)',
  }
}

export { theme }
