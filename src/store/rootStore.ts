import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { plannerStoreInstance, plannerStoreModel } from '~/store/substories/plannerStore'
import { citiesStoreInstance, citiesStoreModel } from '~/store/modules/citiesModule'
import { uiStoreInstance, uiStoreModel } from '~/store/substories/uiStore'
import { routerInstance } from '~router/configureRouter'
import { routerStoreInstance, routerStoreModel } from '~/store/substories/routerStore'
import { profileStoreInstance, profileStoreModel } from '~/store/substories/profileStore'
import { notificationsStoreInstance, notificationsStoreModel } from '~/store/substories/notificationsStore'
import { favoritesStoreInstance, favoritesStoreModel } from '~/store/substories/favoritesStore'
import {routeDetailStoreInstance, routeDetailStoreModel} from '~/store/substories/routeDetailStore'
import {Instance} from "@mozaikjs/core/build/treeNode";

export interface rootStoreProps {
  profileStore: typeof profileStoreInstance
  plannerStore: typeof plannerStoreInstance
  citiesStore: typeof citiesStoreInstance
  uiStore: typeof uiStoreInstance
  routerStore: typeof routerStoreInstance
  notificationsStore: typeof notificationsStoreInstance
  favoritesStore: typeof favoritesStoreInstance
  routeDetailStore: typeof routeDetailStoreInstance
}

export const rootStoreSnapshot = {
  profileStore: profileStoreInstance,
  plannerStore: plannerStoreInstance,
  citiesStore: citiesStoreInstance,
  uiStore: uiStoreInstance,
  routerStore: routerStoreInstance,
  notificationsStore: notificationsStoreInstance,
  favoritesStore: favoritesStoreInstance,
  routeDetailStore: routeDetailStoreInstance
}

export const rootStoreEnv = {
  ...rootStoreSnapshot,
  router: routerInstance
}

export const rootStoreModel = types
  .model<rootStoreProps>('rootStore', {
    profileStore: profileStoreModel,
    plannerStore: plannerStoreModel,
    routerStore: routerStoreModel,
    citiesStore: citiesStoreModel,
    uiStore: uiStoreModel,
    notificationsStore: notificationsStoreModel,
    favoritesStore: favoritesStoreModel,
    routeDetailStore: routeDetailStoreModel
  })

export type rootStore = Instance<rootStoreProps>
