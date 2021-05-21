import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export interface TouchableProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Root = styled.div`
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
    <Root role='button' className={className} {...rest}>
      {children}
    </Root>
  )
}

export default Touchable
