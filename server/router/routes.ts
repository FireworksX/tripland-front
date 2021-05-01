import { Route } from 'router5'
import { PANEL_NAMES, STORY_NAMES } from './constants'

type ValueOf<T> = T[keyof T]

declare module 'router5' {
  interface Route {
    panelName?: ValueOf<typeof PANEL_NAMES>
  }

  interface StateMeta {
    route?: Route
  }
}

export const routes = (): Route[] => [
  {
    name: STORY_NAMES.planner,
    path: '/planner',
    children: [
      {
        name: PANEL_NAMES.plannerIndex,
        path: '/',
      }
    ]
  },
  {
    name: STORY_NAMES.favorites,
    path: '/favorites',
    children: [
      {
        name: PANEL_NAMES.plannerIndex,
        path: '/',
      }
    ]
  },
  {
    name: STORY_NAMES.notifications,
    path: '/notifications',
    children: [
      {
        name: PANEL_NAMES.plannerIndex,
        path: '/',
      }
    ]
  },
  {
    name: STORY_NAMES.profile,
    path: '/profile',
    children: [
      {
        name: PANEL_NAMES.plannerIndex,
        path: '/',
      }
    ]
  }
]
