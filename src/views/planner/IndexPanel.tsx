import { Panel } from '@vkontakte/vkui'
import { FC } from 'react'
import styled from 'styled-components'
import { Div } from '~components/Div'
import { PlannerBuilder } from '~components/PlannerBuilder'

interface IndexPanel {
  id: string
}

const Header = styled.div`
  height: 260px;
  position: relative;
  padding: 55px 0 0 0;
`

const HeaderGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
`

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textColorWhite};
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`

export const IndexPanel: FC<IndexPanel> = ({ id }) => {
  return (
    <Panel id={id}>
      <Header>
        <HeaderGradient>
          <svg width='375' height='260' viewBox='0 0 375 263' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0H375V241.843C231.19 269.084 149.065 269.134 0 241.843V0Z' fill='url(#paint0_linear)' />
            <defs>
              <linearGradient id='paint0_linear' x1='0' y1='0' x2='375' y2='262' gradientUnits='userSpaceOnUse'>
                <stop stop-color='#7B79EE' />
                <stop offset='1' stop-color='#579AFF' />
              </linearGradient>
            </defs>
          </svg>
        </HeaderGradient>
        <HeaderTitle>Удобный планировщик ваших путешествий</HeaderTitle>
        <PlannerBuilder />
      </Header>
    </Panel>
  )
}
