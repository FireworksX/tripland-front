import React, { FC } from 'react'
import styled from 'styled-components'
import CityCard from '~/components/CityCard'
import { HorizontalScroll } from '@vkontakte/vkui'
import { cityModelType } from '~/store/models/cityModel'

interface CitiesListProps {
  list: cityModelType[]
}

const Root = styled.div``

const Wrapper = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, 140px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const CitiesList: FC<CitiesListProps> = ({ list }) => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper length={list.length}>
          {list.map(({ name, cover }) => (
            <CityCard cover={cover} name={name} />
          ))}
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default CitiesList
