import React, { FC } from 'react'
import styled from 'styled-components'
import GenericPageBubbles from '~/components/GenericPageBubbles'
import Panel from '~/components/Panel'
import { buildPath } from '~/utils/buildRouteName'
import { useRoute } from 'react-router5'
import { PANEL_NAMES, STORY_NAMES, VIEW_NAMES } from '~router/constants'
import useStore from '~/hooks/useStore'

interface PlannerSelectPeoplesPanelProps {
  id: string
}

const Root = styled.div`
  height: 100vh;
`

const PlannerSelectPeoplesPanel: FC<PlannerSelectPeoplesPanelProps> = ({ id }) => {
  const { uiStore } = useStore()
  const { route, router } = useRoute()

  return (
    <Panel id={id}>
      <Root>
        <GenericPageBubbles
          title='Количество человек'
          description='Укажите количество человек, которое поедет с вами в путешествие'
          steps='2 из 2'
          onSubmit={() => {
            uiStore.setVisibleTabbar(true)
            router.navigate(buildPath(VIEW_NAMES.route, PANEL_NAMES.plannerIndex))
          }}
        />
      </Root>
    </Panel>
  )
}

export default PlannerSelectPeoplesPanel
