import { ProductsData } from '../../modules/categories/types/interfaceApi'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import styles from './cardProduct.module.css'

type ProductCardProps = {
  data: ProductsData | null | undefined
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const redirectToPreviousRoute = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.productsPageContent}>
        <div className={styles.productsName}>
          <div className={styles.productsBackBtn}>
            <button onClick={redirectToPreviousRoute} className={styles.backBtn}>
              <span className={styles.btnContainer}>
                <span className={styles.btnCenter}>
                  <span className={styles.btnText}></span>
                </span>
                <div className={styles.btnIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.5 10.75C20.1904 10.75 20.75 11.3096 20.75 12C20.75 12.6904 20.1904 13.25 19.5 13.25H9.02665C8.46984 13.25 8.19098 13.9232 8.58471 14.3169L12.8839 18.6161C13.372 19.1043 13.372 19.8957 12.8839 20.3839C12.3957 20.872 11.6043 20.872 11.1161 20.3839L3.61612 12.8839C3.12796 12.3957 3.12796 11.6043 3.61612 11.1161L11.1161 3.61612C11.6043 3.12796 12.3957 3.12796 12.8839 3.61612C13.372 4.10427 13.372 4.89573 12.8839 5.38388L8.58471 9.68306C8.19123 10.0768 8.46992 10.75 9.02665 10.75L19.5 10.75Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
          <h1 className={styles.nameText}>{data?.title}</h1>
        </div>
        <div className={styles.mainContent}>
          {data?.groups.map(product => (
            <div className={styles.productSection}>
              <div className={styles.sectionHeader}>
                <span>{product.title}</span>
              </div>
              <div className={styles.productList}>
                {product.products.map(card => (
                  <Link to={`/product/${card.id}`} state={{ previousLocation: location }}>
                    <div className={styles.productCard}>
                      <div className={styles.cardImage}>
                        <img src={card.small_image} alt={card.title} />
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardDetails}>
                        <div className={styles.cardName}>
                          <span>{card.title}</span>
                        </div>
                      </div>
                      <div className={styles.cardActions}>
                        <div className={styles.actionsContainer}>
                          <div className={styles.actionsText}>
                            <span>{card.price}&nbsp;₽</span>
                          </div>
                          <div className={styles.actionsIcon}>
                            <div className={styles.icon}>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.25 0.75C7.25 0.335786 7.58579 0 8 0C8.41421 0 8.75 0.335786 8.75 0.75V5V5.95C8.75 6.66797 9.33203 7.25 10.05 7.25H11C11.0002 7.25 11.0003 7.25 11.0005 7.25H15.25C15.6642 7.25 16 7.58579 16 8C16 8.41421 15.6642 8.75 15.25 8.75H11.001C11.0007 8.75 11.0003 8.75 11 8.75H10.05C9.33203 8.75 8.75 9.33203 8.75 10.05V11V15.25C8.75 15.6642 8.41421 16 8 16C7.58579 16 7.25 15.6642 7.25 15.25V11V10.05C7.25 9.33203 6.66797 8.75 5.95 8.75H5C4.99978 8.75 4.99956 8.75 4.99935 8.75H0.75C0.335786 8.75 0 8.41421 0 8C0 7.58579 0.335786 7.25 0.75 7.25H5H5.95C5.95022 7.25 5.95045 7.25 5.95067 7.25C6.66833 7.24964 7.25 6.66775 7.25 5.95V5V0.75Z"
                                  fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
