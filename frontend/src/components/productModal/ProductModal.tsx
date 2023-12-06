import { NavigateFunction } from 'react-router-dom'
import { ProductData } from '../../modules/product/index'

import styles from './productModal.module.css'
import { useEffect, useRef, useState } from 'react'

type ProductModalProps = {
  data: ProductData | undefined
  navigate: NavigateFunction
}

const ProductModal: React.FC<ProductModalProps> = ({ navigate, data }) => {
  const [isVisibleText, setIsVisibleText] = useState(false)
  const [modalVisible, setModalVisible] = useState(true)

  const handleVisibleText = () => {
    setIsVisibleText(prev => !prev)
  }

  const handleCloseModal = () => {
    setModalVisible(prev => !prev)
    setTimeout(() => navigate(-1), 300)
  }

  const blockRef = useRef(null)

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.style.height = isVisibleText ? `${blockRef.current.scrollHeight}px` : '90px'
    }
  }, [isVisibleText])

  return (
    <>
      <nav className={`${styles.modalContainer} ${modalVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.modalExit}>
          <div className={styles.btnClose}>
            <button onClick={handleCloseModal}>
              <span className={styles.btnContent}>
                <span className={styles.contentCenter}>
                  <span></span>
                </span>
                <div className={styles.btnIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.6583 5.34171C19.1139 5.79732 19.1139 6.53601 18.6583 6.99162L14.5574 11.0925C14.5573 11.0926 14.5574 11.0925 14.5574 11.0925C14.0567 11.5935 14.0563 12.4056 14.5567 12.9067C14.5569 12.907 14.5564 12.9065 14.5567 12.9067L18.6583 17.0084C19.1139 17.464 19.1139 18.2027 18.6583 18.6583C18.2027 19.1139 17.464 19.1139 17.0084 18.6583L12.9075 14.5574C12.4063 14.0562 11.5937 14.0562 11.0925 14.5574L9.32496 16.325C9.32459 16.3253 9.32423 16.3257 9.32387 16.326L6.99162 18.6583C6.53601 19.1139 5.79732 19.1139 5.34171 18.6583C4.8861 18.2027 4.8861 17.464 5.34171 17.0084L9.44263 12.9075C9.44294 12.9071 9.44324 12.9068 9.44355 12.9065C9.9438 12.4053 9.9435 11.5934 9.44263 11.0925L5.34171 6.99162C4.8861 6.53601 4.8861 5.79732 5.34171 5.34171C5.79732 4.8861 6.53601 4.8861 6.99162 5.34171L9.32424 7.67432C9.32448 7.67456 9.324 7.67409 9.32424 7.67432L11.0925 9.44263C11.5935 9.9436 12.4056 9.9438 12.9068 9.44324C12.907 9.44304 12.9066 9.44344 12.9068 9.44324L17.0084 5.34171C17.464 4.8861 18.2027 4.8861 18.6583 5.34171Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
        <main className={styles.modalContent}>
          <div className={styles.productDetails}>
            <div className={styles.detailsHeader}>
              <div className={styles.productImage}>
                <div className={styles.imageSwiper}>
                  <div className={styles.swiperWrapper}>
                    <div className={styles.swiperSlide}>
                      <div className={styles.imageContainer}>
                        <img src={data?.large_image} alt={data?.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.detailsContent}>
              <div className={styles.contentTitle}>
                <h1>{data?.title}</h1>
                <span>{data?.volume_or_weight}</span>
              </div>
              <div className={styles.contentNutritions}>
                <span>В 100 граммах</span>
                <div className={styles.nutritionsList}>
                  {data?.in100grams.map(param => (
                    <div className={styles.nutrition}>
                      <span>{param.gram}</span>
                      <span>{param.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.contentAttributes}>
                {data?.info.map((info, i) => (
                  <div className={styles.attribute}>
                    <span>{info.name}</span>
                    <span>
                      <div
                        ref={i === 0 && info.info.length > 400 ? blockRef : null}
                        style={{
                          transition: 'height 0.5s ease',
                          overflow: 'hidden',
                        }}
                        className={styles.dropDownText}>
                        <div>{info.info}</div>
                        {info.info.length > 400 && !isVisibleText && i === 0 && (
                          <div className={styles.overlay}>
                            <div className={styles.overlayExpander}>
                              <div onClick={handleVisibleText} className={styles.expanderBtn}>
                                <div className={styles.expanderBtnIcon}>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      opacity="0.8"
                                      d="M4 7L8 11L12 7"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.drawerSpacer}></div>
              <div className={styles.contentBtn}>
                <div className={styles.priceBtn}>
                  <div className={styles.priceBtn__text}>
                    <span>
                      <span>{data?.price}&nbsp;₽</span>
                    </span>
                  </div>
                  <div className={styles.priceBtn__action}>
                    <div className={styles.actionIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0625 2.9375C11.0625 2.41973 11.4822 2 12 2C12.5178 2 12.9375 2.41973 12.9375 2.9375V8.25V9.4375C12.9375 10.335 13.665 11.0625 14.5625 11.0625H15.75C15.7502 11.0625 15.7504 11.0625 15.7506 11.0625H21.0625C21.5803 11.0625 22 11.4822 22 12C22 12.5178 21.5803 12.9375 21.0625 12.9375H15.7513C15.7508 12.9375 15.7504 12.9375 15.75 12.9375H14.5625C13.665 12.9375 12.9375 13.665 12.9375 14.5625V15.75V21.0625C12.9375 21.5803 12.5178 22 12 22C11.4822 22 11.0625 21.5803 11.0625 21.0625V15.75V14.5625C11.0625 13.665 10.335 12.9375 9.4375 12.9375H8.25C8.24973 12.9375 8.24945 12.9375 8.24918 12.9375H2.9375C2.41973 12.9375 2 12.5178 2 12C2 11.4822 2.41973 11.0625 2.9375 11.0625H8.25H9.4375C9.43778 11.0625 9.43806 11.0625 9.43834 11.0625C10.3354 11.062 11.0625 10.3347 11.0625 9.4375V8.25V2.9375Z"
                          fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </nav>
      <label className={styles.mainOverlay}></label>
    </>
  )
}

export default ProductModal
