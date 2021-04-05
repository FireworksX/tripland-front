import { types } from '@mozaikjs/core'

export const userStore = types
  .model('userStore', {
    name: types.string,
    isAuth: types.boolean,
  })
  .actions({
    login({ dispatch }: any) {
      dispatch({
        isAuth: true,
        name: 'arthur'
      })
    }
  })

export const userStoreInstance = userStore.create({
  isAuth: false,
  name: 'test'
})
