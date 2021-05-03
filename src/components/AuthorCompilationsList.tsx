import React, { FC } from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '@vkontakte/vkui'
import carCover from '~static/images/carCover.png'
import CoverCard from '~components/CoverCard'

interface AuthorCompilationsListProps {}

const compilations = [
  {
    title: 'На машине',
    badge: '31 место',
    cover: carCover
  },
  {
    title: 'Романтическое свидание',
    badge: '31 место',
    cover: carCover
  },
  {
    title: 'На машине',
    badge: '31 место',
    cover: carCover
  },
  {
    title: 'На машине',
    badge: '31 место',
    cover: carCover
  },
  {
    title: 'На машине',
    badge: '31 место',
    cover: carCover
  }
]

const Root = styled.div`
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.backgroundWhite};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${compilations.length}, 200px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const AuthorCompilationsList: FC<AuthorCompilationsListProps> = () => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper>
          {compilations.map(card => (
            <CoverCard {...card} />
          ))}
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default AuthorCompilationsList
