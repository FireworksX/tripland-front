import React, { FC } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CarouselProps {
  className?: string
}

const Root = styled(Swiper)`
  height: 100%;
`

const Carousel: FC<CarouselProps> = ({ className, children }) => {
  return (
    <Root className={className}>
      {React.Children.toArray(children).map(el => (
        <SwiperSlide>{el}</SwiperSlide>
      ))}
    </Root>
  )
}

export default Carousel
