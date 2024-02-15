import { useEffect, useState } from 'react'
import { requestCategories, requestProducts } from '../../api/categoriesApi'
import { CategoriesData } from '../../types/interfaceApi'
import SearchBar from '../../../../components/searchBar/SearchBar'
import SearchContent from '../../../../components/searchContent/SearchContent'
import CategoryCard from '../../../../components/categoryCard/CategoryCard'

export const MainContent = () => {
  const [state, setState] = useState<CategoriesData[]>([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await requestCategories()
        setState(result)
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.length >= 3) {
        try {
          const result = await requestProducts(searchQuery)
          setSearchResults(result)
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
      {searchQuery.length >= 3 ? <SearchContent product={searchResults} /> : <CategoryCard data={state} />}
    </>
  )
}
