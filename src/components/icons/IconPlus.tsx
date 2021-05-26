import React, { FC } from 'react'

interface IconPlusProps {
  size?: number
}

export const IconPlus: FC<IconPlusProps> = ({ size = 28 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 32 32' id='IconPlus'>
      <path d='M5 16H27' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M16 5V27' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
