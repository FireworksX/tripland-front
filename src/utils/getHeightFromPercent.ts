import { isBrowser } from '~/utils/isBrowser'

export const getHeightFromPercent = (percent: number): number => {
  return isBrowser ? window.innerHeight * (percent / 100) : 0
}
