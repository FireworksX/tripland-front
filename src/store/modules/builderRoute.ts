import { types } from '@mozaikjs/core'
import { cityModelType } from '~/store/models/cityModel'

interface builderRouteProps {
  dateFrom?: string
  dateTo?: string
}

interface builderRouteComputed {
  city?: cityModelType
}

export const buildRouteModel = types
  .model<builderRouteProps, {}, builderRouteComputed>('builderRoute', {
    dateFrom: types.maybe(types.string),
    dateTo: types.maybe(types.string)
  })
  .computed({
    city({ env }) {
      return env.citiesStore.selectedCity
    }
  })

export const buildRouteInstance = buildRouteModel.create({
  dateFrom: undefined,
  dateTo: undefined
})
