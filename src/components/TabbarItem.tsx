import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Touchable, { TouchableProps } from '~/components/Touchable'

interface TabbarItemProps extends TouchableProps {
  selected?: boolean
  icon?: ReactNode
  indicator?: ReactNode
  className?: string
}

const Root = styled(Touchable)<{ selected?: boolean } & TouchableProps>`
  flex-shrink: 0;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme, selected }) => (selected ? theme.colors.accent : theme.colors.icon)};
  text-decoration: none;
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  margin-top: 2px;
`

const Wrapper = styled.div`
  align-self: center;
  display: flex;
  max-width: 100%;
  padding: 0 2px;
`

const Icon = styled.div`
  position: relative;
`

const Indicator = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18px;
  min-width: 18px;
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.textColorWhite};
  background: ${({ theme }) => theme.colors.red};
`

const TabbarItem: FC<TabbarItemProps> = ({ children, className, selected, icon, indicator, onClick }) => {
  return (
    <Root className={className} selected={selected} onClick={onClick}>
      <Wrapper>
        <Icon>
          {icon}
          {indicator && <Indicator>{indicator}</Indicator>}
        </Icon>
      </Wrapper>
      {children}
    </Root>
  )
}

export default TabbarItem
