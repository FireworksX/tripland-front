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

interface RouteView {
  id: string
}

const RouteView: FC<RouteView> = () => {
  const [popout, setPopout] = useState<any>()

  const RouteCardActionSheet = (
    <ActionSheet
      onClose={() => setPopout(null)}
      iosCloseItem={
        <ActionSheetItem autoclose mode='cancel'>
          Отменить
        </ActionSheetItem>
      }
    >
      <ActionSheetItem autoclose before={<Icon28ErrorCircleOutline />}>
        Детальная информация
      </ActionSheetItem>
      <ActionSheetItem autoclose before={<Icon28LikeOutline />}>
        Добавить в избранное
      </ActionSheetItem>
      <ActionSheetItem autoclose before={<Icon28MoneySendOutline />}>
        Купить/забронировать
      </ActionSheetItem>
      <ActionSheetItem autoclose before={<Icon28ShareOutline />}>
        Поделиться
      </ActionSheetItem>
      <ActionSheetItem autoclose mode='destructive' before={<Icon28DeleteOutline />}>
        Удалить
      </ActionSheetItem>
    </ActionSheet>
  )
  // const ModalRootFragment = (
  //   <ModalRoot activeModal={plannerStore.activeModal} onClose={() => plannerStore.setActiveModal(null)}>
  //     <CitiesListModal id='cities' onSelect={onSelectCity} />
  //     <PlannerCalendarModal id='calendar' />
  //   </ModalRoot>
  // )

  return (
    <View activePanel={PANEL_NAMES.routeDetail} popout={popout}>
      <RouteDetailPanel id={PANEL_NAMES.routeDetail} onClickOptions={() => setPopout(RouteCardActionSheet)} />
    </View>
  )
}

export default RouteView
