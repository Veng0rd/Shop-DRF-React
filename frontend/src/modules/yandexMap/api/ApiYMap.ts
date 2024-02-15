import { ResponseData } from '../types/interface/interfaceApi'

const apiKey: string = '5d269218-55f7-4bd0-947b-fe054184a255'

export const requestMap = async (coords: number[]): Promise<string> => {
  const strCoords: string = `${coords[1]}, ${coords[0]}`

  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${strCoords}&format=json`,
  )
  const data: ResponseData = await response.json()
  return data.response.GeoObjectCollection.featureMember[0].GeoObject.name
}

export const requestCountry = async (country: string) => {
  try {
    const response = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${country}&format=json`,
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    console.log('Server response:', responseData)
    return responseData.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      .split(' ')
      .map(Number)
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}

export const requestAddress = async (country: string, address: string) => {
  try {
    const response = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${country} ${address}&format=json`,
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    console.log('Server response:', responseData)
    return responseData.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      .split(' ')
      .map(Number)
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}
