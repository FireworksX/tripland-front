import { types } from '@mozaikjs/core'

interface uiStoreProps {}

interface uiStoreActions {}

interface uiStoreComputed {
  visibleTabbar: boolean
}

export const uiStoreModel = types.model<uiStoreProps, uiStoreActions, uiStoreComputed>('uiStore', {}).computed({
  visibleTabbar({ env }) {
    return !(env.routerStore.withoutTabbar || false)
  }
})

export const uiStoreInstance = uiStoreModel.create({})
