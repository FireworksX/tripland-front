import { useStore as useGlobalStore } from '@mozaikjs/react'
import { rootStore } from '~/store/rootStore'

export const useStore = (): rootStore => {
  return useGlobalStore<rootStore>()
}
