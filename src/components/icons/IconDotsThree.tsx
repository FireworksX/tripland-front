import React, { FC } from 'react'

interface IconDotsThreeProps {
  size?: number
}

export const IconDotsThree: FC<IconDotsThreeProps> = ({ size = 28 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 32 32'
      id='IconDotsThree'
    >
      <path
        d='M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z'
        fill='currentColor'
        strokeWidth='2'
        stroke-miterlimit='10'
      />
      <path
        d='M6 19C7.65685 19 9 17.6569 9 16C9 14.3431 7.65685 13 6 13C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19Z'
        fill='currentColor'
        strokeWidth='2'
        stroke-miterlimit='10'
      />
      <path
        d='M26 19C27.6569 19 29 17.6569 29 16C29 14.3431 27.6569 13 26 13C24.3431 13 23 14.3431 23 16C23 17.6569 24.3431 19 26 19Z'
        fill='currentColor'
        strokeWidth='2'
        stroke-miterlimit='10'
      />
    </svg>
  )
}
