import React, { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Root = styled.img`
  width: 100%;
  max-width: 100%;
`

const Image: FC<ImageProps> = props => {
  return <Root {...props} />
}

export default Image
