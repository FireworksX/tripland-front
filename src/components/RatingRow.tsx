import React, { FC } from 'react'
import styled from 'styled-components'
import DisplayRating from '~/components/DisplayRating'

interface RatingRowProps {
  value: number
  countReviews: number
  className?: string
}

const Root = styled.div`
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

const RatingRow: FC<RatingRowProps> = ({ className, value, countReviews }) => {
  return (
    <Root className={className}>
      <DisplayRating value={value} />
      <div>{countReviews} отзывов</div>
    </Root>
  )
}

export default RatingRow
