import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import { buildFont } from '~/utils/styledBuilder'
import { IconMenPlaceholder } from '~/components/icons/IconMenPlaceholder'

interface TravelerCardProps {
  className?: string
}

const Root = styled.div`
  padding: 20px 10px;
  border-radius: ${({ theme }) => theme.radius.main};
  background: linear-gradient(116.04deg, #7b79ee 0%, #579aff 99.96%);
`

const Avatar = styled.div`
  margin-bottom: 30px;
`

const AvatarSource = styled(Image)<ImageProps>``

const Name = styled.div`
  ${({ theme }) => buildFont({ size: '14-20', weight: 'bold', color: theme.colors.textColorWhite })}
  margin-bottom: 5px;
  text-transform: uppercase;
`

const BirthDay = styled.div`
  ${({ theme }) => buildFont({ size: '10-12', color: theme.colors.textColorWhite })}
`

const TravelerCard: FC<TravelerCardProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Avatar>
        <IconMenPlaceholder />
        {/*<AvatarSource />*/}
      </Avatar>
      <Name>ИМЯ ФАМИЛИЯ</Name>
      <BirthDay>Год рождения</BirthDay>
    </Root>
  )
}

export default TravelerCard
