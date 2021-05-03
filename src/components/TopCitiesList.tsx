import React, { FC } from 'react'
import styled from 'styled-components'
import CityCard from '~components/CityCard'
import { HorizontalScroll } from '@vkontakte/vkui'

interface TopCitiesListProps {}

const cities = [
  {
    image: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    name: 'Санкт-Петербург'
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    name: 'Екатеринбург'
  },
  {
    image: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    name: 'Санкт-Петербург'
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    name: 'Екатеринбург'
  },
  {
    image: 'https://i.natgeofe.com/n/97a34ab9-1ba9-47c3-a9b2-f839f37d3aad/nationalgeographic_2652038.jpg?w=636&h=424',
    name: 'Санкт-Петербург'
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
    name: 'Екатеринбург'
  }
]

const Root = styled.div``

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${cities.length}, 140px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const TopCitiesList: FC<TopCitiesListProps> = () => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper>
          {cities.map(({ name, image }) => (
            <CityCard cover={image} name={name} />
          ))}
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default TopCitiesList
