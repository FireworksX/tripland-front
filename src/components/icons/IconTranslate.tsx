import React, { FC } from 'react'

interface IconTranslateProps {
  size?: number
  className?: string
}

export const IconTranslate: FC<IconTranslateProps> = ({ className, size = 28 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M29 27L22 13L15 27' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M17 23H27' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M11 4V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M3 7H19' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M15 7C15 10.1826 13.7357 13.2348 11.4853 15.4853C9.23484 17.7357 6.1826 19 3 19'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.68359 11.0001C8.51222 13.3388 10.0451 15.3634 12.0715 16.7952C14.0979 18.227 16.5181 18.9958 18.9993 18.9958'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
