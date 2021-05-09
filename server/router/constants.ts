import { createConstants } from '../../src/utils/createConstants'

const STORY_NAMES = createConstants('planner', 'favorites', 'notifications', 'profile')
const VIEW_NAMES = createConstants('planner', 'route', 'favorites', 'profile', 'notifications')
const PANEL_NAMES = createConstants('plannerIndex', 'plannerSelectGenres', 'plannerSelectPeople')

const ROUTE_PARAMS = createConstants()

export { ROUTE_PARAMS, STORY_NAMES, PANEL_NAMES, VIEW_NAMES }
