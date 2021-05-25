import React, { FC } from 'react'
import { createPortal } from 'react-dom';
import usePortalTarget from "~/hooks/usePortalTarget";
import {isBrowser} from "~/utils/isBrowser";

interface AppPortalProps {
  className?: string
}

const AppPortal: FC<AppPortalProps> = ({ children }) => {
  const targetElem = usePortalTarget()

  if (!isBrowser) return null

  return createPortal(children, targetElem!)
}


export default AppPortal
