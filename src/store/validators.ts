import { Type } from '@mozaikjs/core/src/types'

export const dateValidator: Type = {
  name: 'date',
  validator: value => ({
    valid: typeof value === 'string' || value instanceof Date,
    errors:
      typeof value === 'string' || value instanceof Date
        ? []
        : [`Type [${typeof value}] of value [${value}] does not Date type.`]
  })
}
