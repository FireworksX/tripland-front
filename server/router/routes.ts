import { Route } from 'router5'
import {PANEL_NAMES, ROUTE_NAMES, ROUTE_PARAMS, STORY_NAMES, VIEW_NAMES} from './constants'

export type ValueOf<T> = T[keyof T]

declare module 'router5' {
  interface Route {
    viewName: ValueOf<typeof VIEW_NAMES>
    storyName?: ValueOf<typeof STORY_NAMES>
    panelName?: ValueOf<typeof PANEL_NAMES>
    withoutTabbar?: boolean
  }

  interface StateMeta {
    route?: Route
  }
}

export const routes = (): Route[] => [
  {
    name: ROUTE_NAMES.plannerRoot,
    viewName: VIEW_NAMES.planner,
    storyName: STORY_NAMES.planner,
    panelName: PANEL_NAMES.plannerIndex,
    path: '/planner',
    children: [
      {
        name: ROUTE_NAMES.plannerSelectGenres,
        viewName: VIEW_NAMES.planner,
        storyName: STORY_NAMES.planner,
        panelName: PANEL_NAMES.plannerSelectGenres,
        withoutTabbar: true,
        path: '/selectGenres'
      },
      {
        name: ROUTE_NAMES.plannerSelectPeople,
        viewName: VIEW_NAMES.planner,
        storyName: STORY_NAMES.planner,
        panelName: PANEL_NAMES.plannerSelectPeople,
        withoutTabbar: true,
        path: '/selectOther'
      }
    ]
  },
  {
    name: ROUTE_NAMES.routeDetailRoot,
    viewName: VIEW_NAMES.route,
    storyName: STORY_NAMES.planner,
    panelName: PANEL_NAMES.routeDetail,
    path: `/route/:${ROUTE_PARAMS.routeSlug}`
  }
]
