import React, { FC } from 'react'

interface IconPlusCircleFillProps {
  size?: number
}

export const IconPlusCircleFill: FC<IconPlusCircleFillProps> = ({ size = 28 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 32 32'
      id='IconPlusCircleFill'
    >
      <path
        d='M16 2.99976C13.4288 2.99976 10.9154 3.76219 8.77759 5.19065C6.63975 6.61911 4.97351 8.64943 3.98957 11.0249C3.00563 13.4003 2.74819 16.0142 3.2498 18.5359C3.75141 21.0577 4.98953 23.3741 6.80762 25.1921C8.6257 27.0102 10.9421 28.2484 13.4638 28.75C15.9856 29.2516 18.5995 28.9941 20.9749 28.0102C23.3503 27.0263 25.3807 25.36 26.8091 23.2222C28.2376 21.0843 29 18.5709 29 15.9998C28.996 12.5532 27.6251 9.24888 25.188 6.81177C22.7509 4.37466 19.4466 3.00374 16 2.99976ZM21 16.9998H17V20.9998C17 21.265 16.8946 21.5193 16.7071 21.7069C16.5196 21.8944 16.2652 21.9998 16 21.9998C15.7348 21.9998 15.4804 21.8944 15.2929 21.7069C15.1054 21.5193 15 21.265 15 20.9998V16.9998H11C10.7348 16.9998 10.4804 16.8944 10.2929 16.7069C10.1054 16.5193 10 16.265 10 15.9998C10 15.7345 10.1054 15.4802 10.2929 15.2926C10.4804 15.1051 10.7348 14.9998 11 14.9998H15V10.9998C15 10.7345 15.1054 10.4802 15.2929 10.2926C15.4804 10.1051 15.7348 9.99976 16 9.99976C16.2652 9.99976 16.5196 10.1051 16.7071 10.2926C16.8946 10.4802 17 10.7345 17 10.9998V14.9998H21C21.2652 14.9998 21.5196 15.1051 21.7071 15.2926C21.8946 15.4802 22 15.7345 22 15.9998C22 16.265 21.8946 16.5193 21.7071 16.7069C21.5196 16.8944 21.2652 16.9998 21 16.9998Z'
        fill='currentColor'
      />
    </svg>
  )
}
