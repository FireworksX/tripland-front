import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'
import { DateInput } from '~/utils/dateUtils'
import { dateValidator } from '~/store/validators'

export interface routeCardModelProps {
  cover: string
  name: string
  places?: number
  startDate?: DateInput
  endDate?: DateInput
}

export const routeCardModel = types.model<routeCardModelProps>('routeCardModel', {
  cover: types.string,
  name: types.string,
  places: types.maybe(types.number),
  startDate: types.maybe(dateValidator),
  endDate: types.maybe(dateValidator)
})

export type routeCardModelType = Instance<routeCardModelProps>
