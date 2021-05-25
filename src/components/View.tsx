import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import AppPortal from '~/components/AppPortal'

interface ViewProps {
  activePanel: string
  popout?: ReactNode
  modal?: ReactNode
  className?: string
}

const Root = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  word-wrap: break-word;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  &:empty {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
`

const View: FC<ViewProps> = ({ className, children, activePanel, modal, popout }) => {
  const panels = React.Children.toArray(children) as ({ props: { id: string } } & ReactNode)[]
  return (
    <Root className={className}>
      <Content>{panels.find(({ props: { id } }) => id === activePanel)}</Content>
      {modal && <Modal>{modal}</Modal>}
      {popout && <Modal>{popout}</Modal>}
    </Root>
  )
}

export default View
