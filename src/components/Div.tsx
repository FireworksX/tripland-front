import { FC } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.main};
`

export const Div: FC = ({ children }) => {
  return <Root>{children}</Root>
}
