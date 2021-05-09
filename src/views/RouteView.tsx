import React, { FC } from 'react'
import { ModalRoot, View } from '@vkontakte/vkui'
import { PlannerPanel } from '~/panels/PlannerPanel.tsx'
import { PANEL_NAMES } from '~router/constants'
import useStore from '~/hooks/useStore'
import CitiesListModal from '~/components/modals/CitiesListModal'
import { cityModelType } from '~/store/models/cityModel'
import PlannerCalendarModal from '~/components/modals/PlannerCalendarModal'
import PlannerSelectGenresPanel from '~/panels/PlannerSelectGenresPanel'
import PlannerSelectPeoplesPanel from '~/panels/PlannerSelectPeoplesPanel'
import Panel from '~/components/Panel'

interface RouteView {
  id: string
}

const RouteView: FC<RouteView> = () => {
  // const ModalRootFragment = (
  //   <ModalRoot activeModal={plannerStore.activeModal} onClose={() => plannerStore.setActiveModal(null)}>
  //     <CitiesListModal id='cities' onSelect={onSelectCity} />
  //     <PlannerCalendarModal id='calendar' />
  //   </ModalRoot>
  // )

  return (
    <View activePanel={'main'}>
      <Panel id={'main'}>
        <h2>tset</h2>
      </Panel>
    </View>
  )
}

export default RouteView
