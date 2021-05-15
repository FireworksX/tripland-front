import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from '~/components/Image'
import Touchable from '~/components/Touchable'
import { IconDotsThree } from '~/components/icons/IconDotsThree'

export interface WideCardGenericProps {
  name: string
  cover?: string
  className?: string
  badge?: ReactNode
  onClick?: () => any
  onClickOptions?: () => any
}

const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.radius.main};
  padding: 5px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 12px;
  position: relative;
`

const Cover = styled(Image)<ImageProps>`
  width: 80px;
  max-width: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.main};
`

const Content = styled.div`
  padding: 10px;
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

const Badge = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
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
        <Cover src={cover} />
        <Content>
          <Name>{name}</Name>
          {children}
        </Content>
        <Options
          onClick={e => {
            e.stopPropagation()
            if (onClickOptions) {
              onClickOptions()
            }
          }}
        >
          <IconDotsThree size={16} />
        </Options>
        {badge && <Badge>{badge}</Badge>}
      </Root>
    </Touchable>
  )
}

export default WideCardGeneric
