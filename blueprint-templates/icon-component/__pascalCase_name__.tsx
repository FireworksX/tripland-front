import React, { FC } from 'react'

interface {{pascalCase name}}Props {
  size?: number
}

export const {{pascalCase name}}: FC<{{pascalCase name}}Props> = ({ size = 28 }) => {
  return (
      <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 28 28' id='{{pascalCase name}}'></svg>
  )
}
