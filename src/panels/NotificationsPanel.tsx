import React, { FC } from 'react'
import styled from 'styled-components'
import Panel from '~/components/Panel'
import PanelHeader from '~/components/PanelHeader'
import { Div } from '~/components/Div'
import bellPlaceholder from '~static/images/bellPlaceholder.png'
import Image from '~/components/Image'
import { Placeholder } from '@vkontakte/vkui'
import NotificationCard from '~/components/NotificationCard'
import { useStore } from '~/hooks/useStore'

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
  const {
    notificationsStore: { list }
  } = useStore()

  return (
    <Root id={id} className={className}>
      <PanelHeader>Уведомления</PanelHeader>
      {list.length === 0 && (
        <Placeholder icon={<Image src={bellPlaceholder} />}>
          Вы еще не получали уведомлений. Здесь будет храниться информация о ближайших поездках
        </Placeholder>
      )}
      <Div>
        {list.map(card => (
          <ContentRow>
            <NotificationCard title={card.title} text={card.text} checked={card.checked} />
          </ContentRow>
        ))}
      </Div>
    </Root>
  )
}

export default NotificationsPanel
