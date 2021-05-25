import React, { FC } from 'react'
import styled from 'styled-components'

interface TabbarProps {
  className?: string
}

const Root = styled.div<{ length: number }>`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--tabbar_height);
  display: flex;
  align-items: stretch;
  justify-content: center;
  box-sizing: content-box;
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, 1fr);
  background: ${({ theme }) => theme.colors.backgroundWhite};
`

const Tabbar: FC<TabbarProps> = ({ className, children }) => {
  return (
    <Root className={className} length={React.Children.count(children)}>
      {children}
    </Root>
  )
}

export default Tabbar
