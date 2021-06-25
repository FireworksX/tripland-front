import React, { FC } from 'react'
import styled from 'styled-components'
import GenericPageBubbles from '~/components/GenericPageBubbles'
import Panel from '~/components/Panel'
import { ROUTE_NAMES, ROUTE_PARAMS } from '~router/constants'
import { buildRouteName } from '~/utils/buildRouteName'
import { useRouter } from '~/hooks/useRouter'

interface PlannerSelectPeoplesPanelProps {
  id: string
}

const Root = styled.div`
  height: calc(100vh - var(--tabbar_height));
`

const PlannerSelectPeoplesPanel: FC<PlannerSelectPeoplesPanelProps> = ({ id }) => {
  const { replace } = useRouter()

  const onSubmit = () => {
    replace(buildRouteName(ROUTE_NAMES.routeDetailRoot), { [ROUTE_PARAMS.routeSlug]: 'testRouteSlug' })
  }

  return (
    <Panel id={id}>
      <Root>
        <GenericPageBubbles
          title='Количество человек'
          description='Укажите количество человек, которое поедет с вами в путешествие'
          steps='2 из 2'
          onSubmit={onSubmit}
        />
      </Root>
    </Panel>
  )
}

export default PlannerSelectPeoplesPanel
