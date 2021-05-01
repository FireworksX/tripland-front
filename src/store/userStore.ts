import { compose, types } from '@mozaikjs/core'
import { fetchModel } from '~store/models/fetchModel'

export const userStore = compose(
  fetchModel,
  types
    .model('userStore', {
      name: types.maybe(types.string),
      isAuth: types.boolean
    })
    .actions({
      async getUser({ dispatch, state }) {
        const data = await state().fetch(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({
                name: 'arthur'
              })
            }, 3000)
          })
        )

        if (!state().isError) {
          dispatch({
            name: data.name
          })
        }
      }
    })
)

export const userStoreInstance = userStore.create({
  isAuth: false,
  name: undefined
})
