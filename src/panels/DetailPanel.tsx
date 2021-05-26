import React, { FC } from 'react'
import styled from 'styled-components'
import Panel from '~/components/Panel'
import { buildFont } from '~/utils/styledBuilder'
import RatingRow from '~/components/RatingRow'
import { Div } from '~/components/Div'
import Separator from '~/components/Separator'
import { IconPlacemark } from '~/components/icons/IconPlacemark'
import Touchable from '~/components/Touchable'
import { Icon28CheckShieldOutline, Icon28BlockOutline } from '@vkontakte/icons'
import Review from '~/components/Review'
import HorizontalCards from '~/components/HorizontalCards'
import DirectionCard from '~/components/DirectionCard'
import Carousel from '~/components/Carousel'
import Image from '~/components/Image'
import { IconCaretLeft } from '~/components/icons/IconCaretLeft'
import { Icon28Like } from '~/components/icons/Icon28Like'
import { useRouter } from '~/hooks/useRouter'
import Cell from '~/components/Cell'
import { IconClock } from '~/components/icons/IconClock'
import { IconTranslate } from '~/components/icons/IconTranslate'
import { IconPhone } from '~/components/icons/IconPhone'

interface DetailPanelProps {
  id: string
  className?: string
}

const Root = styled(Panel)``

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 2;
  padding: ${({ theme }) => theme.paddings.main};
`

const HeaderButton = styled(Touchable)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.main};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  color: ${({ theme }) => theme.colors.accent};
`

const Gallery = styled(Carousel)`
  height: 300px;
  margin-bottom: 15px;
`

const Slide = styled(Image)`
  height: 300px;
`

const Title = styled.h1`
  ${buildFont({ size: '18-22', weight: 'bold' })}
  margin-bottom: 5px;
`

const Rating = styled(RatingRow)`
  margin-bottom: 15px;
`

const Address = styled(Touchable)`
  display: flex;
  align-items: center;
  padding: 15px 0 20px 0;
`

const AddressMap = styled.div`
  background: #eee;
  border-radius: ${({ theme }) => theme.radius.main};
  width: 50px;
  height: 50px;
  margin-right: 15px;
  position: relative;
`

const AddressIcon = styled(IconPlacemark)`
  position: absolute;
  bottom: -5px;
  right: -5px;
  color: ${({ theme }) => theme.colors.accentBlue};
`

const AddressName = styled.div`
  margin-bottom: 5px;
  ${({ theme }) => buildFont({ size: '12-16', color: theme.colors.secondary })}
`

const AddressButton = styled.div`
  ${({ theme }) => buildFont({ size: '12-16', weight: 'bold', color: theme.colors.accentBlue })}
`

const DescriptionGroup = styled.div`
  padding: 15px 0;
`

const GroupHeader = styled.h3`
  ${buildFont({ size: '16-20', weight: 'semi' })}
  margin-bottom: 10px;
`

const Description = styled.p`
  ${buildFont({ size: '14-20' })}
`

const Cells = styled(Div)`
  padding-top: 15px;
  padding-bottom: 15px;
`

const RatingGroup = styled.div`
  padding: 15px 30px;
  box-shadow: 0 0 20px rgba(192, 192, 192, 0.25);
  border-radius: ${({ theme }) => theme.radius.main};
`

const RatingLabel = styled.div`
  ${buildFont({ size: '16-20', weight: 'bold' })}
`

const RatingValues = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const RatingValue = styled.div`
  font-size: 42px;
  font-weight: bold;
`

const RatingButton = styled(Touchable)`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.main};
  ${({ theme }) => buildFont({ size: '14-20', color: theme.colors.accentBlue, weight: 'semi' })}
`

const ReviewsGroup = styled(Div)`
  padding-top: 15px;
  padding-bottom: 15px;
`

const OtherReviews = styled.div`
  ${({ theme }) => buildFont({ size: '14-20', weight: 'semi', color: theme.colors.accentBlue })}
`

const OtherCards = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`

const SubmitWrapper = styled.div`
  position: sticky;
  bottom: 0;
  padding: 15px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
