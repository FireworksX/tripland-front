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
import DetailPanel from "~/panels/DetailPanel";

interface DetailViewProps {
  id: string
}

const DetailView: FC<DetailViewProps> = () => {
  return (
    <View activePanel={PANEL_NAMES.detailIndex}>
      <DetailPanel id={PANEL_NAMES.detailIndex}/>
    </View>
  )
}

export default DetailView