import { types } from '@mozaikjs/core'
import { cityModel, cityModelProps } from '~store/models/cityModel'

interface builderRouteProps {
  city?: cityModelProps
  dateFrom?: string
  dateTo?: string
}

export const buildRouteModel = types.model<builderRouteProps>('builderRoute', {
  city: types.maybe(cityModel),
  dateFrom: types.maybe(types.string),
  dateTo: types.maybe(types.string)
})

export const buildRouteInstance = buildRouteModel.create({
  city: undefined,
  dateFrom: undefined,
  dateTo: undefined
})
