import React, { FC } from 'react'
import styled from 'styled-components'
import { ModalPage, ModalPageHeader, SimpleCell } from '@vkontakte/vkui'
import useStore from '~/hooks/useStore'
import {cityModelType} from "~/store/models/cityModel";

interface CitiesListModalProps {
  id: string
  className?: string
  onSelect: (city: cityModelType) => any
}

const Root = styled.div``

const CitiesListModal: FC<CitiesListModalProps> = ({ className, id, onSelect }) => {
  const { citiesStore } = useStore()
  return (
    <ModalPage id={id} className={className}>
      <ModalPageHeader>Города</ModalPageHeader>
      {citiesStore.list.map(city => (
        <SimpleCell expandable onClick={() => onSelect(city)}>
          {city.name}
        </SimpleCell>
      ))}
    </ModalPage>
  )
}

export default CitiesListModal
