import { useStore } from '~/hooks/useStore'

export const useRouter = () => {
  const { routerStore } = useStore()
  return routerStore
}
