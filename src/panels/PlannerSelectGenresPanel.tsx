import React, { FC } from 'react'
import styled from 'styled-components'
import GenericPageBubbles from '~/components/GenericPageBubbles'
import Panel from '~/components/Panel'
import useStore from '~/hooks/useStore'
import { PANEL_NAMES } from '~router/constants'

interface PlannerSelectGenresPanelProps {
  id: string
}

const Root = styled.div`
  height: 100vh;
`

const PlannerSelectGenresPanel: FC<PlannerSelectGenresPanelProps> = ({ id }) => {
  const { plannerStore } = useStore()

  return (
    <Panel id={id}>
      <Root>
        <GenericPageBubbles
          title='Расскажите, что вам интересно'
          description='Мы подберем путешествие, подходящее вашим интересам и составим маршрут'
          steps='1 из 2'
          onSubmit={() => plannerStore.setActivePanel(PANEL_NAMES.plannerSelectPeople)}
          onSkip={() => plannerStore.setActivePanel(PANEL_NAMES.plannerSelectPeople)}
        />
      </Root>
    </Panel>
  )
}

export default PlannerSelectGenresPanel
