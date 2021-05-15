import React, { FC } from 'react'
import styled from 'styled-components'

interface RouteTimeLineProps {
  value: number
  className?: string
}

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const Circle = styled.div<{ isFill: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme, isFill }) => isFill ? theme.colors.accent : theme.colors.border};
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme, isFill }) => isFill ? theme.colors.backgroundWhite : theme.colors.gray};
    left: 4px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`

const Line = styled.div`
  width: 3px;
  height: 100%;
  background: ${({ theme }) => theme.colors.border};
`

const Bar = styled.div<{ value: number }>`
  width: 3px;
  height: ${({ value }) => `${value}%`};
  background: ${({ theme }) => theme.colors.accent};
`

const RouteTimeLine: FC<RouteTimeLineProps> = ({ value, className }) => {
  return (
    <Root className={className}>
      <Circle isFill={value > 0} />
      <Line>
        <Bar value={value} />
      </Line>
    </Root>
  )
}

export default RouteTimeLine
