import { DefaultTheme } from 'styled-components'
import { ValueOf } from '~router/routes'

export type FontSize =
  | '10-12'
  | '11-12'
  | '11-16'
  | '12-16'
  | '14-20'
  | '14-24'
  | '16-20'
  | '18-22'
  | '20-24'
  | '26-30'
  | '32-38'

export type FontWeight = 'regular' | 'medium' | 'bold' | 'semi'

export interface BuildFontProps {
  size?: FontSize
  weight?: FontWeight
  color?: ValueOf<DefaultTheme['colors']>
}

export function transformFontSize(size: FontSize): string {
  return size
    .split('-')
    .reduce<string[]>((res, value, index) => {
      res.push(index === 0 ? `font-size: ${value}px;` : `line-height: ${value}px;`)
      return res
    }, [])
    .join(' ')
}

export function transformFontWeight(weight?: string): number {
  switch (weight) {
    case 'regular':
      return 400
    case 'medium':
      return 500
    case 'semi':
      return 600
    case 'bold':
      return 700
    default:
      return 400
  }
}

export function buildFont({ size, weight, color }: BuildFontProps) {
  return [transformFontSize(size || '14-24'), `font-weight: ${transformFontWeight(weight)};`, `color: ${color || ''};`]
}
