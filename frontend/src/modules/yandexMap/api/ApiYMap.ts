import { ResponseData } from '../types/interface/interfaceApi'

const apiKey: string = '5d269218-55f7-4bd0-947b-fe054184a255'

export const requestAddress = async (coords: number[]): Promise<string> => {
  const strCoords: string = `${coords[1]}, ${coords[0]}`

  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${strCoords}&format=json`,
  )
  const data: ResponseData = await response.json()
  return data.response.GeoObjectCollection.featureMember[0].GeoObject.name
}
