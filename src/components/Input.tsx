import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { buildFont } from '~/utils/styledBuilder'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Root = styled.div``

const InputComponent = styled.input`
  width: 100%;
  padding: 0 15px;
  outline: none;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.main};
  ${buildFont({ size: '14-20', weight: 'medium' })}
`

const Input: FC<InputProps> = ({ className, ...rest }) => {
  return (
    <Root className={className}>
      <InputComponent {...rest} />
    </Root>
  )
}

export default Input
