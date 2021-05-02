import React, { FC } from 'react'
import styled from 'styled-components'

export interface GroupProps {
  title: string
  description?: string
}

const Root = styled.div``

const Title = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`

const Description = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 20px;
  margin-bottom: 20px;
`

const Group: FC<GroupProps> = ({ title, description, children }) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </Root>
  )
}

export default Group
