import React, { FC } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import { buildFont } from '~/utils/styledBuilder'
import { IconMenPlaceholder } from '~/components/icons/IconMenPlaceholder'
import { DateInput } from '~/utils/dateUtils'
import DateFormatter from '~/components/DateFormatter'
import Touchable, { TouchableProps } from '~/components/Touchable'

interface TravelerCardProps extends TouchableProps {
  firstName?: string
  lastName?: string
  birthDay?: DateInput
  className?: string
  index?: number
}

const gradients = [
  'linear-gradient(116.04deg,#ee7979 0%,#ff5757 99.96%)',
  'linear-gradient(116.04deg, #7b79ee 0%, #579aff 99.96%)',
  'linear-gradient(116.04deg,#79a8ee 0%,#5783ff 99.96%)'
]

const Root = styled(Touchable)<{ gradient: string }>`
  padding: 20px 10px;
  border-radius: ${({ theme }) => theme.radius.main};
  background: ${({ gradient }) => gradient};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const TravelerCard: FC<TravelerCardProps> = ({ className, index = 0, firstName, lastName, birthDay, onClick }) => {
  return (
    <Root className={className} gradient={gradients[index] || gradients[0]} onClick={onClick}>
      <Avatar>
        <IconMenPlaceholder />
        {/*<AvatarSource />*/}
      </Avatar>
      <div>
        <Name>
          {firstName} {lastName}
        </Name>
        <BirthDay>
          <DateFormatter value={birthDay} format='DD MMM YYYY' />
        </BirthDay>
      </div>
    </Root>
  )
}

export default TravelerCard
