import React, {FC, ReactElement, useMemo} from 'react'
import { useIsomorphicLayoutEffect } from '~/utils/useIsomorphicLayoutEffect'
import { globalScrollController } from '~/utils/scroll'
import { useRouter } from '~/hooks/useRouter'
import {useStore} from "~/hooks/useStore";

interface ScrollSaverProps {
  initialScroll: number
  saveScroll: (scroll: number) => any
  children?: ReactElement
}

const scrollController = globalScrollController()

const ScrollSaver: FC<ScrollSaverProps> = ({ initialScroll, saveScroll, children }) => {
  const store = useStore()
  // const path = useMemo(() => store?.routerStore?.path, [])

  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      scrollController.scrollTo(0, initialScroll)
    }
    return () => saveScroll(scrollController.getScroll().y)
  }, [])

  return <>{children}</>
}

export default ScrollSaver
