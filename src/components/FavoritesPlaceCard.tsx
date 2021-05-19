import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import DisplayRating from '~/components/DisplayRating'
import { IconClock } from '~/components/icons/IconClock'
import { IconPlacemark } from '~/components/icons/IconPlacemark'

interface FavoritesPlaceCardProps extends WideCardGenericProps {}

const Root = styled(WideCardGeneric)<WideCardGenericProps>`
  min-height: 90px;
`

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

const FavoritesPlaceCard: FC<FavoritesPlaceCardProps> = ({ name, className, onClickOptions }) => {
  return (
    <Root
      name={name}
      className={className}
      badge={{
        value: 'от 1200 руб.',
        color: 'green'
      }}
      onClickOptions={onClickOptions}
    >
      <Rating>
        <DisplayRating value={4.6} />
        <div>98 отзывов</div>
      </Rating>
    </Root>
  )
}

export default FavoritesPlaceCard
