interface SubCategories {
  title: string
  image: string
  slug: string
}

export interface CategoriesData {
  title: string
  image: string
  subcategories: SubCategories[]
}
