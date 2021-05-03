import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~components/Image'

interface ExcursionCardProps {
  className?: string
  title: string
  cover: string
  price?: number
}

const Root = styled.div``

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

const ExcursionCard: FC<ExcursionCardProps> = ({ cover, title, price, className }) => {
  return (
    <Root className={className}>
      <Cover src={cover} />
      <Title>{title}</Title>
      <Description>
        {price}
        <span> / за человека</span>
      </Description>
    </Root>
  )
}

export default ExcursionCard
