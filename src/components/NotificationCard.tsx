import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import { buildFont } from '~/utils/styledBuilder'

interface NotificationCardProps {
  className?: string
}

const Root = styled(WideCardGeneric)<WideCardGenericProps>``

const Description = styled.div`
  ${({ theme }) => buildFont({ size: '10-12', color: theme.colors.secondary })}
`

const Indicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.red};
  border-radius: 50%;
`

const NotificationCard: FC<NotificationCardProps> = ({ className }) => {
  return (
    <Root className={className} name='Приближается поездка'>
      <Indicator />
      <Description>Через 2 дня начинается Ваш маршрут “Москва — 24 апреля - 25 апреля”</Description>
    </Root>
  )
}

export default NotificationCard
