import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRoute } from 'react-router5'
import { Icon28Notification, Icon28User } from '@vkontakte/icons'
import { Epic, Panel, PanelHeader, PanelHeaderBack, Tabbar, TabbarItem, View } from '@vkontakte/vkui'
import { PANEL_NAMES, STORY_NAMES } from '~router/constants'
import { buildPath } from '~/utils/buildRouteName'
import ProfileView from '~/views/ProfileView'
import { Icon28Like } from '~/components/icons/Icon28Like.tsx'
import PlannerView from '~/views/PlannerView'
import useStore from '~/hooks/useStore'
import { IconPlusCircleFill } from '~/components/icons/IconPlusCircleFill'

const Index: NextPage = () => {
  const { route, router } = useRoute()
  const store = useStore()

  const activeStory = route?.name?.split('.')[0] || STORY_NAMES.planner

  const onSelectStory = (story: any, panel: any) => router.navigate(buildPath(story, panel))

  useEffect(() => {
    store.citiesStore.loadList()
  }, [])

  return (
    <Epic
      activeStory={activeStory}
      tabbar={
        <Tabbar>
          <TabbarItem
            selected={activeStory === STORY_NAMES.planner}
            text='Планнер'
            onClick={() => onSelectStory(STORY_NAMES.planner, PANEL_NAMES.plannerIndex)}
          >
            <IconPlusCircleFill />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.favorites}
            text='Избранное'
            onClick={() => onSelectStory(STORY_NAMES.favorites, PANEL_NAMES.plannerIndex)}
          >
            <Icon28Like />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.notifications}
            text='Уведомления'
            onClick={() => onSelectStory(STORY_NAMES.notifications, PANEL_NAMES.plannerIndex)}
          >
            <Icon28Notification />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.profile}
            data-story='clips'
            text='Профиль'
            onClick={() => onSelectStory(STORY_NAMES.profile, PANEL_NAMES.plannerIndex)}
          >
            <Icon28User />
          </TabbarItem>
        </Tabbar>
      }
    >
      <PlannerView id={STORY_NAMES.planner} />
      <View id={STORY_NAMES.favorites} activePanel='feed'>
        <Panel id='feed'>
          <PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
        </Panel>
      </View>
      <View id={STORY_NAMES.notifications} activePanel='feed'>
        <Panel id='feed'>
          <PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
        </Panel>
      </View>
      <ProfileView id={STORY_NAMES.profile} />
    </Epic>
  )
}

export default Index
