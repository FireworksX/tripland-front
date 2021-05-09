import {PANEL_NAMES, VIEW_NAMES} from '~router/constants'

export const buildRouteName = (...names: string[]): string => names.join('.')

export const buildPath = (view: keyof typeof VIEW_NAMES, panel: keyof typeof PANEL_NAMES): string =>
  buildRouteName(view, panel)
