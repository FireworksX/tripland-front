import React, { FC } from 'react'

interface IconCaretLeftProps {
  size?: number
}

export const IconCaretLeft: FC<IconCaretLeftProps> = ({ size = 28 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 32 32'
      id='IconCaretLeft'
    >
      <path
        d='M20 26L10 16L20 6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
