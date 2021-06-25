import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import Touchable, { TouchableProps } from '~/components/Touchable'
import { buildFont } from '~/utils/styledBuilder'

interface CoverCardProps extends TouchableProps {
  name: string
  cover: string
  badge?: string
  index?: number
}

const gradients = [
  'linear-gradient(116.04deg,#ee7979 0%,#ff5757 99.96%)',
  'linear-gradient(116.04deg, #7b79ee 0%, #579aff 99.96%)',
  'linear-gradient(116.04deg,#4caf50 0%,#4caf50 99.96%)',
  'linear-gradient(116.04deg,#f32195 0%,#7603f4 99.96%)'
]

const Root = styled(Touchable)<{ gradient: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.main};
  padding: ${({ theme }) => theme.paddings.main};
  background: ${({ gradient }) => gradient};
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
  ${({ theme }) => buildFont({ size: '14-20', weight: 'bold', color: theme.colors.textColorWhite })}
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

const CoverCard: FC<CoverCardProps> = ({ cover, name, badge, index = 0, onClick }) => {
  return (
    <Root gradient={gradients[index] || gradients[0]} onClick={onClick}>
      {cover && <Cover src={cover} />}
      <Name>{name}</Name>
      <Badge>{badge}</Badge>
    </Root>
  )
}

export default CoverCard
