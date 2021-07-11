import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'
import { DateInput } from '~/utils/dateUtils'
import { dateValidator } from '~/store/validators'

export interface levelButtonModelModelProps {
  label: string
  value: number
  maxDeep: number
}

export interface levelButtonModelModelActions {
  onClick(newValue: number): void
}

export interface levelButtonModelModelComputed {
  labels: string[]
}

export const levelButtonModelModel = types
  .model<levelButtonModelModelProps, levelButtonModelModelActions, levelButtonModelModelComputed>('levelButtonModel', {
    label: types.string,
    value: types.number,
    maxDeep: types.number
  })
  .actions({
    onClick({ dispatch }, newValue: number) {
      dispatch({
        value: newValue
      })
    }
  })
  .computed({
    labels({ state }) {
      return new Array(5)
        .fill(null)
        .map((_, index) => (state().value > 0 ? `${state().label} (${state().value})` : `${state().label}`))
    }
  })

export type levelButtonModelModelType = Instance<
  levelButtonModelModelProps,
  levelButtonModelModelActions,
  levelButtonModelModelComputed
>
