import React, { FC } from 'react'
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
import { useStore } from '~/hooks/useStore'
import { ROUTE_NAMES, ROUTE_PARAMS } from '~router/constants'
import { buildRouteName } from '~/utils/buildRouteName'
import { useRouter } from '~/hooks/useRouter'
import DirectionCard from '~/components/DirectionCard'
import HorizontalCards from '~/components/HorizontalCards'
import CityCard from '~/components/CityCard'
import CoverCard from '~/components/CoverCard'
import ExcursionCard from '~/components/ExcursionCard'
import { buildFont } from '~/utils/styledBuilder'

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
  height: 270px;
  background: linear-gradient(116.04deg, #7b79ee 0%, #579aff 99.96%);
`

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textColorWhite};
  ${buildFont({ size: '26-30', weight: 'bold' })}
  text-align: center;
  margin-bottom: 40px;
  position: relative;
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
  const { push } = useRouter()

  const {
    citiesStore: { selectedCity },
    plannerStore
  } = useStore()

  const onSubmitPlanner = () => {
    push(buildRouteName(ROUTE_NAMES.plannerRoot, ROUTE_NAMES.plannerSelectGenres))
  }

  return (
    <Panel id={id}>
      <Header>
        <HeaderGradient />
        <Div>
          <HeaderTitle>Удобный планировщик ваших путешествий</HeaderTitle>
          <PlannerBuilder onSubmit={onSubmitPlanner} />
        </Div>
      </Header>
      {!selectedCity && (
        <Section>
          <Group title='Популярные направления' description='Каталог направлений для путешествий по России'>
            <HorizontalCards>
              {plannerStore.topDirectionsList.map((el, index) => (
                <DirectionCard
                  key={index}
                  {...el}
                  onClick={() =>
                    push(buildRouteName(ROUTE_NAMES.routeDetailRoot), {
                      [ROUTE_PARAMS.routeSlug]: 'test'
                    })
                  }
                />
              ))}
            </HorizontalCards>
          </Group>
        </Section>
      )}
      {!selectedCity && (
        <Section>
          <Group
            title='Популярные города'
            description='Лучшие города России, которые мы советуем посетить. В каждой подборке собраны авторские маршруты'
          >
            <HorizontalCards width={140}>
              {plannerStore.topCitiesList.map((city, index) => (
                <CityCard
                  key={index}
                  cover={city.cover}
                  name={city.name}
                  onClick={() => plannerStore.selectCity(city)}
                />
              ))}
            </HorizontalCards>
          </Group>
        </Section>
      )}
      {plannerStore.authorsTripsList.length > 0 && (
        <Section>
          <Group title='Авторские подборки' description='Собраны лучшие подборки для вашего путешествия'>
            <HorizontalCards width={200}>
              {plannerStore.authorsTripsList.map((card, index) => (
                <CoverCard
                  key={index}
                  index={index}
                  {...card}
                  onClick={() =>
                    push(buildRouteName(ROUTE_NAMES.routeDetailRoot), {
                      [ROUTE_PARAMS.routeSlug]: 'test'
                    })
                  }
                />
              ))}
            </HorizontalCards>
          </Group>
        </Section>
      )}
      {plannerStore.excursionsList.length > 0 && (
        <Section>
          <Group title='Экскурсии с гидами по Москве' description='Каталог маршрутов для путешествий по Москве'>
            <HorizontalCards width={150}>
              {plannerStore.excursionsList.map((card, index) => (
                <ExcursionCard key={index} {...card} onClick={() => push(buildRouteName(ROUTE_NAMES.detail))} />
              ))}
            </HorizontalCards>
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
