import { useEffect } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { useRoute } from 'react-router5'
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui'
import { PANEL_NAMES, STORY_NAMES, VIEW_NAMES } from '~router/constants'
import { buildPath } from '~/utils/buildRouteName'
import PlannerView from '~/views/PlannerView'
import useStore from '~/hooks/useStore'
import { IconPlusCircleFill } from '~/components/icons/IconPlusCircleFill'
import { TabbarProps } from '@vkontakte/vkui/dist/components/Tabbar/Tabbar'
import RouteView from '~/views/RouteView'

const TabbarStyled = styled(Tabbar)<TabbarProps & { isVisible: boolean }>`
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: 0.2s;
`

const Index: NextPage = () => {
  const { route, router } = useRoute()
  const store = useStore()

  const isVisibleTabbar = store.uiStore.visibleTabbar
  const activeStory = route?.meta?.route?.storyName?.split('.')[0] || STORY_NAMES.planner
  const activeView = route?.name?.split('.')[0] || VIEW_NAMES.planner

  const onSelectStory = (story: any, panel: any) => router.navigate(buildPath(story, panel))

  useEffect(() => {
    store.citiesStore.loadList()
  }, [])

  return (
    <Epic
      activeStory={activeView}
      tabbar={
        <TabbarStyled isVisible={isVisibleTabbar}>
          <TabbarItem
            selected={activeStory === STORY_NAMES.planner}
            text='Планнер'
            onClick={() => onSelectStory(VIEW_NAMES.planner, PANEL_NAMES.plannerIndex)}
          >
            <IconPlusCircleFill />
          </TabbarItem>
        </TabbarStyled>
      }
    >
      <PlannerView id={VIEW_NAMES.planner} />
      <RouteView id={VIEW_NAMES.route} />
    </Epic>
  )
}

export default Index
