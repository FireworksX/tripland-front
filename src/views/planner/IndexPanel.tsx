import { FC } from 'react'
import styled from 'styled-components'
import { Div } from '~components/Div'
import { PlannerBuilder } from '~components/PlannerBuilder'
import Panel from '~components/Panel'
import Group, { GroupProps } from '~components/Group'

interface IndexPanel {
  id: string
}

const Header = styled.div`
  position: relative;
  padding: 55px 0 40px 0;
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

const Section = styled(Group)<GroupProps>`
  margin-bottom: 40px;
`

const Features = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 35px ${({ theme }) => theme.paddings.main} 55px ${({ theme }) => theme.paddings.main};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 90px;
`

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FeatureTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 5px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textColor};
`

const FeatureText = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`

export const IndexPanel: FC<IndexPanel> = ({ id }) => {
  const features = [
    {
      title: 'Легко и удобно',
      text: 'Планер сам рассчитает время на посещение мест, дорогу и составит идеальный маршрут'
    },
    {
      title: 'Всё и все в одном месте',
      text: 'Планер поможет подобрать перелет, проживание и машину в аренду'
    },
    {
      title: 'С заботой о Вас',
      text: 'Планер сам предложит Вам трансфер, такси и мед. страховку'
    },
    {
      title: 'История путешествий',
      text: 'Планер сохранит маршруты, чтобы Вы могли вносить изменения и делиться ими с друзьями'
    }
  ]

  return (
    <Panel id={id}>
      <Header>
        <HeaderGradient>
          <svg width='100%' height='260' viewBox='0 0 375 263' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0H375V241.843C231.19 269.084 149.065 269.134 0 241.843V0Z' fill='url(#paint0_linear)' />
            <defs>
              <linearGradient id='paint0_linear' x1='0' y1='0' x2='375' y2='262' gradientUnits='userSpaceOnUse'>
                <stop stop-color='#7B79EE' />
                <stop offset='1' stop-color='#579AFF' />
              </linearGradient>
            </defs>
          </svg>
        </HeaderGradient>
        <Div>
          <HeaderTitle>Удобный планировщик ваших путешествий</HeaderTitle>
          <PlannerBuilder />
        </Div>
      </Header>
      <Div>
        <Section title='Популярные направления' description='Каталог направлений для путешествий по России'>
          <h1>test</h1>
        </Section>
      </Div>
      <Div>
        <Section
          title='Популярные города'
          description='Лучшие города России, которые мы советуем посетить. В каждой подборке собраны авторские маршруты'
        >
          <h1>test2</h1>
        </Section>
      </Div>
      <Features>
        {features.map(({ title, text }) => (
          <Feature>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureText>{text}</FeatureText>
          </Feature>
        ))}
      </Features>
    </Panel>
  )
}
