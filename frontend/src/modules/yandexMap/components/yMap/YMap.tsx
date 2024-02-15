import React, { useEffect, useState } from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps'
import LocationPlacemark from '@mui/icons-material/LocationOn'
import { requestMap, requestAddress, requestCountry } from '../../api/ApiYMap'

import './yMap.css'

import { initialState, mapOptions } from '../../constants/mapConstants'

type TYMapProps = {
  data: { country: string; address: string }
  inputCountryIsReady: boolean
  inputValue: { country: string; address: string }
  inputAddressIsReady: boolean
}

export const YMap: React.FC<Partial<TYMapProps>> = ({
  data,
  inputCountryIsReady,
  inputValue,
  setInputValue,
  inputAddressIsReady,
}) => {
  const [state, setState] = useState({ ...initialState })

  const changeCountry = async (country: string) => {
    const newCenter: number[] = await requestCountry(country)
    setState(prev => ({ ...prev, center: newCenter.reverse() }))
  }

  const changeAddress = async (country: string, address: string) => {
    const newAddress: number[] = await requestAddress(country, address)
    setState(prev => ({ ...prev, center: newAddress.reverse(), zoom: 16 }))
  }

  useEffect(() => {
    if (inputCountryIsReady) {
      changeCountry(data.country)
    }
  }, [inputCountryIsReady])

  useEffect(() => {
    if (inputAddressIsReady) {
      if (inputValue.address.length >= 5) {
        changeAddress(inputValue.country, inputValue.address)
      }
    }
  }, [inputAddressIsReady])

  const handleBoundsChange = async e => {
    e.preventDefault()

    const newCenter = e.get('newCenter')
    setState(prevState => ({
      ...prevState,
      center: newCenter,
    }))

    try {
      const result = await requestMap(newCenter)

      setInputValue(prev => ({ ...prev, address: result }))
    } catch (error) {
      console.error('Произошла ошибка:', error)
    }
  }

  return (
    <YMaps query={{ apikey: '5d269218-55f7-4bd0-947b-fe054184a255' }}>
      <Map {...mapOptions} className="mapRoot" state={state} onBoundsChange={handleBoundsChange}>
        <LocationPlacemark className={'placemark'} color="primary" />
      </Map>
    </YMaps>
  )
}
