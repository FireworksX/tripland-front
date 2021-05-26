import React, { FC } from 'react'
import styled from 'styled-components'
import WideCardGeneric, { WideCardGenericProps } from '~/components/WideCardGeneric'
import { buildFont } from '~/utils/styledBuilder'

interface NotificationCardProps {
  title: string
  text: string
  checked: boolean
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

const NotificationCard: FC<NotificationCardProps> = ({ className, title, text, checked }) => {
  return (
    <Root className={className} name={title}>
      {!checked && <Indicator />}
      <Description>{text}</Description>
    </Root>
  )
}

export default NotificationCard
