import { useStore as useGlobalStore } from '@mozaikjs/react'
import {rootStoreInstance} from "~store/rootStore";

const useStore = () => {
    return useGlobalStore<typeof rootStoreInstance>()
}

export default useStore
