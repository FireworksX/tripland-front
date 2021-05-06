import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { userStore, userStoreInstance } from './userStore'
import { plannerStoreInstance, plannerStoreModel } from '~store/substories/plannerStore'
import { citiesModuleInstance, citiesModuleModel } from '~store/modules/citiesModule'

export interface rootStoreProps {
  userStore: typeof userStoreInstance
  plannerStore: typeof plannerStoreInstance
  citiesStore: typeof citiesModuleInstance
}

const storeSnapshot = {
  userStore: userStoreInstance,
  plannerStore: plannerStoreInstance,
  citiesStore: citiesModuleInstance
}

const storeEnv = {
  ...storeSnapshot
}

export const rootStoreInstance = types
  .model<rootStoreProps>('rootStore', {
    userStore,
    plannerStore: plannerStoreModel,
    citiesStore: citiesModuleModel
  })
  // .plugins(loggerPlugin())
  .create(storeSnapshot, storeEnv)

export type rootStore = typeof rootStoreInstance
