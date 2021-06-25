import React, { FC } from 'react'
import styled from 'styled-components'

export interface PanelProps {
  id: string
  className?: string
  withPadding?: boolean
}

const Root = styled.div<{ withPadding?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - var(--safe-area-inset-bottom));
  padding-bottom: ${({ withPadding }) => withPadding && 'var(--tabbar_height)'};
  background: var(--background_content);
`

const Panel: FC<PanelProps> = ({ children, withPadding = true, className, id }) => {
  return (
    <Root id={id} className={className} withPadding={withPadding}>
      {children}
    </Root>
  )
}

export default Panel
