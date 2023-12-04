import { useEffect, useState } from 'react'
import { requestCategories, requestProducts } from '../../api/categoriesApi'
import { CategoriesData } from '../../types/interfaceApi'
import SearchBar from '../../../../components/searchBar/SearchBar'
import SearchContent from '../searchContent/SearchContent'
import CardCategories from '../cardCategories/CardCategories'

const MainContent = () => {
  const [state, setState] = useState<CategoriesData[]>([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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
      if (searchQuery.length === 3) {
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
      {searchQuery.length >= 3 ? <SearchContent product={searchResults} /> : <CardCategories data={state} />}
    </>
  )
}

export default MainContent
