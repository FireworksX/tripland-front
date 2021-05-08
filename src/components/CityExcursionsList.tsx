import React, { FC } from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '@vkontakte/vkui'
import ExcursionCard from '~/components/ExcursionCard'
import { excursionCardModelType } from '~/store/models/excursionCardModel'

interface TopCitiesListProps {
  list: excursionCardModelType[]
}

const Root = styled.div``

const Wrapper = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, 150px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const CityExcursionsList: FC<TopCitiesListProps> = ({ list }) => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper length={list.length}>
          {list.map(card => (
            <ExcursionCard {...card} />
          ))}
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default CityExcursionsList
