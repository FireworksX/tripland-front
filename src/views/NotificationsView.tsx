import React, { FC } from 'react'
import { View } from '@vkontakte/vkui'
import { PANEL_NAMES } from '~router/constants'
import NotificationsPanel from '~/panels/NotificationsPanel'

interface NotificationsViewProps {
  id: string
}

const NotificationsView: FC<NotificationsViewProps> = () => {
  return (
    <View activePanel={PANEL_NAMES.notificationsIndex}>
      <NotificationsPanel id={PANEL_NAMES.notificationsIndex} />
    </View>
  )
}

export default NotificationsView
