import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { userStore, userStoreInstance } from './userStore'
import { plannerStoreInstance, plannerStoreModel } from '~/store/substories/plannerStore'
import { citiesStoreInstance, citiesStoreModel } from '~/store/modules/citiesModule'
import { uiStoreInstance, uiStoreModel } from '~/store/substories/uiStore.ts'
import { routerInstance } from '~router/configureRouter'
import { routerStoreInstance, routerStoreModel } from '~/store/substories/routerStore'

export interface rootStoreProps {
  userStore: typeof userStoreInstance
  plannerStore: typeof plannerStoreInstance
  citiesStore: typeof citiesStoreInstance
  uiStore: typeof uiStoreInstance
  routerStore: typeof routerStoreInstance
}

const storeSnapshot = {
  userStore: userStoreInstance,
  plannerStore: plannerStoreInstance,
  citiesStore: citiesStoreInstance,
  uiStore: uiStoreInstance,
  routerStore: routerStoreInstance
}

const storeEnv = {
  ...storeSnapshot,
  router: routerInstance
}

export const rootStoreInstance = types
  .model<rootStoreProps>('rootStore', {
    userStore,
    plannerStore: plannerStoreModel,
    routerStore: routerStoreModel,
    citiesStore: citiesStoreModel,
    uiStore: uiStoreModel
  })
  // .plugins(loggerPlugin())
  .create(storeSnapshot, storeEnv)

rootStoreInstance.routerStore.init()

export type rootStore = typeof rootStoreInstance
