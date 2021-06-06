import { types } from '@mozaikjs/core'
import { DateInput } from '~/utils/dateUtils'
import { dateValidator } from '~/store/validators'

interface routeDetailStoreProps {
  title: string
  startDate: DateInput
  endDate: DateInput
}

interface routeDetailStoreActions {
  fetchRoute(slug: string): Promise<boolean>
}

export const routeDetailStoreModel = types
  .model<routeDetailStoreProps, routeDetailStoreActions>('routeDetailStore', {
    title: types.string,
    startDate: dateValidator,
    endDate: dateValidator
  })
  .actions({
    fetchRoute({ dispatch }, slug) {
      return new Promise(resolve => {
        setTimeout(() => {
          dispatch({
            title: ''
          })
          resolve(true)
        }, 2000)
      })
    }
  })

export const routeDetailStoreInstance = routeDetailStoreModel.create({
  title: '',
  startDate: new Date(),
  endDate: new Date()
})
