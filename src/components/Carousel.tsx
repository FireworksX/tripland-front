import React, { FC } from 'react'
import styled from 'styled-components'
import SwiperCore, { Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CarouselProps {
  className?: string
}

SwiperCore.use([Pagination])

const Root = styled(Swiper)`
  height: 100%;
  position: relative;

  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin: 0 3px;
    background: ${({ theme }) => theme.colors.backgroundWhite};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.accent};
  }
`

const Carousel: FC<CarouselProps> = ({ className, children }) => {
  return (
    <Root pagination className={className}>
      {React.Children.toArray(children).map(el => (
        <SwiperSlide>{el}</SwiperSlide>
      ))}
    </Root>
  )
}

export default Carousel
