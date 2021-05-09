import React, { FC } from 'react'
import styled from 'styled-components'

interface RouteDetailPanelProps {
  className?: string
}

const Root = styled.div``

const RouteDetailPanel: FC<RouteDetailPanelProps> = ({ className }) => {
  return <Root className={className}></Root>
}

export default RouteDetailPanel
