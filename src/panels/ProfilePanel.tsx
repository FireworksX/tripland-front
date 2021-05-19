import React, { FC } from 'react'
import styled from 'styled-components'
import Panel from '~/components/Panel'
import PanelHeader from '~/components/PanelHeader'
import Touchable from '~/components/Touchable'
import { Div } from '~/components/Div'
import { buildFont } from '~/utils/styledBuilder'
import TravelerCard from '~/components/TravelerCard'
import HorizontalCards from '~/components/HorizontalCards.tsx'
import Separator from '~/components/Separator'
import SeeMoreCard from '~/components/SeeMoreCard'
import { useStore } from '~/hooks/useStore'

interface ProfilePanelProps {
  id: string
  className?: string
}

const Root = styled(Panel)``

const Enters = styled(Div)`
  padding-bottom: 25px;
`

const colorsByMode = {
  apple: '#292929',
  vk: 'var(--accent-blue)',
  other: 'var(--border)',
  lib: 'var(--accent)',
  write: 'var(--border)'
}

const fontColorsByMode = {
  apple: 'var(--textColorWhite)',
  vk: 'var(--textColorWhite)',
  other: 'var(--accent-blue)',
  lib: 'var(--textColorWhite)',

  write: 'var(--secondary)'
}

const Button = styled(Touchable)<{ mode: 'apple' | 'vk' | 'other' | 'lib' | 'write' }>`
  padding: 10px 0;
  text-align: center;
  background: ${({ mode }) => colorsByMode[mode]};
  border-radius: ${({ theme }) => theme.radius.main};
  margin-bottom: 5px;
  ${({ mode }) =>
    buildFont({
      size: '14-20',
      weight: 'medium',
      color: fontColorsByMode[mode]
    })}

  &:last-child {
    margin-bottom: 0;
  }
`

const Title = styled(Div)`
  ${buildFont({ size: '16-20', weight: 'semi' })}
  margin-bottom: 15px;
`

const Users = styled(Div)`
  padding: 15px 0;
`

const Faq = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 15px 10px;
  box-shadow: 0 0 50px rgba(188, 188, 188, 0.25);
  margin: 15px 0;
  border-radius: ${({ theme }) => theme.radius.main};
`

const FaqTitle = styled.div`
  ${buildFont({ size: '18-22', weight: 'bold' })}
  margin-bottom: 10px;
`

const FaqDescription = styled.div`
  ${({ theme }) => buildFont({ size: '12-16', weight: 'medium', color: theme.colors.secondary })}
  margin-bottom: 15px;
`

const LeaveAccount = styled(Touchable)`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  ${({ theme }) => buildFont({ size: '14-20', weight: 'medium', color: theme.colors.red })}
`

const ProfilePanel: FC<ProfilePanelProps> = ({ id, className }) => {
  const { profileStore } = useStore()

  return (
    <Root id={id} className={className}>
      <PanelHeader>Профиль</PanelHeader>
      <Enters>
        <Button mode='apple'>Продолжить с Apple</Button>
        <Button mode='vk'>Вконтакте</Button>
        <Button mode='other'>Другие способы</Button>
      </Enters>
      <Separator padding />
      <Users>
        <Title>Данные путешественников</Title>
        <HorizontalCards>
          <TravelerCard />
          <SeeMoreCard title='Добавить' onClick={() => profileStore.setActiveModal('createTraveler')} />
        </HorizontalCards>
      </Users>
      <Separator padding />
      <Div>
        <Faq>
          <FaqTitle>Есть вопросы?</FaqTitle>
          <FaqDescription>
            Найдите ответы на них в библиотеке <br /> или напишите нам в мессенджер:
          </FaqDescription>
          <div>
            <Button mode='lib'>Библиотека вопросов</Button>
            <Button mode='write'>Написать нам</Button>
          </div>
        </Faq>
      </Div>
      <LeaveAccount>Выйти из аккаунта</LeaveAccount>
    </Root>
  )
}

export default ProfilePanel
