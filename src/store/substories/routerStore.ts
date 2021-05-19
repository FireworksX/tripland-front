import { types } from '@mozaikjs/core'
import { State } from 'router5'
import { CancelFn, DoneFn, Params } from 'router5/dist/types/base'
import { isBrowser } from '~/utils/isBrowser'

interface routerStoreProps {}

interface routerStoreActions {
  init(): void
  forceUpdate(): void
  push(path: string, params?: Params, doneFn?: DoneFn): CancelFn
  replace(path: string, params?: Params, doneFn?: DoneFn): CancelFn
  back(): void
  forward(): void
}

interface routerStoreComputed {
  state: State
  params: Params
  withoutTabbar: boolean
  path: string
}

export const routerStoreModel = types
  .model<routerStoreProps, routerStoreActions, routerStoreComputed>('routerStore', {})
  .computed({
    path({ state }) {
      return state().state.path
    },

    state({ env }) {
      return env.router.getState()
    },

    params({ state }) {
      return state().state.params
    },

    withoutTabbar({ state }) {
      return state().state?.meta?.route?.withoutTabbar
    }
  })
  .actions({
    init({ env, state }) {
      env.router.subscribe(state().forceUpdate)
    },

    forceUpdate({ dispatch }) {
      dispatch({})
    },

    push({ dispatch, state, env }, path, params, doneFn) {
      if (path) {
        return env.router.navigate(path, params, doneFn)
      }
    },

    replace({ dispatch, state, env }, path, params, doneFn) {
      if (path) {
        return env.router.navigate(
          path,
          params,
          {
            replace: true
          },
          doneFn
        )
      }
    },

    back() {
      if (isBrowser) {
        window.history.back()
      }
    },

    forward() {
      if (isBrowser) {
        window.history.forward()
      }
    }
  })

export const routerStoreInstance = routerStoreModel.create({})
