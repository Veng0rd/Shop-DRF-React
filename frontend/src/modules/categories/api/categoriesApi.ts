export const requestCategories = async () => {
  const response = await fetch('http://localhost:8000/api/v1/category/')

  const data = await response.json()
  return data
}

export const requestCategoriesProducts = async (products: string) => {
  const response = await fetch(`http://localhost:8000/api/v1${products}`)

  const data = await response.json()
  return data
}

export const requestProducts = async (product: string) => {
  const response = await fetch(`http://localhost:8000/api/v1/product/?search=${product}`)

  const data = await response.json()
  return data
}
