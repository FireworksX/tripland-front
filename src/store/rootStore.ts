import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { userStore, userStoreInstance } from './userStore'
import { plannerStoreInstance, plannerStoreModel } from '~store/substories/plannerStore'

export interface rootStoreProps {
  userStore: typeof userStoreInstance
  plannerStore: typeof plannerStoreInstance
}

const storeSnapshot = {
  userStore: userStoreInstance,
  plannerStore: plannerStoreInstance
}

const storeEnv = {
  ...storeSnapshot
}

export const rootStoreInstance = types
  .model<rootStoreProps>('rootStore', {
    userStore,
    plannerStore: plannerStoreModel
  })
  // .plugins(loggerPlugin())
  .create(storeSnapshot, storeEnv)
