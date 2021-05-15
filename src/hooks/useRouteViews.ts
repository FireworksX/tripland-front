import { ROUTE_NAMES, VIEW_NAMES } from '~router/constants'
import { useRouter } from '~/hooks/useRouter'

export const useRouteViews = () => {
  const { state } = useRouter()

  return {
    name: state?.name || ROUTE_NAMES.plannerRoot,
    view: state?.meta?.route?.viewName || VIEW_NAMES.planner,
    story: state?.meta?.route?.storyName,
    panel: state?.meta?.route?.panelName
  }
}
