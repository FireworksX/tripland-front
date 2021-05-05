import { types } from '@mozaikjs/core'
import {Instance} from "@mozaikjs/core/build/treeNode";

export interface fetchModelProps {
  loadingState: 'done' | 'pending' | 'error'
}

export interface fetchModelActions {
  fetch(promise: Promise<any>): any
}

export interface fetchModelComputed {
  isLoading: boolean
  isError: boolean
}

export const fetchModel = types
  .model<fetchModelProps, fetchModelActions, fetchModelComputed>('fetchModel', {
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

export type fetchModelType = Instance<fetchModelProps, fetchModelActions, fetchModelComputed>
