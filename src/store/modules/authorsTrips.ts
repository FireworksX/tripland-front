import { types } from '@mozaikjs/core'
import carCover from '~static/images/carCover.png'
import { authorTripModel, authorTripModelType } from '~/store/models/authorTripModel'

const compilations = [
  {
    name: 'На машине',
    badge: '31 место',
    cover: carCover
  },
  {
    name: 'Романтическое свидание',
    badge: '31 место',
    cover: carCover
  },
  {
    name: 'На машине',
    badge: '31 место',
    cover: carCover
  },
  {
    name: 'На машине',
    badge: '31 место',
    cover: carCover
  },
  {
    name: 'На машине',
    badge: '31 место',
    cover: carCover
  }
]

interface authorsTripsProps {
  list: authorTripModelType[]
}

interface authorsTripsActions {
  fetchList(): Promise<void>
}

export const authorsTripsModel = types
  .model<authorsTripsProps, authorsTripsActions>('authorsTrips', {
    list: types.array(authorTripModel)
  })
  .actions({
    fetchList({ dispatch }) {
      setTimeout(() => {
        dispatch({
          list: compilations
        })
      }, 2000)
    }
  })

export const authorsTripsInstance = authorsTripsModel.create({
  list: []
})
