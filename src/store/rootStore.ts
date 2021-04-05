import { types } from '@mozaikjs/core'
import { loggerPlugin } from '@mozaikjs/logger'
import { userStore, userStoreInstance } from './userStore'

export const rootStore = types
  .model('rootStore', {
    userStore
  })
  .plugins(loggerPlugin())
  .create({
    userStore: userStoreInstance
  })
