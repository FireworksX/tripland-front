import React, { FC } from 'react'
import CityCard from '~/components/CityCard'
import { cityModelType } from '~/store/models/cityModel'
import HorizontalCards from '~/components/HorizontalCards'
import { useStore } from '~/hooks/useStore'

interface CitiesListProps {
  list: cityModelType[]
}

const CitiesList: FC<CitiesListProps> = ({ list }) => {
  const { plannerStore } = useStore()

  return (
    <HorizontalCards width={140}>
      {list.map(city => (
        <CityCard cover={city.cover} name={city.name} onClick={() => plannerStore.selectCity(city)} />
      ))}
    </HorizontalCards>
  )
}

export default CitiesList
