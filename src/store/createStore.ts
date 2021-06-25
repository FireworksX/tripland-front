import { rootStore, rootStoreEnv, rootStoreModel, rootStoreSnapshot } from '~/store/rootStore'
import { isBrowser } from '~/utils/isBrowser'

let store: rootStore | undefined

export function createStore(snapshot?: any): rootStore {
  let _store = store ?? rootStoreModel.create(rootStoreSnapshot, rootStoreEnv)

  if (snapshot) {
    _store.$dispatch({
      type: 'hydrate',
      state: snapshot
    })
  }
  // For SSG and SSR always create a new store
  if (!isBrowser) return _store
  // Create the store once in the client
  if (!store) store = _store

  _store.routerStore.init()

  return store
}
