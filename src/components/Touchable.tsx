import React, { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

export interface TouchableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
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

const Touchable: FC<TouchableProps> = ({ className, children, ...rest }) => {
  return (
    <Root className={className} {...rest}>
      {children}
    </Root>
  )
}

export default Touchable
