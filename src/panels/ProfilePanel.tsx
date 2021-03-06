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
import { IconApple } from '~/components/icons/IconApple'
import { IconVk } from '~/components/icons/IconVk'

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
  background: ${({ mode }) => colorsByMode[mode]};
  border-radius: ${({ theme }) => theme.radius.main};
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const EnterButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
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
      <PanelHeader>??????????????</PanelHeader>
      <Enters>
        <Button mode='apple'>
          <EnterButtonIcon>
            <IconApple size={15} />
          </EnterButtonIcon>
          ???????????????????? ?? Apple
        </Button>
        <Button mode='vk'>
          <EnterButtonIcon>
            <IconVk size={15} />
          </EnterButtonIcon>
          ??????????????????
        </Button>
        <Button mode='other'>???????????? ??????????????</Button>
      </Enters>
      <Separator padding />
      <Users>
        <Title>???????????? ????????????????????????????????</Title>
        <HorizontalCards>
          {profileStore.travelers.map((traveler, index) => (
            <TravelerCard
              key={index}
              firstName={traveler.firstName}
              lastName={traveler.lastName}
              birthDay={traveler.birthDay}
              index={index}
              onClick={() => profileStore.setActiveModal('createTraveler')}
            />
          ))}
          <SeeMoreCard title='????????????????' onClick={() => profileStore.setActiveModal('createTraveler')} />
        </HorizontalCards>
      </Users>
      <Separator padding />
      <Div>
        <Faq>
          <FaqTitle>???????? ???????????????</FaqTitle>
          <FaqDescription>
            ?????????????? ???????????? ???? ?????? ?? ???????????????????? <br /> ?????? ???????????????? ?????? ?? ????????????????????:
          </FaqDescription>
          <div>
            <Button mode='lib'>???????????????????? ????????????????</Button>
            <Button mode='write'>???????????????? ??????</Button>
          </div>
        </Faq>
      </Div>
      <LeaveAccount>?????????? ???? ????????????????</LeaveAccount>
    </Root>
  )
}

export default ProfilePanel
