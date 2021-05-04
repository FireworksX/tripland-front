import { types } from '@mozaikjs/core'

export interface cityModelProps {
  cover: string
  name: string
}

export const cityModel = types.model<cityModelProps>('cityModel', {
  cover: types.string,
  name: types.string
})
