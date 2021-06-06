import { useStore as useGlobalStore } from '@mozaikjs/react'
import { rootStore } from '~/store/rootStore'
import { isBrowser } from '~/utils/isBrowser'
import { createStore } from '~/store/createStore'

export const useStore = (): rootStore => {
  return isBrowser ? useGlobalStore<rootStore>() : createStore()
}
