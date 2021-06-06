import { rootStore, rootStoreEnv, rootStoreModel, rootStoreSnapshot } from '~/store/rootStore'
import { State } from '@mozaikjs/core/build/treeNode'
import {isBrowser} from "~/utils/isBrowser";

let store: rootStore | undefined

export function createStore(snapshot?: any): rootStore {
  let _store = store ?? rootStoreModel.create(rootStoreSnapshot, rootStoreEnv)

  if (snapshot) {
    _store = rootStoreModel.create(snapshot, rootStoreEnv)
    _store.routerStore.init()
  }
  // For SSG and SSR always create a new store
  if (!isBrowser) return _store
  // Create the store once in the client
  if (!store) store = _store


  return store
}
