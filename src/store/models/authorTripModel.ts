import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'

export interface authorTripModelProps {
  cover: string
  name: string
  badge?: string
}

export const authorTripModel = types.model<authorTripModelProps>('authorTripModel', {
  cover: types.string,
  name: types.string,
  badge: types.maybe(types.string)
})

export type authorTripModelType = Instance<authorTripModelProps>
