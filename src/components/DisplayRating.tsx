import React, { FC } from 'react'
import styled from 'styled-components'
import { IconStar } from '~/components/icons/IconStar'
import { buildFont } from '~/utils/styledBuilder'

interface DisplayRatingProps {
  value: number
  className?: string
}

const Root = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 9px;
  font-weight: 700;
`

const Value = styled.div`
  margin-left: 3px;
  ${buildFont({ size: '12-16', weight: 'medium' })}
`

const DisplayRating: FC<DisplayRatingProps> = ({ value, className }) => {
  return (
    <Root className={className}>
      <IconStar size={10} />
      <Value>{value}</Value>
    </Root>
  )
}

export default DisplayRating
