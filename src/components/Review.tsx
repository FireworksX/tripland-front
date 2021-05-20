import React, { FC } from 'react'
import styled from 'styled-components'
import Image from '~/components/Image'
import { buildFont } from '~/utils/styledBuilder'
import DisplayRating from '~/components/DisplayRating'

interface ReviewProps {
  className?: string
}

const Root = styled.div``

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 50%;
`

const Name = styled.div`
  ${buildFont({ size: '14-20', weight: 'semi' })}
`

const Date = styled.div`
  ${({ theme }) => buildFont({ size: '12-16', color: theme.colors.secondary })}
`

const Rating = styled(DisplayRating)`
  margin-left: auto;
  ${buildFont({ size: '14-20', weight: 'semi' })}
`

const Text = styled.p`
  ${buildFont({ size: '14-20' })}
`

const Review: FC<ReviewProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header>
        <Avatar />
        <div>
          <Name>Роман Ростовский</Name>
          <Date>14 ноября 2020 г.</Date>
        </div>
        <Rating value={5} />
      </Header>
      <Text>
        Обязательно стоит побывать на смотровой площадке! Причём и вечером и днём! Завораживающее зрелище 100%. Подъем
        на лифте, отдельная история! Ооочень круто! Ресторан 7е небо очень уютный, еда вкусная, цены кстати абсолютно
        приемлемы. Самое важное, выбрать ясную погоду, чтобы можно было рассмотреть всю Москву! Я еще не раз вернусь в
        телебашню и всегда рекомендую к посещению! Это стоит, чтобы потратить время и деньги!
      </Text>
    </Root>
  )
}

export default Review
