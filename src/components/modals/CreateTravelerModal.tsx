import React, { FC } from 'react'
import styled from 'styled-components'
import { ModalPage, ModalPageHeader } from '@vkontakte/vkui'
import { Div } from '~/components/Div'
import Separator from '~/components/Separator'
import { buildFont } from '~/utils/styledBuilder'
import Image, { ImageProps } from '~/components/Image'
import cards from '~static/images/cards.png'
import Input from '~/components/Input'
import Touchable from '~/components/Touchable'

interface CreateTravelerModalProps {
  id: string
  className?: string
}

const Root = styled.div``

const Info = styled(Div)`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const InfoCover = styled(Image)<ImageProps>``

const InfoTitle = styled.div`
  ${buildFont({ size: '14-20', weight: 'semi' })}
  margin-bottom: 5px;
`

const InfoDescription = styled.div`
  ${buildFont({ size: '10-12' })}
`

const Form = styled.form`
  padding: 15px 0;
  display: grid;
  grid-gap: 10px;
`

const Submit = styled(Touchable)`
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.main};
  background: ${({ theme }) => theme.colors.accent};
  padding: 15px;
  ${({ theme }) => buildFont({ size: '14-20', weight: 'semi', color: theme.colors.textColorWhite })}
`

const CreateTravelerModal: FC<CreateTravelerModalProps> = ({ id, className }) => {
  return (
    <ModalPage id={id} className={className}>
      <ModalPageHeader>Новый путешественник</ModalPageHeader>
      <Info>
        <InfoCover src={cards} />
        <div>
          <InfoTitle>Это очень удобно!</InfoTitle>
          <InfoDescription>
            При покупке билетов на экскурсии и другие мероприятия не придется вводить данные еще раз. Мы заполним их за
            вас
          </InfoDescription>
        </div>
      </Info>
      <Separator />
      <Div>
        <Form>
          <Input placeholder='Имя' />
          <Input placeholder='Фамилия' />
          <Submit>Сохранить</Submit>
        </Form>
      </Div>
    </ModalPage>
  )
}

export default CreateTravelerModal
