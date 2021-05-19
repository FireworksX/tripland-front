import React, { FC, useState } from 'react'
import { ActionSheet, ActionSheetItem, ModalRoot, View } from '@vkontakte/vkui'
import { PANEL_NAMES } from '~router/constants'
import RouteDetailPanel from '~/panels/RouteDetailPanel'
import {
  Icon28ErrorCircleOutline,
  Icon28LikeOutline,
  Icon28MoneySendOutline,
  Icon28DeleteOutline,
  Icon28ShareOutline
} from '@vkontakte/icons'
import FavoritesPanel from '~/panels/FavoritesPanel'

interface FavoritesView {
  id: string
}

const FavoritesView: FC<FavoritesView> = () => {
  return (
    <View activePanel={PANEL_NAMES.favoritesIndex}>
      <FavoritesPanel id={PANEL_NAMES.favoritesIndex} />
    </View>
  )
}

export default FavoritesView
