import { Route } from 'router5'
import { PANEL_NAMES, ROUTE_NAMES, ROUTE_PARAMS, STORY_NAMES, VIEW_NAMES } from './constants'
import { buildRouteName } from '../../src/utils/buildRouteName'

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

const favoritesModesRegexp = `(places|routes|excursions|restaurants)`

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
  },
  {
    name: ROUTE_NAMES.favoritesRoot,
    viewName: VIEW_NAMES.favorites,
    storyName: STORY_NAMES.favorites,
    panelName: PANEL_NAMES.favoritesIndex,
    path: `/favorites`,
    forwardTo: buildRouteName(ROUTE_NAMES.favoritesRoot, ROUTE_NAMES.favoritesModes),
    defaultParams: {
      [ROUTE_PARAMS.favoritesMode]: 'routes'
    },
    children: [
      {
        name: ROUTE_NAMES.favoritesModes,
        viewName: VIEW_NAMES.favorites,
        storyName: STORY_NAMES.favorites,
        panelName: PANEL_NAMES.favoritesIndex,
        path: `/:${ROUTE_PARAMS.favoritesMode}<${favoritesModesRegexp}>`
      }
    ]
  },
  {
    name: ROUTE_NAMES.notifications,
    viewName: VIEW_NAMES.notifications,
    storyName: STORY_NAMES.notifications,
    panelName: PANEL_NAMES.notificationsIndex,
    path: `/notifications`
  },
  {
    name: ROUTE_NAMES.profile,
    viewName: VIEW_NAMES.profile,
    storyName: STORY_NAMES.profile,
    panelName: PANEL_NAMES.profileIndex,
    path: `/profile`
  },
  {
    name: ROUTE_NAMES.detail,
    viewName: VIEW_NAMES.detail,
    storyName: STORY_NAMES.planner,
    panelName: PANEL_NAMES.detailIndex,
    withoutTabbar: true,
    path: `/detail`
  }
]
