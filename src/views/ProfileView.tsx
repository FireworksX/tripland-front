import React, { FC, useEffect, useState } from 'react'
import { Panel, PanelHeader, ScreenSpinner, View } from '@vkontakte/vkui'
import { useStore } from '@mozaikjs/react'

interface ProfileView {
  id: string
}

const ProfileView: FC<ProfileView> = () => {
  const { userStore } = useStore()
  const [popout, setPopout] = useState<any | null>(null)

  useEffect(() => {
    if (userStore.isLoading) {
      setPopout(<ScreenSpinner />)
    } else {
      setPopout(null)
    }
  }, [userStore.isLoading])

  useEffect(() => {
    userStore.getUser()
  }, [])

  return (
    <View activePanel='main' popout={popout}>
      <Panel id='main'>
        <PanelHeader>Profile</PanelHeader>
      </Panel>
    </View>
  )
}

export default ProfileView
