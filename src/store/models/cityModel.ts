import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'

export interface cityModelProps {
  cover: string
  name: string
}

export const cityModel = types.model<cityModelProps>('cityModel', {
  cover: types.string,
  name: types.string
})

export type cityModelType = Instance<cityModelProps>
