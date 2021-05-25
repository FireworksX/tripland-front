import { useRef, useLayoutEffect } from 'react'
import { isBrowser } from '~/utils/isBrowser'

// https://ru.reactjs.org/docs/portals.html
// создает дом-элемент внутри body, который служит контейнером для портала

const createServerUsePortalTarget = () => {
  return () => null
}

const createBrowserUsePortalTarget = () => {
  const id = 'use-portal-root'
  let modalRoot = document.getElementById(id)!
  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', id)
    document.body.appendChild(modalRoot)
  }

  return () => {
    const elemRef = useRef<HTMLDivElement>(document.createElement('div'))

    useLayoutEffect(() => {
      const elem = elemRef.current
      modalRoot.appendChild(elem)

      return () => {
        modalRoot.removeChild(elem)
      }
    }, [])

    return elemRef.current
  }
}

const usePortalTarget = isBrowser ? createBrowserUsePortalTarget() : createServerUsePortalTarget()

export default usePortalTarget
