import React, { FC } from 'react'

interface IconPlacemarkProps {
  size?: number
}

export const IconPlacemark: FC<IconPlacemarkProps> = ({ size = 28 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 5.71545C0 7.93796 1.56812 11.1688 4.70437 15.4078L4.70436 15.4078C5.11702 15.9656 5.90369 16.0832 6.46145 15.6706C6.56157 15.5965 6.65012 15.508 6.72419 15.4079C9.86044 11.1688 11.4286 7.93796 11.4286 5.71545C11.4286 2.55562 8.87347 0 5.71429 0C2.5551 0 0 2.55562 0 5.71545ZM3.67347 5.71545C3.67347 4.58869 4.58775 3.67422 5.71429 3.67422C6.84082 3.67422 7.7551 4.58869 7.7551 5.71545C7.7551 6.84221 6.84082 7.75669 5.71429 7.75669C4.58775 7.75669 3.67347 6.84221 3.67347 5.71545Z'
        fill='currentColor'
      />
    </svg>
  )
}
