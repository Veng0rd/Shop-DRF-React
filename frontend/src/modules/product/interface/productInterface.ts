export interface ProductData {
  group: string
  in100grams: [
    {
      gram: string
      name: string
    },
  ]
  info: [
    {
      info: string
      name: string
    },
  ]
  title: string
  feature: null
  description: string
  large_image: string
  price: string
  discount: number
  volume_or_weight: string
}
