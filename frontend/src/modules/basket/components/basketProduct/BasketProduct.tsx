import React, { useEffect } from 'react'

import styles from './basketProduct.module.css'
import { useBasket } from '../../../../hooks/useBusket'

type TBasketProductProps = {
  price: string
  title: string
  img: string
  index: number
  quantity: number
}

export const BasketProduct: React.FC<TBasketProductProps> = ({ price, title, img, index, count }) => {
  const { removeOneFromBasketByIndex, removeFromBasketByIndex, addOneToBasketByIndex } = useBasket()

  const handleDeleteOneProduct = (e, id) => {
    e.preventDefault()
    removeOneFromBasketByIndex(id)
  }

  const handleAddOneProduct = (e, id) => {
    e.preventDefault()
    addOneToBasketByIndex(id)
  }
  const handleDeleteProduct = (e, id) => {
    e.preventDefault()
    removeFromBasketByIndex(id)
  }

  return (
    <a href="" className={styles.basketProduct_item}>
      <div className={styles.productItem_root}>
        <div className={styles.productImage}>
          <img src={img} alt="" />
        </div>
        <div className={styles.productItem_content}>
          <div>
            <span className={styles.productItem_name}>{title}</span>
            <span className={styles.productItem_weight}></span>
          </div>
          <div className={styles.productItem_footer}>
            <div className={styles.productItemActions_root}>
              <div className={styles.productItemActions_action}>
                <div className={styles.icon} onClick={e => handleDeleteOneProduct(e, index)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                      y="8.75"
                      width="1.5"
                      height="16"
                      rx="0.75"
                      transform="rotate(-90 0 8.75)"
                      fill="currentColor"></rect>
                  </svg>
                </div>
              </div>
              <span>{count}</span>
              <div className={styles.productItemActions_action}>
                <div onClick={e => handleAddOneProduct(e, index)} className={styles.icon}>
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
            <div className={styles.productItemPrice_root}>
              <span>
                <span>{parseInt(price, 10) * count}&nbsp;₽</span>
              </span>
            </div>
          </div>
        </div>
        <div onClick={e => handleDeleteProduct(e, index)} className={styles.icon}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L5.70685 4.29263C5.70693 4.29272 5.70676 4.29255 5.70685 4.29263L7.43431 6.0201C7.43452 6.0203 7.43411 6.0199 7.43431 6.0201C7.74678 6.33192 8.25347 6.33232 8.56569 6.0201L10.2929 4.29289C10.293 4.29281 10.2928 4.29298 10.2929 4.29289L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711L9.9799 7.43431C9.97974 7.43448 9.98006 7.43415 9.9799 7.43431C9.66816 7.74658 9.66764 8.25282 9.97933 8.56512C9.97952 8.56531 9.97914 8.56493 9.97933 8.56512L12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L10.2937 11.7079C10.2934 11.7076 10.2931 11.7074 10.2929 11.7071L8.56569 9.9799C8.25346 9.66767 7.74736 9.66748 7.43489 9.97932C7.4347 9.97951 7.43509 9.97913 7.43489 9.97932L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L4.2922 10.2936C4.29243 10.2934 4.29197 10.2938 4.2922 10.2936L6.0201 8.56569C6.33252 8.25327 6.33252 7.74673 6.0201 7.43431L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
              fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </a>
  )
}
