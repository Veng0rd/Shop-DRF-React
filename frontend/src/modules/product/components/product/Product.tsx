import { useEffect, useState } from 'react'
import { requestProduct } from '../../api/productApi'
import { useLocation, useNavigate } from 'react-router-dom'
import ProductModal from '../../../../components/productModal/ProductModal'
import { ProductData } from '../../interface/productInterface'

export const Product = () => {
  const [state, setState] = useState<ProductData | undefined>()
  const productId = useLocation().pathname
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await requestProduct(productId)
        setState(result)
        setIsLoaded(true)
        console.log(state)
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }
    fetchData()
  }, [])

  return <>{isLoaded ? <ProductModal navigate={navigate} data={state} /> : null}</>
}
