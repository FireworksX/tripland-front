import React, { FC } from 'react'
import styled from 'styled-components'

export interface PanelProps {
  id: string
  className?: string
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - var(--safe-area-inset-bottom));
  padding-bottom: var(--tabbar_height);
`

const Panel: FC<PanelProps> = ({ children, className, id }) => {
  return (
    <Root id={id} className={className}>
      {children}
    </Root>
  )
}

export default Panel
