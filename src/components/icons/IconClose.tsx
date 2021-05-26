import React, { FC } from 'react'

interface IconCloseProps {
  size?: number
}

export const IconClose: FC<IconCloseProps> = ({ size = 28 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 32 32' id='IconClose'>
      <path d='M25 7L7 25' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M25 25L7 7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
