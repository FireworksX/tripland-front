import { useEffect } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { Icon28Notification } from '@vkontakte/icons'
import { ROUTE_NAMES, STORY_NAMES, VIEW_NAMES } from '~router/constants'
import PlannerView from '~/views/PlannerView'
import { useStore } from '~/hooks/useStore'
import { IconPlusCircleFill } from '~/components/icons/IconPlusCircleFill'
import RouteView from '~/views/RouteView'
import { useRouteViews } from '~/hooks/useRouteViews'
import FavoritesView from '~/views/FavoritesView'
import { ValueOf } from '~router/routes'
import { useRouter } from '~/hooks/useRouter'
import { Icon28Like } from '~/components/icons/Icon28Like'
import NotificationsView from '~/views/NotificationsView'
import ProfileView from '~/views/ProfileView'
import DetailView from '~/views/DetailView'
import Epic from '~/components/Epic'
import TabbarItem from '~/components/TabbarItem'
import Tabbar from '~/components/Tabbar'
import { buildRouteName } from '~/utils/buildRouteName'
import { isBrowser } from '~/utils/isBrowser'
import { buildFont } from '~/utils/styledBuilder'
import HomeOne from '~/views/HomeOne'

const TabbarStyled = styled(Tabbar)<{ isVisible: boolean }>`
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: 0.2s;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const EmptyTab = styled.div`
  ${buildFont({ size: '32-38', weight: 'bold' })}
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
`

const Index: NextPage = () => {
  const { story: activeStory, view: activeView } = useRouteViews()
  const store = useStore()
  const router = useRouter()

  const isVisibleTabbar = false //store.uiStore.visibleTabbar

  const onSelectStory = (name: ValueOf<typeof ROUTE_NAMES>) => router.push(buildRouteName(name))

  useEffect(() => {
    store.citiesStore.loadList()
  }, [])

  if (isBrowser && window.innerWidth > 768) {
    return <EmptyTab>Извените, но в данные момент интерфейс предназначен только для мобильных устройств.</EmptyTab>
  }

  return (
    <Epic
      activeStory={activeView}
      tabbar={
        <TabbarStyled isVisible={isVisibleTabbar}>
          <TabbarItem
            selected={activeStory === STORY_NAMES.planner}
            icon={<IconPlusCircleFill />}
            onClick={() => onSelectStory(ROUTE_NAMES.plannerRoot)}
          >
            Планнер
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.favorites}
            icon={<Icon28Like />}
            onClick={() => onSelectStory(ROUTE_NAMES.favoritesRoot)}
          >
            Избранное
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.notifications}
            icon={<Icon28Notification />}
            onClick={() => onSelectStory(ROUTE_NAMES.notifications)}
          >
            Уведомления
          </TabbarItem>
          <TabbarItem
            selected={activeStory === STORY_NAMES.profile}
            icon={<Icon28Notification />}
            onClick={() => onSelectStory(ROUTE_NAMES.profile)}
          >
            Профиль
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
      <HomeOne id={VIEW_NAMES.home} />
    </Epic>
  )
}

export default Index
