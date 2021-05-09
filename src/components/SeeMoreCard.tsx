import React, { FC } from 'react'
import styled from 'styled-components'
import { IconPlus } from '~/components/icons/IconPlus'

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
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SeeMoreCard: FC<SeeMoreCardProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Wrapper>
        <Circle>
          <IconPlus size={24} />
        </Circle>
      </Wrapper>
    </Root>
  )
}

export default SeeMoreCard
