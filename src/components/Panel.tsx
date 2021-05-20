import React, { FC } from 'react'
import styled from 'styled-components'
import { Panel as VKPanel } from '@vkontakte/vkui'

interface PanelProps {
  id: string
  className?: string
}

const Root = styled.div`
  padding-bottom: 20px;
  min-height: calc(100vh - var(--safe-area-inset-bottom) - var(--tabbar_height));
`

const Panel: FC<PanelProps> = ({ children, className, id }) => {
  return (
    <VKPanel id={id}>
      <Root className={className}>{children}</Root>
    </VKPanel>
  )
}

export default Panel
