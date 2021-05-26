import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { buildFont } from '~/utils/styledBuilder'
import { IconCaretRight } from '~/components/icons/IconCaretRight'
import Touchable, { TouchableProps } from '~/components/Touchable'

interface CellProps extends TouchableProps {
  indicator?: string | number
  before?: ReactNode
  className?: string
  expandable?: boolean
}

const Root = styled(Touchable)`
  display: flex;
  align-items: center;
`

const Before = styled.div`
  padding: 10px 0 10px 0;
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accentBlue};
`

const Content = styled.div`
  padding: 10px 0;
  flex-grow: 1;
  ${buildFont({ size: '14-20' })}
`

const Indicator = styled.div`
  margin-left: auto;
  ${({ theme }) => buildFont({ size: '14-20', weight: 'medium', color: theme.colors.secondary })}
`

const Expand = styled.div`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.secondary};
`

const Cell: FC<CellProps> = ({ className, before, indicator, children }) => {
  return (
    <Root className={className}>
      {before && <Before>{before}</Before>}
      <Content>{children}</Content>
      {indicator && <Indicator>{indicator}</Indicator>}
      <Expand>
        <IconCaretRight size={18} />
      </Expand>
    </Root>
  )
}

export default Cell
