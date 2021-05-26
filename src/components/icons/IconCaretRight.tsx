import React, { FC } from 'react'

interface IconCaretRightProps {
  size?: number
  className?: string
}

export const IconCaretRight: FC<IconCaretRightProps> = ({ className, size = 28 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 6L22 16L12 26' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
