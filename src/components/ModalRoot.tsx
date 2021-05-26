import React, { FC, useState } from 'react'
import Sheet from 'react-modal-sheet'
import styled from 'styled-components'

interface ModalRootProps {
  className?: string
}

const Root = styled.div``

const ModalRoot: FC<ModalRootProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Root className={className}>
      <button onClick={() => setIsOpen(true)}>open</button>
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <h1>test</h1>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </Root>
  )
}

export default ModalRoot
