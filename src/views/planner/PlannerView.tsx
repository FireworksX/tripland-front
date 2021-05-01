import React, { FC } from 'react'
import { View } from '@vkontakte/vkui'
import { IndexPanel } from '~views/planner/IndexPanel'
import {PANEL_NAMES} from "~router/constants";

interface ProfileView {
  id: string
}

const PlannerView: FC<ProfileView> = () => {

  return (
    <View activePanel={PANEL_NAMES.plannerIndex}>
      <IndexPanel id={PANEL_NAMES.plannerIndex} />
    </View>
  )
}

export default PlannerView
