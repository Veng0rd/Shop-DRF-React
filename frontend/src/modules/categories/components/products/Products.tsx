import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { requestCategoriesProducts, requestProducts } from '../../api/categoriesApi'
import { ProductsData } from '../../types/interfaceApi'
import SearchBar from '../../../../components/searchBar/SearchBar'
import SearchContent from '../searchContent/SearchContent'
import CardProduct from '../cardProduct/CardProduct'

const Products = () => {
  const [state, setState] = useState<ProductsData | null>()
  const [search, setSearch] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const product = useLocation().pathname

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await requestCategoriesProducts(product)
        setState(result)
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }
    fetchData()
  }, [product])

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.length === 3) {
        try {
          const result = await requestProducts(searchQuery)
          setSearch(result)
        } catch (error) {
          console.error('Произошла ошибка:', error)
        }
      }
    }
    fetchData()
  }, [searchQuery])

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      {searchQuery.length >= 3 ? <SearchContent product={search} /> : <CardProduct data={state} />}
    </>
  )
}

export default Products
