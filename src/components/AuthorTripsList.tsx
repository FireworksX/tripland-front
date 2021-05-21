import React, { FC } from 'react'
import CoverCard from '~/components/CoverCard'
import { authorTripModelType } from '~/store/models/authorTripModel'
import HorizontalCards from '~/components/HorizontalCards'
import { useRouter } from '~/hooks/useRouter'
import { buildRouteName } from '~/utils/buildRouteName'
import { ROUTE_NAMES, ROUTE_PARAMS } from '~router/constants'

interface AuthorTripsListListProps {
  list: authorTripModelType[]
}

const AuthorTripsList: FC<AuthorTripsListListProps> = ({ list }) => {
  const { push } = useRouter()

  return (
    <HorizontalCards width={200}>
      {list.map(card => (
        <CoverCard
          {...card}
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

export default AuthorTripsList
