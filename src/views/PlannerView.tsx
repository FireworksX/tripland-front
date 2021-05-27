import React, { FC } from 'react'
import { PlannerPanel } from '~/panels/PlannerPanel.tsx'
import { PANEL_NAMES } from '~router/constants'
import { useStore } from '~/hooks/useStore'
import CitiesListModal from '~/components/modals/CitiesListModal'
import PlannerCalendarModal from '~/components/modals/PlannerCalendarModal'
import PlannerSelectGenresPanel from '~/panels/PlannerSelectGenresPanel'
import PlannerSelectPeoplesPanel from '~/panels/PlannerSelectPeoplesPanel'
import { useRouteViews } from '~/hooks/useRouteViews'
import View from '~/components/View'
import ModalRoot from '~/components/ModalRoot'

interface ProfileView {
  id: string
}

const PlannerView: FC<ProfileView> = () => {
  const { panel } = useRouteViews()
  const { plannerStore } = useStore()

  const ModalRootFragment = (
    <ModalRoot activeModal={plannerStore.activeModal} onClose={() => plannerStore.setActiveModal(null)}>
      <CitiesListModal id='cities' />
      <PlannerCalendarModal id='calendar' />
    </ModalRoot>
  )

  return (
    <View activePanel={panel || PANEL_NAMES.plannerIndex} modal={ModalRootFragment}>
      <PlannerPanel id={PANEL_NAMES.plannerIndex} />
      <PlannerSelectGenresPanel id={PANEL_NAMES.plannerSelectGenres} />
      <PlannerSelectPeoplesPanel id={PANEL_NAMES.plannerSelectPeople} />
    </View>
  )
}

export default PlannerView
