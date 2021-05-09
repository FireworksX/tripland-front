import { Route } from 'router5'
import { PANEL_NAMES, STORY_NAMES, VIEW_NAMES } from './constants'

export type ValueOf<T> = T[keyof T]

declare module 'router5' {
  interface Route {
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
    name: VIEW_NAMES.planner,
    storyName: STORY_NAMES.planner,
    path: '/planner',
    children: [
      {
        name: VIEW_NAMES.planner,
        panelName: PANEL_NAMES.plannerIndex,
        storyName: STORY_NAMES.planner,
        path: '/'
      }
    ]
  },
  {
    name: VIEW_NAMES.route,
    storyName: STORY_NAMES.planner,
    path: '/route',
    children: [
      {
        name: PANEL_NAMES.plannerIndex,
        panelName: PANEL_NAMES.plannerIndex,
        storyName: STORY_NAMES.planner,
        path: '/'
      }
    ]
  }
]
