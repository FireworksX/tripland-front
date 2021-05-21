import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import Touchable, { TouchableProps } from '~/components/Touchable'

interface ExcursionCardProps extends TouchableProps {
  className?: string
  name: string
  cover: string
  price?: number
}

const Root = styled(Touchable)``

const Cover = styled(Image)<ImageProps>`
  object-fit: cover;
  height: 170px;
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.radius.main};
`

const Title = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
  font-weight: 500;
`

const Description = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const ExcursionCard: FC<ExcursionCardProps> = ({ cover, name, price, className, onClick }) => {
  return (
    <Root className={className} onClick={onClick}>
      <Cover src={cover} />
      <Title>{name}</Title>
      <Description>
        {price}
        <span> / за человека</span>
      </Description>
    </Root>
  )
}

export default ExcursionCard
