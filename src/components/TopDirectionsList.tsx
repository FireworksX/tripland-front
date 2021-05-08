import React, { FC } from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '@vkontakte/vkui'
import DirectionCard from '~/components/DirectionCard'
import SeeMoreCard from '~/components/SeeMoreCard'
import { directionModelType } from '~/store/models/directionModel'

interface TopDirectionsListProps {
  list: directionModelType[]
}

const Root = styled.div``

const Wrapper = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length + 1}, 140px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const TopDirectionsList: FC<TopDirectionsListProps> = ({ list }) => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper length={list.length}>
          {list.map(el => (
            <DirectionCard {...el} />
          ))}
          <SeeMoreCard />
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default TopDirectionsList
