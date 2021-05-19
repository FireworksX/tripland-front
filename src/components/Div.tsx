import { FC } from 'react'
import styled from 'styled-components'

interface DivProps {
  className?: string
}

const Root = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.main};
`

export const Div: FC<DivProps> = ({ children, className }) => {
  return <Root className={className}>{children}</Root>
}
