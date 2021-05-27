import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { buildFont } from '~/utils/styledBuilder'

interface ModalPageHeaderProps {
  left?: ReactNode
  right?: ReactNode
  className?: string
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`

const Content = styled.div`
  ${buildFont({ size: '20-24', weight: 'bold' })}
  padding: 10px 0;
  text-align: center;
`

const Left = styled.div``

const Right = styled.div``

const ModalPageHeader: FC<ModalPageHeaderProps> = ({ className, left, right, children }) => {
  return (
    <Root className={className}>
      <Left>{left}</Left>
      <Content>{children}</Content>
      <Right>{right}</Right>
    </Root>
  )
}

export default ModalPageHeader
