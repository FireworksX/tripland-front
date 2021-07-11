import React, { FC } from 'react'
import styled from 'styled-components'
import Touchable from '~/components/Touchable'

interface ButtonLevelProps {
  value: number
  labels: string[]
  maxDeep?: number
  colorSchema?: { background: string; color: string }[]
  className?: string
  onClick: (newDeep: number) => any
}

const Root = styled(Touchable)<{ background?: string; color: string }>`
  padding: 15px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.radius.main};
  text-align: center;
`

const DEFAULT_COLOR_SCHEME = [
  {
    background: 'var(--step1)',
    color: 'var(--textColor)'
  },
  {
    background: 'var(--step2)',
    color: 'var(--textColor)'
  },
  {
    background: 'var(--step3)',
    color: 'var(--textColor)'
  },
  {
    background: 'var(--step4)',
    color: 'var(--textColorWhite)'
  },
  {
    background: 'var(--step5)',
    color: 'var(--textColorWhite)'
  }
]

const ButtonLevel: FC<ButtonLevelProps> = ({
  className,
  value,
  labels,
  maxDeep = 1,
  colorSchema = DEFAULT_COLOR_SCHEME,
  onClick
}) => {
  const proxyLabel = labels[value] || labels[0]

  const onPress = () => {
    const newValue = value + 1
    if (newValue > maxDeep) {
      onClick(0)
      return
    }
    onClick(newValue)
  }

  return (
    <Root
      className={className}
      background={colorSchema[value].background}
      color={colorSchema[value].color}
      onClick={onPress}
    >
      {proxyLabel}
    </Root>
  )
}

export default ButtonLevel
