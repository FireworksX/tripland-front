import React, { FC } from 'react'
import { ModalRoot, View } from '@vkontakte/vkui'
import { PlannerPanel } from '~/panels/PlannerPanel.tsx'
import { PANEL_NAMES } from '~router/constants'
import { useStore } from '~/hooks/useStore'
import CitiesListModal from '~/components/modals/CitiesListModal'
import { cityModelType } from '~/store/models/cityModel'
import PlannerCalendarModal from '~/components/modals/PlannerCalendarModal'
import PlannerSelectGenresPanel from '~/panels/PlannerSelectGenresPanel'
import PlannerSelectPeoplesPanel from '~/panels/PlannerSelectPeoplesPanel'
import { useRouteViews } from '~/hooks/useRouteViews'

interface ProfileView {
  id: string
}

const PlannerView: FC<ProfileView> = () => {
  const { panel } = useRouteViews()
  const { plannerStore } = useStore()

  const onSelectCity = (city: cityModelType) => {
    plannerStore.setActiveModal(null)
    plannerStore.selectCity(city)
  }

  const ModalRootFragment = (
    <ModalRoot activeModal={plannerStore.activeModal} onClose={() => plannerStore.setActiveModal(null)}>
      <CitiesListModal id='cities' onSelect={onSelectCity} />
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
