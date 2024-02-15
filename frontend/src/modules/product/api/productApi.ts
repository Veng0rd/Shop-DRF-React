export const requestProduct = async (id: string) => {
  const response = await fetch(`http://localhost:8000/api/v1${id}`)

  const data = await response.json()
  console.log(data)
  return data
}
