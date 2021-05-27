import React, { FC } from 'react'
import { useStore } from '~/hooks/useStore'
import { cityModelType } from '~/store/models/cityModel'
import ModalPage from '~/components/ModalPage'
import ModalPageHeader from '~/components/ModalPageHeader'
import Cell from '~/components/Cell'
import { Div } from '~/components/Div'

interface CitiesListModalProps {
  id: string
  className?: string
}

const CitiesListModal: FC<CitiesListModalProps> = ({ className, id }) => {
  const { citiesStore, plannerStore } = useStore()

  const onSelectCity = (city: cityModelType) => {
    plannerStore.setActiveModal(null)
    plannerStore.selectCity(city)
  }

  return (
    <ModalPage id={id} className={className} snapPoints={[205]}>
      <ModalPageHeader>Города</ModalPageHeader>
      <Div>
        {citiesStore.list.map(city => (
          <Cell expandable onClick={() => onSelectCity(city)}>
            {city.name}
          </Cell>
        ))}
      </Div>
    </ModalPage>
  )
}

export default CitiesListModal
