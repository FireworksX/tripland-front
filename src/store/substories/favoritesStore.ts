import { types } from '@mozaikjs/core'
import { routeCardModel, routeCardModelType } from '~/store/models/routeCardModel'
import { excursionCardModel, excursionCardModelType } from '~/store/models/excursionCardModel'
import { getCover } from '~/utils/getCover'
import { getRandom } from '~/utils/random'

interface favoritesStoreProps {
  routes: routeCardModelType[]
  excursions: excursionCardModelType[]
}

export const favoritesStoreModel = types.model<favoritesStoreProps>('favoritesStore', {
  routes: types.array(routeCardModel),
  excursions: types.array(excursionCardModel)
})

export const favoritesStoreInstance = favoritesStoreModel.create({
  routes: new Array(10).fill(null).map(() =>
    routeCardModel.create({
      name: '2 дня в Москве',
      cover: getCover(),
      places: getRandom(3, 15),
      startDate: '2021-06-10',
      endDate: '2021-06-15'
    })
  ),
  excursions: new Array(15).fill(null).map(() =>
    excursionCardModel.create({
      name: 'Парк Коломенское',
      cover: getCover(),
    })
  )
})
