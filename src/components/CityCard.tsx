import React, { FC } from 'react'
import styled from 'styled-components'
import Image from '~/components/Image'
import { IconPlacemark, IconPlacemarkProps } from '~/components/icons/IconPlacemark'

interface CityCardProps {
  cover: string
  name: string
}

const Cover = styled(Image)`
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.radius.main};
  height: 100px;
`

const Icon = styled.div`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.accent};
`

const Name = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 12px;
`

const CityCard: FC<CityCardProps> = ({ cover, name }) => {
  return (
    <div>
      <Cover src={cover} />
      <Name>
        <Icon>
          <IconPlacemark size={15} />
        </Icon>
        {name}
      </Name>
    </div>
  )
}

export default CityCard
