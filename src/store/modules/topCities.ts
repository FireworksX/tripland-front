import { types } from '@mozaikjs/core'
import { cityModelProps } from '~/store/models/cityModel'

interface topCitiesComputed {
  list: cityModelProps[]
}

export const topCitiesModel = types.model<{}, {}, topCitiesComputed>('topCities', {}).computed({
  list({ env }) {
    return env.citiesStore.list.slice(0, 3)
  }
})

export const topCitiesInstance = topCitiesModel.create({})
