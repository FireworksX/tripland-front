import React, {FC, useState} from 'react'
import { ModalRoot, View } from '@vkontakte/vkui'
import { PANEL_NAMES } from '~router/constants'
import RouteDetailPanel from '~/panels/RouteDetailPanel'

interface RouteView {
  id: string
}

const RouteView: FC<RouteView> = () => {
    const [popout, setPopout] = useState()
  // const ModalRootFragment = (
  //   <ModalRoot activeModal={plannerStore.activeModal} onClose={() => plannerStore.setActiveModal(null)}>
  //     <CitiesListModal id='cities' onSelect={onSelectCity} />
  //     <PlannerCalendarModal id='calendar' />
  //   </ModalRoot>
  // )

  return (
    <View activePanel={PANEL_NAMES.routeDetail}>
      <RouteDetailPanel id={PANEL_NAMES.routeDetail} />
    </View>
  )
}

export default RouteView
