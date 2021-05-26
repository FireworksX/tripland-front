import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { plannerStoreInstance, plannerStoreModel } from '~/store/substories/plannerStore'
import { citiesStoreInstance, citiesStoreModel } from '~/store/modules/citiesModule'
import { uiStoreInstance, uiStoreModel } from '~/store/substories/uiStore.ts'
import { routerInstance } from '~router/configureRouter'
import { routerStoreInstance, routerStoreModel } from '~/store/substories/routerStore'
import { profileStoreInstance, profileStoreModel } from '~/store/substories/profileStore'
import { notificationsStoreInstance, notificationsStoreModel } from '~/store/substories/notificationsStore'

export interface rootStoreProps {
  profileStore: typeof profileStoreInstance
  plannerStore: typeof plannerStoreInstance
  citiesStore: typeof citiesStoreInstance
  uiStore: typeof uiStoreInstance
  routerStore: typeof routerStoreInstance
  notificationsStore: typeof notificationsStoreInstance
}

const storeSnapshot = {
  profileStore: profileStoreInstance,
  plannerStore: plannerStoreInstance,
  citiesStore: citiesStoreInstance,
  uiStore: uiStoreInstance,
  routerStore: routerStoreInstance,
  notificationsStore: notificationsStoreInstance
}

const storeEnv = {
  ...storeSnapshot,
  router: routerInstance
}

export const rootStoreInstance = types
  .model<rootStoreProps>('rootStore', {
    profileStore: profileStoreModel,
    plannerStore: plannerStoreModel,
    routerStore: routerStoreModel,
    citiesStore: citiesStoreModel,
    uiStore: uiStoreModel,
    notificationsStore: notificationsStoreModel
  })
  // .plugins(loggerPlugin())
  .create(storeSnapshot, storeEnv)

rootStoreInstance.routerStore.init()

export type rootStore = typeof rootStoreInstance
