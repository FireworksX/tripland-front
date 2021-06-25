import { types } from '@mozaikjs/core'
import { buildRouteModel, buildRouteInstance } from '~/store/modules/builderRoute'
import { cityModelType } from '~/store/models/cityModel'
import { authorTripModel, authorTripModelType } from '~/store/models/authorTripModel'
import { excursionCardModel, excursionCardModelType } from '~/store/models/excursionCardModel'
import { directionModel, directionModelType } from '~/store/models/directionModel'
import { PANEL_NAMES } from '~router/constants'
import { getRandom, getRandomFromArray } from '~/utils/random'
import { getCover } from '~/utils/getCover'

const carCover = ''

const compilations = [
  {
    name: 'Антон Птушкин',
    badge: '31 место',
    cover: carCover
  },
  {
    name: 'Маршрут от Моргена',
    badge: '12 мест',
    cover: carCover
  },
  {
    name: 'Подборка Басты',
    badge: '27 мест',
    cover: carCover
  },
  {
    name: 'Илон Маск',
    badge: '21 место',
    cover: carCover
  }
]

const excursions = new Array(10).fill(null).map(() => ({
  cover: getCover(),
  name: 'test',
  price: getRandomFromArray([500, 700, 750, 1000, 1500, 3200])
}))

const directions = [
  {
    name: 'Алтай',
    region: 'Россия',
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    duration: 7,
    rating: 4.9
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    duration: 5,
    rating: 4.5
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    duration: 7,
    rating: 4.9
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    duration: 5,
    rating: 4.5
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    duration: 7,
    rating: 4.9
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    duration: 5,
    rating: 4.5
  }
]

type ActiveModal = null | 'cities' | 'calendar'
type ActivePanel = 'plannerIndex' | 'plannerSelectPeople' | 'plannerSelectGenres'

export interface plannerStoreProps {
  activePanel: 'plannerIndex' | 'plannerSelectGenres'
  buildRoute: typeof buildRouteInstance
  authorsTripsList: authorTripModelType[]
  excursionsList: excursionCardModelType[]
  topDirectionsList: directionModelType[]
  activeModal?: ActiveModal
}

export interface plannerStoreActions {
  selectCity(city: cityModelType): void
  resetCity(): void
  setActiveModal(modal: ActiveModal): void
  setActivePanel(panel: ActivePanel): void
}

export interface plannerStoreComputed {
  topCitiesList: cityModelType[]
}

export const plannerStoreModel = types
  .model<plannerStoreProps, plannerStoreActions, plannerStoreComputed>('plannerStore', {
    activePanel: types.maybe(
      types.enumeration(PANEL_NAMES.plannerIndex, PANEL_NAMES.plannerSelectGenres, PANEL_NAMES.plannerSelectPeople)
    ),
    activeModal: types.maybe(types.enumeration('cities', 'calendar')),
    buildRoute: buildRouteModel,
    topDirectionsList: types.array(directionModel),
    authorsTripsList: types.array(authorTripModel),
    excursionsList: types.array(excursionCardModel)
  })
  .computed({
    topCitiesList({ env }) {
      return env.citiesStore.list.slice(0, 3)
    }
  })
  .actions({
    selectCity({ dispatch, state, env }, city: cityModelType) {
      env.citiesStore.selectCity(city)
      dispatch({
        authorsTripsList: compilations,
        excursionsList: excursions
      })
    },

    resetCity({ dispatch, env }) {
      env.citiesStore.selectCity(undefined)
      dispatch({
        authorsTripsList: [],
        excursionsList: []
      })
    },

    setActiveModal({ dispatch, state }, modal) {
      dispatch({ activeModal: modal })
    },

    setActivePanel({ dispatch }, panel) {
      dispatch({ activePanel: panel })
    }
  })

export const plannerStoreInstance = plannerStoreModel.create({
  activePanel: PANEL_NAMES.plannerIndex,
  activeModal: null,
  buildRoute: buildRouteInstance,
  authorsTripsList: [],
  topDirectionsList: directions.map(el => directionModel.create(el)),
  excursionsList: []
})
