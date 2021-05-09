import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'

export interface viewControllerModelProps {
  activePanel: string
}
export interface viewControllerModelActions {
  setActivePanel(view: string): void
}

export const viewControllerModel = types
  .model<viewControllerModelProps, viewControllerModelActions>('viewControllerModel', {
    activePanel: types.string
  })
  .actions({
    setActivePanel({ dispatch }, panel) {
      dispatch({ activePanel: panel })
    }
  }) as any

export type viewControllerModelType = Instance<viewControllerModelProps>
