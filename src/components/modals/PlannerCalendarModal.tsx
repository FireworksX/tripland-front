import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { ModalPage, ModalPageHeader } from '@vkontakte/vkui'
import { useStore } from '~/hooks/useStore'
import DatePicker from '~/components/DatePicker'
import { formatDate, phpFormat } from '~/utils/dateUtils'

interface PlannerCalendarModalProps {
  id: string
  className?: string
}

const Root = styled.div``

const PlannerCalendarModal: FC<PlannerCalendarModalProps> = ({ className, id }) => {
  const { plannerStore } = useStore()

  const dates = useMemo(
    () =>
      [plannerStore.buildRoute.dateFrom, plannerStore.buildRoute.dateTo]
        .filter(Boolean)
        .map(date => new Date(date || '')),
    [plannerStore]
  )

  const minDate = useMemo(() => (dates.length === 1 ? new Date(plannerStore.buildRoute.dateFrom || '') : new Date()), [
    plannerStore.buildRoute
  ])

  const onSelectDate = (date: Date | Date[]) => {
    const formatedDate = formatDate(Array.isArray(date) ? date[0] : date, phpFormat)
    if (dates.length === 0) {
      plannerStore.buildRoute.setDate('dateFrom', formatedDate)
    } else if (dates.length === 1) {
      plannerStore.buildRoute.setDate('dateTo', formatedDate)
      plannerStore.setActiveModal(null)
    } else {
      plannerStore.buildRoute.resetDates()
      plannerStore.buildRoute.setDate('dateFrom', formatedDate)
    }
  }

  return (
    <ModalPage id={id} className={className}>
      <ModalPageHeader>Выберите даты</ModalPageHeader>
      <DatePicker value={dates.length > 0 ? dates : null} minDate={minDate} onChange={onSelectDate} />
    </ModalPage>
  )
}

export default PlannerCalendarModal
