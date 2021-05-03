import React, { FC } from 'react'
import styled from 'styled-components'
import CityCard from '~components/CityCard'
import { HorizontalScroll } from '@vkontakte/vkui'
import ExcursionCard from '~components/ExcursionCard'

interface TopCitiesListProps {}

const excursions = [
  {
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    title: 'Обзорная автобусная экскурсия по Москве ',
    price: 1200
  },
  {
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    title: 'Сокровища Кремля: Оружейная палата и Алмазный фонд',
    price: 900
  }
]

const Root = styled.div``

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${excursions.length}, 150px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const CityExcursionsList: FC<TopCitiesListProps> = () => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper>
          {excursions.map(card => (
            <ExcursionCard {...card} />
          ))}
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default CityExcursionsList
