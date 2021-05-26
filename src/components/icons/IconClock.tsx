import React, { FC } from 'react'

interface IconClockProps {
  size?: number
}

export const IconClock: FC<IconClockProps> = ({ size = 28 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 32 32' id='IconClock'>
      <path
        d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z'
        stroke='currentColor'
        strokeWidth='2'
        stroke-miterlimit='10'
      />
      <path d='M16 9V16H23' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
