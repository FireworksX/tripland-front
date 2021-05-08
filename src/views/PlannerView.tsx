import React, { FC } from 'react'
import { ModalRoot, View } from '@vkontakte/vkui'
import { PlannerPanel } from '~/panels/PlannerPanel.tsx'
import { PANEL_NAMES } from '~router/constants'
import useStore from '~/hooks/useStore'
import CitiesListModal from '~/components/modals/CitiesListModal'
import { cityModelType } from '~/store/models/cityModel'

interface ProfileView {
  id: string
}

const PlannerView: FC<ProfileView> = () => {
  const { plannerStore } = useStore()

  const onSelectCity = (city: cityModelType) => {
    plannerStore.setActiveModal(null)
    plannerStore.selectCity(city)
  }

  const ModalRootFragment = (
    <ModalRoot activeModal={plannerStore.activeModal} onClose={() => plannerStore.setActiveModal(null)}>
      <CitiesListModal id='cities' onSelect={onSelectCity} />
    </ModalRoot>
  )

  return (
    <View activePanel={PANEL_NAMES.plannerIndex} modal={ModalRootFragment}>
      <PlannerPanel id={PANEL_NAMES.plannerIndex} />
    </View>
  )
}

export default PlannerView
