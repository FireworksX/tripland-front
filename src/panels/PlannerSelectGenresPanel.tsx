import React, { FC } from 'react'
import styled from 'styled-components'
import GenericPageBubbles from '~/components/GenericPageBubbles'
import Panel from '~/components/Panel'
import { ROUTE_NAMES } from '~router/constants'
import { buildRouteName } from '~/utils/buildRouteName'
import { useRouter } from '~/hooks/useRouter'

interface PlannerSelectGenresPanelProps {
  id: string
}

const Root = styled.div`
  height: 100vh;
`

const PlannerSelectGenresPanel: FC<PlannerSelectGenresPanelProps> = ({ id }) => {
  const { replace } = useRouter()

  return (
    <Panel id={id}>
      <Root>
        <GenericPageBubbles
          title='Расскажите, что вам интересно'
          description='Мы подберем путешествие, подходящее вашим интересам и составим маршрут'
          steps='1 из 2'
          onSubmit={() => replace(buildRouteName(ROUTE_NAMES.plannerRoot, ROUTE_NAMES.plannerSelectPeople))}
          onSkip={() => replace(buildRouteName(ROUTE_NAMES.plannerRoot, ROUTE_NAMES.plannerSelectPeople))}
        />
      </Root>
    </Panel>
  )
}

export default PlannerSelectGenresPanel
