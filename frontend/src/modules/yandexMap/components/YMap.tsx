import React, { useState, useEffect } from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps'
import LocationPlacemark from '@mui/icons-material/LocationOn'
import { requestAddress } from '../api/ApiYMap'

import './YMap.css'

import { initialState, mapOptions } from '../constants/mapConstants'

export const YMap = () => {
  const [state, setState] = useState({ ...initialState })

  const handleBoundsChange = e => {
    const newCenter = e.get('newCenter')
    setState(prevState => ({
      ...prevState,
      center: newCenter,
    }))
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await requestAddress(state.center)
  //       console.log(result)
  //       console.log(state.center)
  //     } catch (error) {
  //       console.error('Произошла ошибка:', error)
  //     }
  //   }

  //   fetchData()
  // }, [state])

  return (
    <YMaps query={{ apikey: '5d269218-55f7-4bd0-947b-fe054184a255' }}>
      <Map
        {...mapOptions}
        className="mapRoot"
        state={state}
        onBoundsChange={handleBoundsChange}>
        <LocationPlacemark className={'placemark'} color="primary" />
      </Map>
    </YMaps>
  )
}
