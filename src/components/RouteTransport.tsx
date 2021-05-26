import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { IconCaretDown } from '~/components/icons/IconCaretDown'
import { IconCar } from '~/components/icons/IconCar'
import useToggle from '~/hooks/useToggle'
import Touchable, { TouchableProps } from '~/components/Touchable'

export type TransportType = 'auto' | 'hiking' | 'taxi'

interface RouteTransportProps extends TouchableProps {
  list: { type: TransportType; minutes: number }[]
  className?: string
}

const Root = styled.div`
  padding: 20px 0;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 27px;
    width: 1px;
    height: 18px;
    background: ${({ theme }) => theme.colors.gray};
  }

  &:after {
    bottom: 0;
    top: initial;
  }
`

const Row = styled(Touchable)<TouchableProps>`
  display: flex;
  align-items: center;
  margin-top: 7px;

  &:first-child {
    margin-top: 0;
  }
`

const CaretIcon = styled(IconCaretDown)<{ isOpen?: boolean; hidden?: boolean }>`
  width: 12px;
  margin-right: 5px;
  transform: rotate(${({ isOpen }) => isOpen && '-90deg'});
  transition: 0.3s;
  visibility: ${({ hidden }) => hidden && 'hidden'};
`

const TransportIcon = styled.div`
  width: 20px;
  margin-right: 5px;
`

const RouteTransport: FC<RouteTransportProps> = ({ className, list }) => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const parsedList = useMemo(() => list.sort((a, b) => b.minutes - a.minutes), [list])

  return (
    <Root className={className}>
      {parsedList.slice(0, isOpen ? 10 : 1).map(({ minutes }, index) => (
        <Row animated={false} onClick={toggleIsOpen}>
          <CaretIcon hidden={index !== 0} size={12} isOpen={isOpen} />
          <TransportIcon>
            <IconCar size={20} />
          </TransportIcon>
          {minutes} мин.
        </Row>
      ))}
    </Root>
  )
}

export default RouteTransport
