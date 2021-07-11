import React, { FC } from 'react'
import styled from 'styled-components'
import Touchable from '~/components/Touchable'

interface GenericPageBubblesProps {
  title?: string
  description?: string
  steps?: string
  className?: string
  onReset?: () => any
  onSkip?: () => any
  onSubmit?: () => any
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px ${({ theme }) => theme.paddings.main};
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

const Description = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`

const Footer = styled.div`
  margin-top: auto;
  width: 100%;
`

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 90px 1fr;
  align-items: center;
`

const FooterSteps = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
`

const FooterSecondButton = styled(Touchable)`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`

const FooterSubmitButton = styled(Touchable)`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accentBlue};
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.accentBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
`

const GenericPageBubbles: FC<GenericPageBubblesProps> = ({
  className,
  title,
  description,
  steps,
  children,
  onReset,
  onSkip,
  onSubmit
}) => {
  return (
    <Root className={className}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
      <Footer>
        <FooterSteps>{steps}</FooterSteps>
        <FooterWrapper>
          <FooterSecondButton onClick={onReset}>Сбросить</FooterSecondButton>
          <FooterSubmitButton onClick={onSubmit}>Применить</FooterSubmitButton>
          <FooterSecondButton onClick={onSkip}>Пропусть</FooterSecondButton>
        </FooterWrapper>
      </Footer>
    </Root>
  )
}

export default GenericPageBubbles
