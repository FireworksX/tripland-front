import React, { FC, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

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
  const story =
    (React.Children.toArray(children) as ReactElement[]).find(story => story.props.id === activeStory) || null

  return (
    <Root className={className}>
      {story}
      {tabbar}
    </Root>
  )
}

export default Epic
