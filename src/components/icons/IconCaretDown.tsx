import React, { FC } from 'react'

interface IconCaretDownProps {
  size?: number
  className?: string
}

export const IconCaretDown: FC<IconCaretDownProps> = ({ className, size = 28 }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 28 28'
      id='IconCaretDown'
    >
      <path
        d='M26 12L16 22L6 12'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
