import React, { FC } from 'react'
import styled from 'styled-components'
import Panel from '~/components/Panel'
import PanelHeader from '~/components/PanelHeader'
import { HorizontalScroll, Placeholder } from '@vkontakte/vkui'
import Touchable from '~/components/Touchable'
import { buildFont } from '~/utils/styledBuilder'
import { Div } from '~/components/Div'
import FavoritesRouteCard from '~/components/FavoritesRouteCard'
import FavoritesPlaceCard from '~/components/FavoritesPlaceCard'
import lampPlaceholder from '~static/images/lampPlaceholder.png'
import Image from '~/components/Image'
import { useRouter } from '~/hooks/useRouter'
import { ROUTE_NAMES, ROUTE_PARAMS } from '~router/constants'
import { buildRouteName } from '~/utils/buildRouteName'

interface FavoritesPanelProps {
  id: string
  className?: string
}

const Root = styled(Panel)``

const Filters = styled(Div)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 15px;
`

const FilterButton = styled(Touchable)<{ isActive?: boolean }>`
  display: inline-flex;
  width: initial;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius.main};
  margin-right: 10px;
  background: ${({ theme, isActive }) => (isActive ? theme.colors.accent : theme.colors.border)};
  ${({ theme, isActive }) =>
    buildFont({ weight: 'medium', color: isActive ? theme.colors.textColorWhite : theme.colors.secondary })}

  &:last-child {
    margin-right: 0;
  }
`

const ContentRow = styled.div`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`

const FavoritesPanel: FC<FavoritesPanelProps> = ({ id, className }) => {
  const {
    params: { [ROUTE_PARAMS.favoritesMode]: mode },
    push
  } = useRouter()

  const onChange = (mode: string) => {
    push(buildRouteName(ROUTE_NAMES.favoritesRoot, ROUTE_NAMES.favoritesModes), {
      [ROUTE_PARAMS.favoritesMode]: mode
    })
  }

  return (
    <Root id={id} className={className}>
      <PanelHeader>Избранное</PanelHeader>
      <HorizontalScroll>
        <Filters>
          <FilterButton isActive={mode === 'routes'} onClick={() => onChange('routes')}>
            Маршруты
          </FilterButton>
          <FilterButton isActive={mode === 'places'} onClick={() => onChange('places')}>
            Места
          </FilterButton>
          <FilterButton isActive={mode === 'excursions'} onClick={() => onChange('excursions')}>
            Экскурсии
          </FilterButton>
          <FilterButton isActive={mode === 'restaurants'} onClick={() => onChange('restaurants')}>
            Рестораны
          </FilterButton>
        </Filters>
      </HorizontalScroll>
      {mode !== 'routes' && mode !== 'places' && (
        <Placeholder icon={<Image src={lampPlaceholder} />}>
          Вы еще не сохраняли маршруты или места. Сохраняйте их, чтобы не потерять
        </Placeholder>
      )}
      {mode === 'routes' && (
        <Div>
          {new Array(10).fill(null).map(_ => (
            <ContentRow>
              <FavoritesRouteCard name='2 дня в Москве' />
            </ContentRow>
          ))}
        </Div>
      )}
      {mode === 'places' && (
        <Div>
          {new Array(10).fill(null).map(_ => (
            <ContentRow>
              <FavoritesPlaceCard name='Парк Коломенское' />
            </ContentRow>
          ))}
        </Div>
      )}
    </Root>
  )
}

export default FavoritesPanel
