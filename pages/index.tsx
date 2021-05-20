import { useEffect } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { Icon28Notification, Icon28User } from '@vkontakte/icons'
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui'
import { ROUTE_NAMES, STORY_NAMES, VIEW_NAMES } from '~router/constants'
import PlannerView from '~/views/PlannerView'
import { useStore } from '~/hooks/useStore'
import { IconPlusCircleFill } from '~/components/icons/IconPlusCircleFill'
import { TabbarProps } from '@vkontakte/vkui/dist/components/Tabbar/Tabbar'
import RouteView from '~/views/RouteView'
import { useRouteViews } from '~/hooks/useRouteViews'
import FavoritesView from '~/views/FavoritesView'
import { ValueOf } from '~router/routes'
import { useRouter } from '~/hooks/useRouter'
import { Icon28Like } from '~/components/icons/Icon28Like'
import NotificationsView from '~/views/NotificationsView'
import ProfileView from '~/views/ProfileView'
import DetailView from '~/views/DetailView'

const TabbarStyled = styled(Tabbar)<TabbarProps & { isVisible: boolean }>`
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: 0.2s;
`

const Index: NextPage = () => {
  const { story: activeStory, view: activeView } = useRouteViews()
  const store = useStore()
  const router = useRouter()

  const isVisibleTabbar = store.uiStore.visibleTabbar

  const onSelectStory = (name: ValueOf<typeof ROUTE_NAMES>) => router.push(name)

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
            onClick={() => onSelectStory(ROUTE_NAMES.plannerRoot)}
          >
            <IconPlusCircleFill />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.favorites}
            text='Избранное'
            onClick={() => onSelectStory(ROUTE_NAMES.favoritesRoot)}
          >
            <Icon28Like />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.notifications}
            text='Уведомления'
            label={3}
            onClick={() => onSelectStory(ROUTE_NAMES.notifications)}
          >
            <Icon28Notification />
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.profile}
            text='Профиль'
            onClick={() => onSelectStory(ROUTE_NAMES.profile)}
          >
            <Icon28User />
          </TabbarItem>
        </TabbarStyled>
      }
    >
      <PlannerView id={VIEW_NAMES.planner} />
      <RouteView id={VIEW_NAMES.route} />
      <FavoritesView id={VIEW_NAMES.favorites} />
      <NotificationsView id={VIEW_NAMES.notifications} />
      <ProfileView id={VIEW_NAMES.profile} />
      <DetailView id={VIEW_NAMES.detail} />
    </Epic>
  )
}

export default Index
