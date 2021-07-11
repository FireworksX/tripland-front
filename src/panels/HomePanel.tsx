import React, { FC } from 'react'
import styled from 'styled-components'
import { buildFont } from '~/utils/styledBuilder'
import { Div } from '~/components/Div'
import Touchable from '~/components/Touchable'
import FavoritesRouteCard from '~/components/FavoritesRouteCard'
import { useStore } from '~/hooks/useStore'
import { buildRouteName } from '~/utils/buildRouteName'
import { ROUTE_NAMES } from '~router/constants'

interface HomePanelProps {
  id: string
  className?: string
}

const Root = styled.div``

const Header = styled.div`
  background: linear-gradient(116.04deg, #7b79ee 0%, #579aff 99.96%);
  padding: 40px ${({ theme }) => theme.paddings.main};
  border-radius: 0 0 20px 20px;
  text-align: center;
  ${({ theme }) => buildFont({ size: '20-24', weight: 'bold', color: theme.colors.textColorWhite })}
  margin-bottom: 150px;
`

const Title = styled.h2`
  ${({ theme }) => buildFont({ size: '16-20', weight: 'medium', color: theme.colors.textColor })}
  margin-bottom: 12px;
`

const Text = styled.p`
  ${buildFont({ size: '14-20', weight: 'regular' })}
  color: #4a4a4a;
  margin-bottom: 40px;
`

const StartButton = styled(Touchable)`
  padding: 15px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textColorWhite};
  border-radius: ${({ theme }) => theme.radius.main};
  text-align: center;
`

const InfoGroup = styled(Div)`
  margin-bottom: 100px;
`

const GroupHeader = styled.h3`
  ${buildFont({ size: '16-20', weight: 'semi' })}
  margin-bottom: 10px;
`

const RouteCard = styled(FavoritesRouteCard)`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`

const HomePanel: FC<HomePanelProps> = ({ className }) => {
  const {
    routerStore: { push }
  } = useStore()

  const onSubmit = () => {
    push(buildRouteName(ROUTE_NAMES.plannerRoot, ROUTE_NAMES.plannerSelectGenres))
  }

  return (
    <Root className={className}>
      <Header>
        <h1>Удобный планировщик ваших путешествий</h1>
      </Header>
      <Div>
        <InfoGroup>
          <Title>Привет ✌️ Это сервис планирования путешествий tripland.co</Title>
          <Text>
            Прямо сейчас мы сэкономим вам время и просчитаем крутой маршрут для вашей поедки, предложим интересные и
            даже тайные места. Договоримся с гидами чтобы записать вас на экскурсию и много чего ещё.
          </Text>
          <StartButton onClick={onSubmit}>Приступить</StartButton>
        </InfoGroup>

        {/*<GroupHeader>Мои путешествия (3)</GroupHeader>*/}
        {/*{favoritesStore.routes.map(el => (*/}
        {/*  <RouteCard*/}
        {/*    name={el.name}*/}
        {/*    cover={el.cover}*/}
        {/*    places={el.places}*/}
        {/*    startDate={el.startDate}*/}
        {/*    endDate={el.endDate}*/}
        {/*    onClick={() => push(buildRouteName(ROUTE_NAMES.detail))}*/}
        {/*  />*/}
        {/*))}*/}
      </Div>
    </Root>
  )
}

export default HomePanel
