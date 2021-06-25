import React, { FC } from 'react'
import styled from 'styled-components'

interface BubblesProps {
  className?: string
}

const Root = styled.div`
  overflow: auto;
`

const Container = styled.div``

const Bubbles: FC<BubblesProps> = ({ className }) => {
  return <Root className={className}>
    <Container></Container>
  </Root>
}

export default Bubbles
