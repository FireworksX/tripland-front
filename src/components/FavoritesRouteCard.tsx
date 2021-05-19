import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import DisplayRating from '~/components/DisplayRating'
import { IconClock } from '~/components/icons/IconClock'
import { IconPlacemark } from '~/components/icons/IconPlacemark'

interface FavoritesRouteCardProps extends WideCardGenericProps {}

const Root = styled(WideCardGeneric)<WideCardGenericProps>``

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`

const DetailIcon = styled.div`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.accentBlue};
`

const FavoritesRouteCard: FC<FavoritesRouteCardProps> = ({ name, className, onClickOptions }) => {
  return (
    <Root name={name} className={className} onClickOptions={onClickOptions}>
      <DetailRow>
        <DetailIcon>
          <IconPlacemark size={18} />
        </DetailIcon>
        6 остановок
      </DetailRow>
      <DetailRow>
        <DetailIcon>
          <IconClock size={18} />
        </DetailIcon>
        17:00 – 19:00
      </DetailRow>
    </Root>
  )
}

export default FavoritesRouteCard
