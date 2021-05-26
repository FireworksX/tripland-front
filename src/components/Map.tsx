import React, { FC } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

export interface MapProps {
  height?: number
  className?: string
  disableDrag?: boolean
}

const Root = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, .3);
  opacity: 0;
  transition: .3s;
  
  &:active {
    opacity: 1;
  }
`

const options = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  disableDefaultUI: false,
  gestureHandling: 'greedy',
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e9e9e9'
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5'
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff'
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#ffffff'
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff'
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5'
        },
        {
          lightness: 21
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dedede'
        },
        {
          lightness: 21
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#ffffff'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36
        },
        {
          color: '#333333'
        },
        {
          lightness: 40
        }
      ]
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f2f2f2'
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#fefefe'
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#fefefe'
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    }
  ]
}

const Map: FC<MapProps> = ({ className, height = 300, disableDrag }) => {
  return (
    <Root className={className} height={height}>
      {disableDrag && <Overlay />}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAV7apEnvSRpmVw2FGeTVH6AQkxEWyvZ9o' }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={11}
        options={options}
      />
    </Root>
  )
}

export default Map
