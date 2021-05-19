import React, { FC } from 'react'
import styled from 'styled-components'

interface PanelHeaderProps {
  className?: string
}

const Root = styled.h1`
  margin: 40px 0 15px 0;
  padding: 0 ${({ theme }) => theme.paddings.main};
  font-size: 28px;
  font-weight: bold;
`

const PanelHeader: FC<PanelHeaderProps> = ({ className, children }) => {
  return <Root className={className}>{children}</Root>
}

export default PanelHeader
