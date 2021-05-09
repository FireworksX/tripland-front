import React, { FC } from 'react'
import styled from 'styled-components'
import { Panel as VKPanel } from '@vkontakte/vkui'

interface PanelProps {
  id: string
}

const Root = styled.div``

const Panel: FC<PanelProps> = ({ children, id }) => {
  return (
    <VKPanel id={id}>
      <Root>{children}</Root>
    </VKPanel>
  )
}

export default Panel
