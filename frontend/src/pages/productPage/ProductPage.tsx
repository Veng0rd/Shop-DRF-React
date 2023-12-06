import { useEffect } from 'react'
import { Product } from '../../modules/product/index'

import styles from './productPage.module.css'

const ProductPage = () => {
  useEffect(() => {
    // Добавление класса к body при монтировании компонента
    document.body.classList.add(`${styles.hidden}`)

    // Очистка при размонтировании (если нужно)
    return () => {
      document.body.classList.remove(`${styles.hidden}`)
    }
  }, [])
  return (
    <div className="modalDiv">
      <div className="modal">
        <Product />
      </div>
    </div>
  )
}

export default ProductPage
