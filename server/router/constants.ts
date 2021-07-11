import { createConstants } from '../../src/utils/createConstants'

const ROUTE_NAMES = createConstants(
  'rootRoute',
  'homeRoute',
  'plannerRoot',
  'plannerSelectGenres',
  'plannerSelectPeople',
  'routeDetailRoot',
  'favoritesRoot',
  'favoritesModes',
  'notifications',
  'profile',
  'detail'
)

const STORY_NAMES = createConstants('planner', 'favorites', 'notifications', 'profile')
const VIEW_NAMES = createConstants('home', 'planner', 'route', 'favorites', 'profile', 'notifications', 'detail')
const PANEL_NAMES = createConstants(
  'homeIndex',
  'plannerIndex',
  'plannerSelectGenres',
  'plannerSelectPeople',
  'routeDetail',
  'favoritesIndex',
  'notificationsIndex',
  'profileIndex',
  'detailIndex'
)

const ROUTE_PARAMS = createConstants('routeSlug', 'favoritesMode')

export { ROUTE_PARAMS, STORY_NAMES, PANEL_NAMES, VIEW_NAMES, ROUTE_NAMES }
