import React from 'react'
import styled from 'styled-components'
import { Panel as VKPanel } from '@vkontakte/vkui'

interface PanelProps {
  id: string
}

const Root = styled(VKPanel)<{ id: string }>`
  min-height: 100vh;
`

const Panel: React.FunctionComponent<PanelProps> = ({ children, id }) => {
  return (
    <Root id={id}>
      <div>{children}</div>
    </Root>
  )
}

export default Panel
