import { createConstants } from '../../src/utils/createConstants'

const STORY_NAMES = createConstants('planner', 'favorites', 'notifications', 'profile')
const PANEL_NAMES = createConstants('plannerIndex')

const ROUTE_PARAMS = createConstants()

export { ROUTE_PARAMS, STORY_NAMES, PANEL_NAMES }
