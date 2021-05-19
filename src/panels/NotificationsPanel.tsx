import React, { FC } from 'react'
import styled from 'styled-components'
import Panel from '~/components/Panel'
import PanelHeader from '~/components/PanelHeader'
import { Div } from '~/components/Div'
import bellPlaceholder from '~static/images/bellPlaceholder.png'
import Image from '~/components/Image'
import { Placeholder } from '@vkontakte/vkui'
import NotificationCard from "~/components/NotificationCard";

interface NotificationsPanelProps {
  id: string
  className?: string
}

const Root = styled(Panel)``

const ContentRow = styled.div`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`

const NotificationsPanel: FC<NotificationsPanelProps> = ({ id, className }) => {
  return (
    <Root id={id} className={className}>
      <PanelHeader>Уведомления</PanelHeader>
      <Placeholder icon={<Image src={bellPlaceholder} />}>
        Вы еще не получали уведомлений. Здесь будет храниться информация о ближайших поездках
      </Placeholder>
      <Div>
        <ContentRow>
          <NotificationCard />
        </ContentRow>
      </Div>
    </Root>
  )
}

export default NotificationsPanel
