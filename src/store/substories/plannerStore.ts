import { types } from '@mozaikjs/core'
import { buildRouteModel, buildRouteInstance } from '~/store/modules/builderRoute'
import { topCitiesInstance, topCitiesModel } from '~/store/modules/topCities.ts'
import { topDirectionsInstance, topDirectionsModel } from '~/store/modules/topDirections.ts'
import { cityModelType } from '~/store/models/cityModel'
import { authorsTripsInstance, authorsTripsModel } from '~/store/modules/authorsTrips'

type ActiveModal = null | 'cities'

export interface plannerStoreProps {
  buildRoute: typeof buildRouteInstance
  topCities: typeof topCitiesInstance
  topDirections: typeof topDirectionsInstance
  authorsTrips: typeof authorsTripsInstance
  activeModal?: ActiveModal
}

export interface plannerStoreActions {
  selectCity(city: cityModelType): void
  setActiveModal(modal: ActiveModal): void
}

export const plannerStoreModel = types
  .model<plannerStoreProps, plannerStoreActions>('plannerStore', {
    activeModal: types.maybe(types.enumeration('cities')),
    buildRoute: buildRouteModel,
    topCities: topCitiesModel,
    topDirections: topDirectionsModel,
    authorsTrips: authorsTripsModel
  })
  .actions({
    selectCity({ dispatch, state, env }, city: cityModelType) {
      state().setActiveModal(null)
      env.citiesStore.selectCity(city)
      state().authorsTrips.fetchList()
    },
    setActiveModal({ dispatch, state }, modal) {
      dispatch({ activeModal: modal })
    }
  })

export const plannerStoreInstance = plannerStoreModel.create({
  activeModal: null,
  buildRoute: buildRouteInstance,
  topCities: topCitiesInstance,
  topDirections: topDirectionsInstance,
  authorsTrips: authorsTripsInstance
})
