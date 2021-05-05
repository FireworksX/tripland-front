import React, { FC } from 'react'
import { ModalRoot, View } from '@vkontakte/vkui'
import { IndexPanel } from '~views/planner/IndexPanel'
import { PANEL_NAMES } from '~router/constants'
import useStore from '~/hooks/useStore'
import CitiesListModal from '~components/modals/CitiesListModal'

interface ProfileView {
  id: string
}

const PlannerView: FC<ProfileView> = () => {
  const { plannerStore } = useStore()
  const ModalRootFragment = (
    <ModalRoot activeModal={plannerStore.activeModal}>
      <CitiesListModal id='cities' />
    </ModalRoot>
  )

  return (
    <View activePanel={PANEL_NAMES.plannerIndex} modal={ModalRootFragment}>
      <IndexPanel id={PANEL_NAMES.plannerIndex} />
    </View>
  )
}

export default PlannerView
