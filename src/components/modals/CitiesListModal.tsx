import React, { FC } from 'react'
import styled from 'styled-components'
import { ModalPage, ModalPageHeader, SimpleCell } from '@vkontakte/vkui'
import useStore from '~/hooks/useStore'

interface CitiesListModalProps {
  id: string
  className?: string
}

const Root = styled.div``

const CitiesListModal: FC<CitiesListModalProps> = ({ className, id }) => {
  const { citiesStore } = useStore()
  return (
    <ModalPage id={id} className={className}>
      <ModalPageHeader>Города</ModalPageHeader>
      {citiesStore.list.map(({ name }) => (
        <SimpleCell>{name}</SimpleCell>
      ))}
    </ModalPage>
  )
}

export default CitiesListModal
