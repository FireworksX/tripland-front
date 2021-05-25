import React, { FC } from 'react'
import { PANEL_NAMES } from '~router/constants'
import FavoritesPanel from '~/panels/FavoritesPanel'
import View from '~/components/View'

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
