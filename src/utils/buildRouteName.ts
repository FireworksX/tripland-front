import { ROUTE_NAMES } from '~server/router/constants'

export const buildRouteName = (...names: string[]): string => [ROUTE_NAMES.rootRoute, ...names].join('.')
