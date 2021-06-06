import React, { FC, ReactElement, ReactNode, useRef } from 'react'
import styled from 'styled-components'
import ScrollSaver from '~/components/ScrollSaver'

interface EpicProps {
  activeStory: string
  tabbar: ReactNode
  className?: string
}

const Root = styled.div`
  width: 100%;
  height: 100%;
`

const Epic: FC<EpicProps> = ({ tabbar, className, children, activeStory }) => {
  const scroll = useRef<Record<string, number>>({}).current
  const story = (React.Children.toArray(children) as ReactElement[]).find(
    story => story.props.id === activeStory
  )

  return (
    <Root className={className}>
      <ScrollSaver initialScroll={scroll[activeStory] || 0} saveScroll={value => (scroll[activeStory] = value)}>
        {story}
      </ScrollSaver>
      {tabbar}
    </Root>
  )
}

export default Epic
