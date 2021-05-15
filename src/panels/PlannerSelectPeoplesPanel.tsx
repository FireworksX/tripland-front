import React, { FC } from 'react'
import styled from 'styled-components'
import GenericPageBubbles from '~/components/GenericPageBubbles'
import Panel from '~/components/Panel'
import { useRoute } from 'react-router5'
import { ROUTE_NAMES, ROUTE_PARAMS } from '~router/constants'
import { buildRouteName } from '~/utils/buildRouteName'
import { useRouter } from '~/hooks/useRouter'

interface PlannerSelectPeoplesPanelProps {
  id: string
}

const Root = styled.div`
  height: 100vh;
`

const PlannerSelectPeoplesPanel: FC<PlannerSelectPeoplesPanelProps> = ({ id }) => {
  const { replace } = useRouter()

  return (
    <Panel id={id}>
      <Root>
        <GenericPageBubbles
          title='Количество человек'
          description='Укажите количество человек, которое поедет с вами в путешествие'
          steps='2 из 2'
          onSubmit={() =>
            replace(buildRouteName(ROUTE_NAMES.routeDetailRoot), { [ROUTE_PARAMS.routeSlug]: 'testRouteSlug' })
          }
        />
      </Root>
    </Panel>
  )
}

export default PlannerSelectPeoplesPanel
