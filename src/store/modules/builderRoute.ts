import { types } from '@mozaikjs/core'
import { cityModel, cityModelType } from '~store/models/cityModel'

interface builderRouteProps {
  city?: cityModelType
  dateFrom?: string
  dateTo?: string
}

interface builderRouteActions {
  setCity(city: cityModelType): void
}

export const buildRouteModel = types
  .model<builderRouteProps, builderRouteActions>('builderRoute', {
    city: types.maybe(cityModel),
    dateFrom: types.maybe(types.string),
    dateTo: types.maybe(types.string)
  })
  .actions({
    setCity({ dispatch }, city: cityModelType) {
      dispatch({ city })
    }
  })

export const buildRouteInstance = buildRouteModel.create({
  city: undefined,
  dateFrom: undefined,
  dateTo: undefined
})