`

const Submit = styled(Touchable)`
  padding: 15px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textColorWhite};
  border-radius: ${({ theme }) => theme.radius.main};
  text-align: center;
`

const DetailPanel: FC<DetailPanelProps> = ({ id, className }) => {
  const { back } = useRouter()

  return (
    <Root id={id} className={className} withPadding={false}>
      <Header>
        <HeaderButton onClick={back}>
          <IconCaretLeft size={24} />
        </HeaderButton>
        <HeaderButton>
          <Icon28Like size={24} />
        </HeaderButton>
      </Header>
      <Gallery>
        <Slide src='https://sun9-28.userapi.com/impg/PjmO-ii1690Ka9wsiTFwHNc70tigQEoSQ_Ht7w/ox6vVUsE6Bc.jpg?size=1024x778&quality=96&sign=1ce254557c1c38531563296b212f750a&type=album' />
        <Slide src='https://sun9-72.userapi.com/impg/xTsvxFweO90HuC061dqdL8qEblntQi33hobK5w/gApQBmLiLZQ.jpg?size=1024x768&quality=96&sign=da5be9dcfb77dffda0526dc51389e012&type=album' />
        <Slide src='https://sun9-17.userapi.com/impg/sJEX5YVyRVS1v0IKsvfIHgaDuyLV8pJH6ksxZA/sct2N97dGhg.jpg?size=1024x768&quality=96&sign=c3e6085164e3532b9d9cf855a2f49a19&type=album' />
      </Gallery>
      <Div>
        <Title>Останкинская телебашня</Title>
        <Rating value={4.5} countReviews={10} />
        <Separator />
      </Div>
      <Div>
        <Address>
          <AddressMap>
            <AddressIcon size={26} />
          </AddressMap>
          <div>
            <AddressName>ул. Академика Королёва, 15, корп. 1</AddressName>
            <AddressButton>Открыть на карте</AddressButton>
          </div>
        </Address>
        <Separator />
      </Div>
      <Div>
        <DescriptionGroup>
          <GroupHeader>Описание</GroupHeader>
          <Description>
            Останкинская телебашня — не просто визитная карточка столицы, это памятник грандиозности советской эпохи и
            одновременно взгляд в будущее российского телевидения. С самой своей постройки телебашня в Останкино стала
            одним из символов
          </Description>
        </DescriptionGroup>
        <Separator />
      </Div>
      <Cells>
        <Cell expandable indicator={3} before={<Icon28CheckShieldOutline />}>
          Включено
        </Cell>
        <Cell expandable indicator={5} before={<Icon28BlockOutline />}>
          Не включено
        </Cell>
        <Cell expandable indicator='Русский' before={<IconTranslate />}>
          Языки
        </Cell>
        <Cell expandable indicator='График' before={<IconClock />}>
          Часы работы
        </Cell>
        <Cell indicator='+7 (495) 926-61-11' before={<IconPhone />}>
          Контакты
        </Cell>
      </Cells>
      <Separator padding />

      <Div>
        <RatingGroup>
          <RatingLabel>Рейтинг</RatingLabel>
          <RatingValues>
            <RatingValue>4.9</RatingValue>
          </RatingValues>
          <RatingButton>Написать отзыв</RatingButton>
        </RatingGroup>
        <Separator />
      </Div>
      <ReviewsGroup>
        <GroupHeader>Отзывы</GroupHeader>
        <Review />
        <Cell expandable>
          <OtherReviews>Посмотреть 98 отзывов</OtherReviews>
        </Cell>
        <Separator />
      </ReviewsGroup>
      <OtherCards>
        <Div>
          <GroupHeader>Места рядом</GroupHeader>
        </Div>
        <HorizontalCards>
          <DirectionCard name='Парк Горького' />
          <DirectionCard name='Парк Горького' />
          <DirectionCard name='Парк Горького' />
          <DirectionCard name='Парк Горького' />
        </HorizontalCards>
      </OtherCards>
      <SubmitWrapper>
        <Submit>Купить билет</Submit>
      </SubmitWrapper>
    </Root>
  )
}

export default DetailPanel
