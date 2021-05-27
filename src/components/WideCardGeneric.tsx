import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import Touchable from '~/components/Touchable'
import { IconDotsThree } from '~/components/icons/IconDotsThree'

type BadgeColors = 'blue' | 'red' | 'green' | 'orange'

export interface WideCardGenericProps {
  name: string
  cover?: string
  className?: string
  badge?: {
    value: string | number
    color?: BadgeColors
  }
  onClick?: () => any
  onClickOptions?: () => any
}

const badgeColors = {
  blue: 'linear-gradient(180deg, #3A6ED6 0%, #437CED 100%)',
  red: 'linear-gradient(180deg, #DC2B2B 0%, #EF3232 100%)',
  green: 'linear-gradient(180deg, #69BC28 0%, #73CC2D 100%)',
  orange: 'linear-gradient(180deg, #E88B00 0%, #F29304 100%)'
}

const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.radius.main};
  padding: 5px;
  display: flex;
  position: relative;
  align-items: center;
`

const Cover = styled(Image)<ImageProps>`
  position: absolute;
  left: 5px;
  top: 5px;
  width: 80px;
  max-width: 80px;
  height: calc(100% - 10px);
  object-fit: cover;
  margin-right: 10px;
  border-radius: ${({ theme }) => theme.radius.main};
`

const Content = styled.div<{ withCover?: boolean }>`
  padding: 10px;
  ${({ withCover }) => withCover && 'margin-left: 80px;'}
`

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-right: 30px;
`

const Options = styled(Touchable)`
  display: flex;
  justify-content: center;
  width: 28px !important;
  height: 28px;
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`

const Badge = styled.div<{ mode: BadgeColors }>`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px 10px;
  font-size: 8px;
  color: ${({ theme }) => theme.colors.textColorWhite};
  background: ${({ mode }) => badgeColors[mode]};
  border-radius: ${({ theme }) => theme.radius.second} 0 ${({ theme }) => theme.radius.main} 0;
`

const WideCardGeneric: FC<WideCardGenericProps> = ({
  badge,
  cover,
  children,
  name,
  className,
  onClickOptions,
  onClick
}) => {
  return (
    <Touchable onClick={onClick}>
      <Root className={className}>
        {cover && <Cover src={cover} />}
        <Content withCover={!!cover}>
          <Name>{name}</Name>
          {children}
        </Content>
        {onClickOptions && (
          <Options
            onClick={e => {
              e.stopPropagation()
              onClickOptions()
            }}
          >
            <IconDotsThree size={16} />
          </Options>
        )}
        {badge && <Badge mode={badge.color || 'green'}>{badge.value}</Badge>}
      </Root>
    </Touchable>
  )
}

export default WideCardGeneric
