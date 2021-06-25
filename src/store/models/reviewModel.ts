import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'
import { DateInput } from '~/utils/dateUtils'
import { dateValidator } from '~/store/validators'

export interface reviewModelProps {
  avatar: string
  name: string
  date: DateInput
  text: string
  rating?: number
}

export const reviewModel = types.model<reviewModelProps>('reviewModel', {
  avatar: types.string,
  name: types.string,
  date: dateValidator,
  text: types.string,
  rating: types.maybe(types.number)
})

export type reviewModelType = Instance<reviewModelProps>
