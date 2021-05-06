import React, { FC } from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '@vkontakte/vkui'
import DirectionCard from '~/components/DirectionCard'
import SeeMoreCard from '~/components/SeeMoreCard'

interface TopDirectionsListProps {}

const directions = [
  {
    name: 'Алтай',
    region: 'Россия',
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    duration: 7,
    rating: 4.9
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    duration: 5,
    rating: 4.5
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    duration: 7,
    rating: 4.9
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    duration: 5,
    rating: 4.5
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    duration: 7,
    rating: 4.9
  },
  {
    name: 'Алтай',
    region: 'Россия',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    duration: 5,
    rating: 4.5
  }
]

const Root = styled.div``

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${directions.length + 1}, 140px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const TopDirectionsList: FC<TopDirectionsListProps> = () => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper>
          {directions.map(el => (
            <DirectionCard {...el} />
          ))}
          <SeeMoreCard />
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default TopDirectionsList
