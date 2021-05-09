import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { userStore, userStoreInstance } from './userStore'
import { plannerStoreInstance, plannerStoreModel } from '~/store/substories/plannerStore'
import { citiesStoreInstance, citiesStoreModel } from '~/store/modules/citiesModule'
import { uiStoreInstance, uiStoreModel } from '~/store/substories/uiStore'

export interface rootStoreProps {
  userStore: typeof userStoreInstance
  plannerStore: typeof plannerStoreInstance
  citiesStore: typeof citiesStoreInstance
  uiStore: typeof uiStoreInstance
}

const storeSnapshot = {
  userStore: userStoreInstance,
  plannerStore: plannerStoreInstance,
  citiesStore: citiesStoreInstance,
  uiStore: uiStoreInstance
}

const storeEnv = {
  ...storeSnapshot
}

export const rootStoreInstance = types
  .model<rootStoreProps>('rootStore', {
    userStore,
    plannerStore: plannerStoreModel,
    citiesStore: citiesStoreModel,
    uiStore: uiStoreModel
  })
  // .plugins(loggerPlugin())
  .create(storeSnapshot, storeEnv)

export type rootStore = typeof rootStoreInstance
