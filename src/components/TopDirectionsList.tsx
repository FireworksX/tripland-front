import React, { FC } from 'react'
import DirectionCard from '~/components/DirectionCard'
import { directionModelType } from '~/store/models/directionModel'
import HorizontalCards from '~/components/HorizontalCards'
import { useRouter } from '~/hooks/useRouter'
import { buildRouteName } from '~/utils/buildRouteName'
import { ROUTE_NAMES, ROUTE_PARAMS } from '~router/constants'

interface TopDirectionsListProps {
  list: directionModelType[]
}

const TopDirectionsList: FC<TopDirectionsListProps> = ({ list }) => {
  const { push } = useRouter()

  return (
    <HorizontalCards>
      {list.map(el => (
        <DirectionCard
          {...el}
          onClick={() =>
            push(buildRouteName(ROUTE_NAMES.routeDetailRoot), {
              [ROUTE_PARAMS.routeSlug]: 'test'
            })
          }
        />
      ))}
    </HorizontalCards>
  )
}

export default TopDirectionsList
