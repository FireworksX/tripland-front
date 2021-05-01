import { types } from '@mozaikjs/core'

export const fetchModel = types
  .model('fetchModel', {
    loadingState: types.maybe(types.enumeration('done', 'pending', 'error'))
  })
  .computed({
    isLoading({ state }) {
      return state().loadingState === 'pending'
    },
    isError({ state }) {
      return state().loadingState === 'error'
    }
  })
  .actions({
    async fetch({ dispatch }, promise) {
      dispatch({ loadingState: 'pending' })

      try {
        const response = await promise
        dispatch({ loadingState: 'done' })
        return response
      } catch (e) {
        dispatch({ loadingState: 'error' })
        return e
      }
    }
  })
