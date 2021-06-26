import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import DisplayRating from '~/components/DisplayRating'
import { IconClock } from '~/components/icons/IconClock'
import {buildFont} from "~/utils/styledBuilder";

interface RouteIterateCardProps extends WideCardGenericProps {
  price?: number
}

const Root = styled(WideCardGeneric)<WideCardGenericProps>``

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const RatingAmount = styled.div`
  position: relative;
  padding-left: 20px;
  ${buildFont({ size: '12-16', weight: 'medium' })}

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

const RouteIterateCard: FC<RouteIterateCardProps> = ({ name, price, cover, className, onClickOptions, onClick }) => {
  return (
    <Root
      name={name}
      cover={cover}
      className={className}
      badge={{
        value: !!price ? `от ${price} руб.` : 'Бесплатно',
        color: !!price ? 'red' : 'green'
      }}
      onClickOptions={onClickOptions}
      onClick={onClick}
    >
      <Rating>
        <DisplayRating value={4.6} />
        <RatingAmount>98 отзывов</RatingAmount>
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
