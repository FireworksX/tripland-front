import { FC, useCallback } from 'react'
import { Link, useRoute } from 'react-router5'
import { Icon28NewsfeedOutline, Icon28ServicesOutline, Icon28MessageOutline, Icon28ClipOutline } from '@vkontakte/icons'
import { Epic, Panel, PanelHeader, PanelHeaderBack, Tabbar, TabbarItem, View } from '@vkontakte/vkui'
import { PANEL_NAMES, STORY_NAMES } from '~router/constants'
import { buildPath, buildRouteName } from '~utils/buildRouteName'

const Index: FC = () => {
  const { route, router } = useRoute()

  const activeStory = route?.name?.split('.')[0] || STORY_NAMES.planner

  const onSelectStory = (story: any, panel: any) => router.navigate(buildPath(story, panel))

  return (
    <Epic
      activeStory={activeStory}
      tabbar={
        <Tabbar>
          <TabbarItem
            selected={activeStory === STORY_NAMES.planner}
            text='Новости'
            onClick={() => onSelectStory(STORY_NAMES.planner, PANEL_NAMES.plan)}
          >
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.favorites}
            text='Избранное'
            onClick={() => onSelectStory(STORY_NAMES.favorites, PANEL_NAMES.plan)}
          >
            <Icon28ServicesOutline />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.notifications}
            label='3'
            text='Оповещения'
            onClick={() => onSelectStory(STORY_NAMES.notifications, PANEL_NAMES.plan)}
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.profile}
            data-story='clips'
            text='Профиль'
            onClick={() => onSelectStory(STORY_NAMES.profile, PANEL_NAMES.plan)}
          >
            <Icon28ClipOutline />
          </TabbarItem>
        </Tabbar>
      }
    >
      <View id={STORY_NAMES.planner} activePanel='feed'>
        <Panel id='feed'>
          <PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
        </Panel>
      </View>
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
      <View id={STORY_NAMES.profile} activePanel='feed'>
        <Panel id='feed'>
          <PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
        </Panel>
      </View>
    </Epic>
  )
}

export default Index
