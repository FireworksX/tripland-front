import { types } from '@mozaikjs/core'
import { directionModel, directionModelProps } from '~/store/models/directionModel'

interface topDirectionsProps {
  list: directionModelProps[]
}

export const topDirectionsModel = types.model<topDirectionsProps>('topDirections', {
  list: types.array(directionModel)
})

export const topDirectionsInstance = topDirectionsModel.create({
  list: []
})
