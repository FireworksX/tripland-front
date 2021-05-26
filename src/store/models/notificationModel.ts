import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'

export interface notificationModelProps {
  title: string
  text: string
  checked: boolean
}

export const notificationModel = types.model<notificationModelProps>('notificationModel', {
  title: types.string,
  text: types.string,
  checked: types.boolean
})

export type notificationModelType = Instance<notificationModelProps>
