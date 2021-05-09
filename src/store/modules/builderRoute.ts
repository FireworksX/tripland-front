import { types } from '@mozaikjs/core'
import { cityModelType } from '~/store/models/cityModel'

interface builderRouteProps {
  dateFrom?: string
  dateTo?: string
}

interface builderRouteActions {
  setDate(mode: 'dateFrom' | 'dateTo', date: string): void
  resetDates(): void
}

interface builderRouteComputed {
  city?: cityModelType
}

export const buildRouteModel = types
  .model<builderRouteProps, builderRouteActions, builderRouteComputed>('builderRoute', {
    dateFrom: types.maybe(types.string),
    dateTo: types.maybe(types.string)
  })
  .computed({
    city({ env }) {
      return env.citiesStore.selectedCity
    }
  })
  .actions({
    resetDates({ dispatch }) {
      dispatch({
        dateFrom: undefined,
        dateTo: undefined
      })
    },
    setDate({ dispatch }, mode, date) {
      dispatch({
        [mode]: date
      })
    }
  })

export const buildRouteInstance = buildRouteModel.create({
  dateFrom: undefined,
  dateTo: undefined
})
