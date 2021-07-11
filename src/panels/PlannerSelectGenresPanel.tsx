import React, { FC, useState } from 'react'
import styled from 'styled-components'
import GenericPageBubbles from '~/components/GenericPageBubbles'
import Panel from '~/components/Panel'
import { ROUTE_NAMES } from '~router/constants'
import { buildRouteName } from '~/utils/buildRouteName'
import { useRouter } from '~/hooks/useRouter'
import ButtonLevel from '~/components/ButtonLevel'
import { useStore } from '~/hooks/useStore'

interface PlannerSelectGenresPanelProps {
  id: string
}

const Root = styled.div`
  height: calc(100vh - var(--tabbar_height));
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
`

const PlannerSelectGenresPanel: FC<PlannerSelectGenresPanelProps> = ({ id }) => {
  const { replace } = useRouter()
  const {
    plannerStore: { categoriesList, resetCategories }
  } = useStore()

  return (
    <Panel id={id}>
      <Root>
        <GenericPageBubbles
          title='Расскажите, что вам интересно'
          description='Мы подберем путешествие, подходящее вашим интересам и составим маршрут'
          steps='1 из 2'
          onReset={resetCategories}
          onSubmit={() => replace(buildRouteName(ROUTE_NAMES.plannerRoot, ROUTE_NAMES.plannerSelectPeople))}
          onSkip={() => replace(buildRouteName(ROUTE_NAMES.plannerRoot, ROUTE_NAMES.plannerSelectPeople))}
        >
          <Grid>
            {categoriesList.map(category => (
              <ButtonLevel value={category.value} labels={category.labels} maxDeep={4} onClick={category.onClick} />
            ))}
          </Grid>
        </GenericPageBubbles>
      </Root>
    </Panel>
  )
}

export default PlannerSelectGenresPanel
