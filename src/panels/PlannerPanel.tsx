import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Div } from '~/components/Div'
import PlannerBuilder from '~/components/PlannerBuilder'
import Panel from '~/components/Panel'
import Group from '~/components/Group'
import Image, { ImageProps } from '~/components/Image'
import feature1 from '~static/images/feature1.png'
import feature2 from '~static/images/feature2.png'
import feature3 from '~static/images/feature3.png'
import feature4 from '~static/images/feature4.png'
import CitiesList from '~/components/CitiesList.tsx'
import TopDirectionsList from '~/components/TopDirectionsList'
import AuthorTripsList from '~/components/AuthorTripsList.tsx'
import CityExcursionsList from '~/components/CityExcursionsList'
import useStore from '~/hooks/useStore'

interface PlannerPanel {
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

const Section = styled.div`
  margin-bottom: 40px;
`

const Features = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 35px ${({ theme }) => theme.paddings.main} 55px ${({ theme }) => theme.paddings.main};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
`

const Feature = styled.div`
  display: flex;
  align-items: center;
`

const FeatureImage = styled(Image)<ImageProps>`
  width: 100px !important;
  min-width: 100px;
  margin-right: 35px;
  height: 80px;
  object-fit: contain;
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
`

const features = [
  {
    image: feature1,
    title: 'Легко и удобно',
    text: 'Планер сам рассчитает время на посещение мест, дорогу и составит идеальный маршрут'
  },
  {
    image: feature2,
    title: 'Всё и все в одном месте',
    text: 'Планер поможет подобрать перелет, проживание и машину в аренду'
  },
  {
    image: feature3,
    title: 'С заботой о Вас',
    text: 'Планер сам предложит Вам трансфер, такси и мед. страховку'
  },
  {
    image: feature4,
    title: 'История путешествий',
    text: 'Планер сохранит маршруты, чтобы Вы могли вносить изменения и делиться ими с друзьями'
  }
]

export const PlannerPanel: FC<PlannerPanel> = ({ id }) => {
  const {
    citiesStore: { selectedCity },
    plannerStore
  } = useStore()

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
      {!selectedCity && (
        <Section>
          <Group title='Популярные направления' description='Каталог направлений для путешествий по России'>
            <TopDirectionsList list={plannerStore.topDirectionsList} />
          </Group>
        </Section>
      )}
      {!selectedCity && (
        <Section>
          <Group
            title='Популярные города'
            description='Лучшие города России, которые мы советуем посетить. В каждой подборке собраны авторские маршруты'
          >
            <CitiesList list={plannerStore.topCitiesList} />
          </Group>
        </Section>
      )}
      {plannerStore.authorsTripsList.length > 0 && (
        <Section>
          <Group title='Авторские подборки' description='Собраны лучшие подборки для вашего путешествия'>
            <AuthorTripsList list={plannerStore.authorsTripsList} />
          </Group>
        </Section>
      )}
      {plannerStore.excursionsList.length > 0 && (
        <Section>
          <Group title='Экскурсии с гидами по Москве' description='Каталог маршрутов для путешествий по Москве'>
            <CityExcursionsList list={plannerStore.excursionsList} />
          </Group>
        </Section>
      )}
      <Features>
        {features.map(({ image, title, text }) => (
          <Feature>
            <FeatureImage src={image} />
            <div>
              <FeatureTitle>{title}</FeatureTitle>
              <FeatureText>{text}</FeatureText>
            </div>
          </Feature>
        ))}
      </Features>
    </Panel>
  )
}
