import { createConstants } from '../../src/utils/createConstants'

const ROUTE_NAMES = createConstants('plannerRoot', 'plannerSelectGenres', 'plannerSelectPeople', 'routeDetailRoot')

const STORY_NAMES = createConstants('planner', 'favorites', 'notifications', 'profile')
const VIEW_NAMES = createConstants('planner', 'route', 'favorites', 'profile', 'notifications')
const PANEL_NAMES = createConstants('plannerIndex', 'plannerSelectGenres', 'plannerSelectPeople', 'routeDetail')

const ROUTE_PARAMS = createConstants('routeSlug')

export { ROUTE_PARAMS, STORY_NAMES, PANEL_NAMES, VIEW_NAMES, ROUTE_NAMES }
