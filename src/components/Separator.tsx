import React, { FC } from 'react'
import styled from 'styled-components'

interface SeparatorProps {
  size?: 'small' | 'medium'
  padding?: boolean
  className?: string
}

const heightsBySize = {
  small: 1,
  medium: 3
}

const Root = styled.div<Omit<SeparatorProps, 'classname'>>`
  height: ${({ size }) => heightsBySize[size || 'small']}px;
  background: ${({ theme }) => theme.colors.border};
  margin: 0 ${({ theme, padding }) => padding && theme.paddings.main};

  & + & {
    display: none;
  }
`

const Separator: FC<SeparatorProps> = ({ className, ...rest }) => {
  return <Root className={className} {...rest} />
}

export default Separator
