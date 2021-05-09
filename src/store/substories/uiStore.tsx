import { types } from '@mozaikjs/core'

interface uiStoreProps {
  visibleTabbar: boolean
}

interface uiStoreActions {
  setVisibleTabbar(isVisible: boolean): void
}

export const uiStoreModel = types
  .model<uiStoreProps, uiStoreActions>('uiStore', {
    visibleTabbar: types.boolean
  })
  .actions({
    setVisibleTabbar({ dispatch }, isVisible) {
      dispatch({
        visibleTabbar: isVisible
      })
    }
  })

export const uiStoreInstance = uiStoreModel.create({
  visibleTabbar: true
})
