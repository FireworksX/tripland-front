import React, { FC } from 'react'
import { PANEL_NAMES } from '~router/constants'
import HomePanel from '~/panels/HomePanel'
import View from "~/components/View";

interface HomeOneProps {
  id: string
}

const HomeOne: FC<HomeOneProps> = () => {
  return (
    <View activePanel={PANEL_NAMES.homeIndex}>
      <HomePanel id={PANEL_NAMES.homeIndex} />
    </View>
  )
}

export default HomeOne
