import React, { FC } from 'react'
import styled from 'styled-components'
import Sheet from 'react-modal-sheet'

interface ModalPageProps {
  id: string
  isOpen?: boolean
  className?: string
  snapPoints?: number[]
  onClose?: () => void
}

const Root = styled.div``

const ModalPage: FC<ModalPageProps> = ({
  className,
  snapPoints = [],
  children,
  isOpen = false,
  onClose = () => undefined
}) => {
  return (
    <Sheet
      isOpen={isOpen}
      snapPoints={[...snapPoints, 0]}
      springConfig={{
        stiffness: 300,
        damping: 50,
        mass: 0.8
      }}
      onClose={onClose}
    >
      <Sheet.Container>
        <Sheet.Content>
          <Root className={className}>{children}</Root>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  )
}

export default ModalPage
