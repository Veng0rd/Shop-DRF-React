export const requestCategories = async () => {
  const response = await fetch('http://localhost:8000/api/v1/category/')

  const data = await response.json()
  return data
}
