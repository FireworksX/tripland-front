import React, { FC, ReactElement } from 'react'

interface ModalRootProps {
  activeModal?: string | null
  className?: string
  onClose?: () => void
}

const ModalRoot: FC<ModalRootProps> = ({ activeModal, children, onClose }) => {
  const childrenList: ReactElement[] = React.Children.toArray(children) as ReactElement[]
  const clonedChildren = childrenList.map((el: ReactElement) => {
    if (typeof el.type === 'function') {
      // @ts-ignore
      el = el.type(el.props)
    }

    return React.cloneElement(
      el,
      {
        ...el.props,
        isOpen: activeModal === el.props.id,
        onClose
      },
      el.props.children
    )
  })

  return <>{clonedChildren}</>
}

export default ModalRoot
