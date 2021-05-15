import React, { FC } from 'react'
import styled from 'styled-components'
import Panel from '~/components/Panel'
import { Div } from '~/components/Div'
import Touchable from '~/components/Touchable'
import { IconCaretLeft } from '~/components/icons/IconCaretLeft'
import RouteIterateCard from '~/components/RouteIterateCard'
import { IconCar } from '~/components/icons/IconCar'
import { IconCaretDown } from '~/components/icons/IconCaretDown'
import RouteTimeLine from '~/components/RouteTimeLine'
import { IconFunnelFill } from '~/components/icons/IconFunnelFill'
import { useRouter } from '~/hooks/useRouter'

interface RouteDetailPanelProps {
  id: string
}

const Header = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  justify-content: center;
  align-items: center;
  padding: 10px ${({ theme }) => theme.paddings.main};
  grid-gap: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;

  span {
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const HeaderButton = styled(Touchable)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 10px rgba(181, 181, 181, 0.25);
  border-radius: ${({ theme }) => theme.radius.main};
  color: ${({ theme }) => theme.colors.accent};
`

const Map = styled.div`
  height: 145px;
  background: #eee;
  margin-bottom: 30px;
`

const Day = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-gap: 10px;
`

const DayContent = styled.div`
  padding-bottom: 40px;
`

const DayHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`

const DayDelimiter = styled.div`
  display: flex;
  align-items: center;
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

const DelimiterIcon = styled.div`
  margin-right: 5px;
`

const RouteDetailPanel: FC<RouteDetailPanelProps> = ({ id }) => {
  const router = useRouter()

  const days = [
    {
      title: '24 апреля',
      value: 100,
      items: [
        {
          type: 'card',
          name: 'Парк Коломенское'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Останкинская телебашня'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Парк Коломенское'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Останкинская телебашня'
        }
      ]
    },
    {
      title: '25 апреля',
      value: 35,
      items: [
        {
          type: 'card',
          name: 'Парк Коломенское'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Останкинская телебашня'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Парк Коломенское'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Останкинская телебашня'
        }
      ]
    },
    {
      title: '26 апреля',
      value: 0,
      items: [
        {
          type: 'card',
          name: 'Парк Коломенское'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Останкинская телебашня'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Парк Коломенское'
        },
        {
          type: 'delimiter',
          value: '23 мин.'
        },
        {
          type: 'card',
          name: 'Останкинская телебашня'
        }
      ]
    }
  ]

  const getFragment = (item: any) => {
    if (item.type === 'card') {
      return <RouteIterateCard name={item.name} />
    } else if (item.type === 'delimiter') {
      return (
        <DayDelimiter>
          <DelimiterIcon>
            <IconCaretDown size={12} />
          </DelimiterIcon>
          <DelimiterIcon>
            <IconCar size={20} />
          </DelimiterIcon>
          {item.value}
        </DayDelimiter>
      )
    }
  }

  return (
    <Panel id={id}>
      <Header>
        <HeaderButton onClick={router.back}>
          <IconCaretLeft size={24} />
        </HeaderButton>
        <div>
          <h1>test1</h1>
          <span>24 апреля — 25 апреля</span>
        </div>
        <HeaderButton>
          <IconFunnelFill size={24} />
        </HeaderButton>
      </Header>
      <Div>
        <Map />
        {days.map(day => (
          <Day>
            <RouteTimeLine value={day.value} />
            <DayContent>
              <DayHeader>{day.title}</DayHeader>
              {day.items.map(getFragment)}
            </DayContent>
          </Day>
        ))}
      </Div>
    </Panel>
  )
}

export default RouteDetailPanel
