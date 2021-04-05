// import { createContext, FC } from 'react'
// import { rootStore } from '~store/rootStore'
//
// let store: any
//
// export const configureStore = (initialData: any) => {
//   const _store = store ?? rootStore.create({
//     userStore: {
//       isAuth: false
//     }
//   })
//
//   if (initialData) {
//     _store.$dispatch({
//       type: 'replaceState',
//       state: initialData
//     })
//   }
//
//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store
//   // Create the store once in the client
//   if (!store) store = _store
//
//   return _store
// }
//
// export const StoreContext = createContext(undefined)
//
// export const StoreProvider: FC<{ initialData: any }> = ({ initialData, children }) => {
//   const store = configureStore(initialData)
//   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
// }
