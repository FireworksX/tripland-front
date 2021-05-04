import React, { FC } from 'react'
import styled from 'styled-components'

interface SeeMoreCardProps {
  className?: string
}

const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.radius.main};
  padding: 7px;
  height: 100%;
`

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.main};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 50%;
`

const SeeMoreCard: FC<SeeMoreCardProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Wrapper>
          <Circle/>
      </Wrapper>
    </Root>
  )
}

export default SeeMoreCard
