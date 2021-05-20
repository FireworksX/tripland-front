import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import DisplayRating from '~/components/DisplayRating'
import { IconClock } from '~/components/icons/IconClock'

interface RouteIterateCardProps extends WideCardGenericProps {}

const Root = styled(WideCardGeneric)<WideCardGenericProps>``

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  div {
    position: relative;
    padding-right: 20px;
    font-size: 12px;
    font-weight: 500;

    &:after {
      content: '';
      width: 5px;
      height: 5px;
      position: absolute;
      right: 7px;
      top: 5px;
      background: ${({ theme }) => theme.colors.border};
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.secondary};
      &:after {
        display: none;
      }
    }
  }
`

const Time = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`

const TimeIcon = styled.div`
  margin-right: 5px;
`

const RouteIterateCard: FC<RouteIterateCardProps> = ({ name, className, onClickOptions, onClick }) => {
  return (
    <Root
      name={name}
      className={className}
      badge={{
        value: 'от 1200 руб.',
        color: 'red'
      }}
      onClickOptions={onClickOptions}
      onClick={onClick}
    >
      <Rating>
        <DisplayRating value={4.6} />
        <div>98 отзывов</div>
      </Rating>
      <Time>
        <TimeIcon>
          <IconClock size={18} />
        </TimeIcon>
        17:00 – 19:00
      </Time>
    </Root>
  )
}

export default RouteIterateCard
