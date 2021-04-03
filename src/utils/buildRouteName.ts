import { PANEL_NAMES, STORY_NAMES } from '~router/constants'

export const buildRouteName = (...names: string[]): string => names.join('.')

export const buildPath = (story: keyof typeof STORY_NAMES, panel: keyof typeof PANEL_NAMES): string =>
  buildRouteName(story, panel)
