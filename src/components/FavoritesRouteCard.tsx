import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import { IconClock } from '~/components/icons/IconClock'
import { IconPlacemark } from '~/components/icons/IconPlacemark'
import { DateInput } from '~/utils/dateUtils'
import DateFormatter from '~/components/DateFormatter'

interface FavoritesRouteCardProps extends WideCardGenericProps {
  places?: number
  startDate?: DateInput
  endDate?: DateInput
}

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

const DateWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 3px;
  }
`

const FavoritesRouteCard: FC<FavoritesRouteCardProps> = ({
  name,
  places,
  startDate,
  endDate,
  cover,
  className,
  onClickOptions,
  onClick
}) => {
  return (
    <Root name={name} className={className} cover={cover} onClickOptions={onClickOptions} onClick={onClick}>
      <DetailRow>
        <DetailIcon>
          <IconPlacemark size={18} />
        </DetailIcon>
        {places} остановок
      </DetailRow>
      <DetailRow>
        <DetailIcon>
          <IconClock size={18} />
        </DetailIcon>
        <DateWrapper>
          <DateFormatter value={startDate} format='DD MMM' />
          <span>–</span>
          <DateFormatter value={endDate} format='DD MMM' />
        </DateWrapper>
      </DetailRow>
    </Root>
  )
}

export default FavoritesRouteCard
