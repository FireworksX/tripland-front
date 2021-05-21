import React, { FC } from 'react'
import ExcursionCard from '~/components/ExcursionCard'
import { excursionCardModelType } from '~/store/models/excursionCardModel'
import HorizontalCards from '~/components/HorizontalCards'
import { useRouter } from '~/hooks/useRouter'
import { buildRouteName } from '~/utils/buildRouteName'
import { ROUTE_NAMES } from '~router/constants'

interface TopCitiesListProps {
  list: excursionCardModelType[]
}

const CityExcursionsList: FC<TopCitiesListProps> = ({ list }) => {
  const { push } = useRouter()

  return (
    <HorizontalCards width={150}>
      {list.map(card => (
        <ExcursionCard {...card} onClick={() => push(buildRouteName(ROUTE_NAMES.detail))} />
      ))}
    </HorizontalCards>
  )
}

export default CityExcursionsList
