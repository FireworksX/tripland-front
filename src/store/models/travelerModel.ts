import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'
import { DateInput } from '~/utils/dateUtils'
import { dateValidator } from '~/store/validators'

export interface travelerModelModelProps {
  firstName?: string
  lastName?: string
  birthDay?: DateInput
}

export const travelerModelModel = types.model<travelerModelModelProps>('travelerModelModel', {
  firstName: types.string,
  lastName: types.string,
  birthDay: dateValidator
})

export type travelerModelModelType = Instance<travelerModelModelProps>
