import { isBrowser } from '~/utils/isBrowser'
import { clamp } from '~/utils/math'

export const globalScrollController = () => ({
  getScroll: () => (isBrowser ? { x: window.pageXOffset, y: window.pageYOffset } : { x: 0, y: 0 }),
  scrollTo: (x = 0, y = 0) => {
    if (isBrowser) {
      window.scrollTo(
        x ? clamp(x, 0, document.body.scrollWidth - window.innerWidth) : 0,
        y ? clamp(y, 0, document.body.scrollHeight - window.innerHeight) : 0
      )
    }
  }
})
