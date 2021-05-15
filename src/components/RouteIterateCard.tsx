import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import DisplayRating from '~/components/DisplayRating'
import { IconClock } from '~/components/icons/IconClock'

interface RouteIterateCardProps {
  name: string

  className?: string
}

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

type BadgeColors = 'blue' | 'red' | 'green' | 'orange'

const badgeColors = {
  blue: 'linear-gradient(180deg, #3A6ED6 0%, #437CED 100%)',
  red: 'linear-gradient(180deg, #DC2B2B 0%, #EF3232 100%)',
  green: 'linear-gradient(180deg, #69BC28 0%, #73CC2D 100%)',
  orange: 'linear-gradient(180deg, #E88B00 0%, #F29304 100%)'
}

const Badge = styled.div<{ mode: BadgeColors }>`
  padding: 5px 10px;
  font-size: 8px;
  color: ${({ theme }) => theme.colors.textColorWhite};
  background: ${({ mode }) => badgeColors[mode]};
  border-radius: ${({ theme }) => theme.radius.second} 0 ${({ theme }) => theme.radius.main} 0;
`

const RouteIterateCard: FC<RouteIterateCardProps> = ({ name, className }) => {
  return (
    <Root name={name} className={className} badge={<Badge mode='red'>от 1200 руб.</Badge>}>
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
