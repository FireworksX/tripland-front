import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'

export interface excursionCardModelProps {
  cover: string
  name: string
  price?: number
}

export const excursionCardModel = types.model<excursionCardModelProps>('excursionCardModel', {
  cover: types.string,
  name: types.string,
  price: types.maybe(types.number)
})

export type excursionCardModelType = Instance<excursionCardModelProps>
