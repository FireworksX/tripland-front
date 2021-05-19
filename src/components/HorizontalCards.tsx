import React, { FC } from 'react'
import styled from 'styled-components'
import { HorizontalScroll as VKHorizontalScroll } from '@vkontakte/vkui'

interface HorizontalCardsProps {
  width?: number
  className?: string
}

const Root = styled.div<{ width: number; length: number }>`
  display: grid;
  grid-template-columns: ${({ width, length }) => `repeat(${length}, ${width}px)`};
  grid-gap: 10px;
  padding: 0 ${({ theme }) => theme.paddings.main};
`

const HorizontalCards: FC<HorizontalCardsProps> = ({ children, className, width = 130 }) => {
  const length = React.Children.toArray(children).length
  return (
    <VKHorizontalScroll>
      <Root className={className} length={length} width={width}>
        {children}
      </Root>
    </VKHorizontalScroll>
  )
}

export default HorizontalCards
