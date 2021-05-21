import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import DisplayRating from '~/components/DisplayRating'
import Touchable, { TouchableProps } from '~/components/Touchable'

interface DirectionCardProps extends TouchableProps {
  name: string
  cover?: string
  region?: string
  duration?: number
  rating?: number
}

const Root = styled(Touchable)`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 160px;
  padding: 5px;
`

const Cover = styled(Image)<ImageProps>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.main};
  z-index: -1;
`

const Information = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.radius.second};
  padding: 8px 10px;
  width: 100%;
`

const InformationName = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 6px;

  span {
    font-weight: 500;
    font-size: 9px;
    margin-left: 3px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const InformationRow = styled.div`
  display: flex;
  align-items: center;
`

const InformationCell = styled.div`
  font-weight: 500;
  font-size: 9px;
  color: ${({ theme }) => theme.colors.secondary};
  &:after {
    content: '•';
    margin-left: 5px;
    margin-right: 5px;
  }
`

const DirectionCard: FC<DirectionCardProps> = ({ cover, name, duration, region, rating, onClick }) => {
  return (
    <Root onClick={onClick}>
      <Cover src={cover} />
      <Information>
        <InformationName>
          {name}, <span>{region}</span>
        </InformationName>
        <InformationRow>
          <InformationCell>{duration} дней</InformationCell>
          {rating && <DisplayRating value={rating} />}
        </InformationRow>
      </Information>
    </Root>
  )
}

export default DirectionCard
