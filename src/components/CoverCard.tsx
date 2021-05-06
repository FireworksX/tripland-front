import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'

interface CoverCardProps {
  name: string
  cover: string
  badge?: string
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.main};
  padding: ${({ theme }) => theme.paddings.main};
`

const Cover = styled(Image)<ImageProps>`
  object-fit: cover;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Name = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  position: relative;
`

const Badge = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.radius.main};
  display: inline-flex;
  font-size: 8px;
  font-weight: 500;
  padding: 5px 10px;
  position: relative;
`

const CoverCard: FC<CoverCardProps> = ({ cover, name, badge }) => {
  return (
    <Root>
      <Cover src={cover} />
      <Name>{name}</Name>
      <Badge>{badge}</Badge>
    </Root>
  )
}

export default CoverCard
