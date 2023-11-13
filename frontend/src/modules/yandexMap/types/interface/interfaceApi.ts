interface GeoObject {
  name: string
  // Добавьте другие поля, если они могут присутствовать в ответе
}

interface FeatureMember {
  GeoObject: GeoObject
}

interface GeoObjectCollection {
  featureMember: FeatureMember[]
}

export interface ResponseData {
  response: {
    GeoObjectCollection: GeoObjectCollection
  }
}
