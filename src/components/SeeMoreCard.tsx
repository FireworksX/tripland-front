import React, { FC } from 'react'
import styled from 'styled-components'
import { IconPlus } from '~/components/icons/IconPlus'
import { buildFont } from '~/utils/styledBuilder'
import Touchable, { TouchableProps } from '~/components/Touchable'

interface SeeMoreCardProps extends TouchableProps {
  title?: string
  className?: string
}

const Root = styled(Touchable)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.main};
  display: flex;
  flex-direction: column;
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
  margin-bottom: 10px;
`

const Title = styled.div`
  ${({ theme }) => buildFont({ size: '12-16', weight: 'medium', color: theme.colors.secondary })}
`

const SeeMoreCard: FC<SeeMoreCardProps> = ({ className, title, onClick }) => {
  return (
    <Root className={className} onClick={onClick}>
      <Circle>
        <IconPlus size={24} />
      </Circle>
      {!!title && <Title>{title}</Title>}
    </Root>
  )
}

export default SeeMoreCard
