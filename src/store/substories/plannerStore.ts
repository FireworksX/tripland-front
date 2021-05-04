import { types } from '@mozaikjs/core'
import { buildRouteModel, buildRouteInstance } from '~store/modules/builderRoute'
import { topCitiesInstance, topCitiesModel } from '~store/modules/topCities.ts'
import { topDirectionsInstance, topDirectionsModel } from '~store/modules/topDirections.ts'

type ActiveModal = null | 'cities'

export interface plannerStoreProps {
  buildRoute: typeof buildRouteInstance
  topCities: typeof topCitiesInstance
  topDirections: typeof topDirectionsInstance
  activeModal?: ActiveModal
}

export interface plannerStoreActions {
  setActiveModal(modal: ActiveModal): void
}

export const plannerStoreModel = types
  .model<plannerStoreProps, plannerStoreActions>('plannerStore', {
    activeModal: types.maybe(types.enumeration('cities')),
    buildRoute: buildRouteModel,
    topCities: topCitiesModel,
    topDirections: topDirectionsModel
  })
  .actions({
    setActiveModal({ dispatch, state }, modal) {
      dispatch({ activeModal: modal })
    }
  })

export const plannerStoreInstance = plannerStoreModel.create({
  activeModal: null,
  buildRoute: buildRouteInstance,
  topCities: topCitiesInstance,
  topDirections: topDirectionsInstance
})
