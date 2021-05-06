import React, { FC } from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '@vkontakte/vkui'
import CoverCard from '~/components/CoverCard'
import { authorTripModelType } from '~/store/models/authorTripModel'

interface AuthorTripsListListProps {
  list: authorTripModelType[]
}

const Root = styled.div`
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.backgroundWhite};
`

const Wrapper = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, 200px);
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const AuthorTripsList: FC<AuthorTripsListListProps> = ({ list }) => {
  return (
    <Root>
      <HorizontalScroll>
        <Wrapper length={list.length}>
          {list.map(card => (
            <CoverCard {...card} />
          ))}
        </Wrapper>
      </HorizontalScroll>
    </Root>
  )
}

export default AuthorTripsList
