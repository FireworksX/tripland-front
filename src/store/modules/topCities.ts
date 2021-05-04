import { types } from '@mozaikjs/core'
import { cityModel, cityModelProps } from '~store/models/cityModel'

interface topCitiesProps {
  list: cityModelProps[]
}

export const topCitiesModel = types.model<topCitiesProps>('topCities', {
  list: types.array(cityModel)
})

export const topCitiesInstance = topCitiesModel.create({
  list: []
})
