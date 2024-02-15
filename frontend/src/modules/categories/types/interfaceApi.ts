interface Categories {
  title: string
  image: string
  slug: string
}

export interface CategoriesData extends Categories {
  subcategories: Categories[]
}

export interface Products {
  id: string
  title: string
  feature: string
  small_image: string
  price: string
  discount: number
}

interface ProductsGroup {
  title: string
  products: Products[]
}

export interface ProductsData {
  title: string
  groups: ProductsGroup[]
}
