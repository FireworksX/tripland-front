import { types } from '@mozaikjs/core'

export interface directionModelProps {
  cover: string
  name: string
  region?: string
  duration?: number
  rating?: number
}

export const directionModel = types.model<directionModelProps>('directionModel', {
  cover: types.string,
  name: types.string,
  region: types.maybe(types.string),
  duration: types.maybe(types.number),
  rating: types.maybe(types.number),
})
