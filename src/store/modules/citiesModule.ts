import { types } from '@mozaikjs/core'
import { cityModel, cityModelType } from '~/store/models/cityModel'

const cities = [
  {
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    name: 'Санкт-Петербург'
  },
  {
    cover:
      'https://cdn23.img.ria.ru/images/07e4/05/0d/1571382383_0:95:3072:1823_1920x0_80_0_0_c63e7c9d83d25d0d40b14bf77b358a48.jpg',
    name: 'Москва'
  },
  {
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    name: 'Екатеринбург'
  },
  {
    cover: 'https://34travel.me/media/posts/5d6fdd38d1f50-kazan-pan940.jpg',
    name: 'Казань'
  }
]

interface citiesStoreProps {
  list: cityModelType[]
  selectedCity?: cityModelType
}

interface citiesStoreActions {
  loadList(): void
  selectCity(city: cityModelType | undefined | null): void
}

export const citiesStoreModel = types
  .model<citiesStoreProps, citiesStoreActions>('citiesStore', {
    selectedCity: types.maybe(cityModel),
    list: types.array(cityModel)
  })
  .actions({
    selectCity({ dispatch }, city: cityModelType | undefined | null) {
      dispatch({ selectedCity: city })
    },
    loadList({ dispatch }) {
      setTimeout(() => {
        dispatch({
          list: cities
        })
      }, 1000)
    }
  })

export const citiesStoreInstance = citiesStoreModel.create({
  selectedCity: undefined,
  list: []
})
