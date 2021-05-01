import { FC } from 'react'

interface Icon28LikeProps {
  size?: number
}

export const Icon28Like: FC<Icon28LikeProps> = ({ size = 28 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 28 28' id='like_28'>
      <path
        d='M9.026 4.88A6.526 6.526 0 002.5 11.406c0 3.613 1.445 5.421 7.493 10.126l2.78 2.16a2 2 0 002.455 0l2.779-2.16c6.048-4.705 7.493-6.513 7.493-10.126a6.526 6.526 0 00-6.526-6.526c-1.872 0-3.538.85-4.974 2.487C12.564 5.73 10.898 4.88 9.026 4.88z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
