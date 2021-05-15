import React, { FC, SyntheticEvent } from 'react'
import styled from 'styled-components'

interface TouchableProps {
  className?: string
  onClick?: (e: SyntheticEvent) => any
}

const Root = styled.button`
  display: block;
  width: 100%;
  transition: 0.15s;
  background: transparent;
  border: none;
  outline: none;
  text-align: left;
  padding: 0;
  font-family: var(--font-common);
  &:active {
    transform: scale(0.95);
  }
`

const Touchable: FC<TouchableProps> = ({ className, children, onClick }) => {
  return (
    <Root className={className} onClick={onClick}>
      {children}
    </Root>
  )
}

export default Touchable
