import React, { useEffect, useState } from 'react'

import styles from './basketMain.module.css'
import { BasketProduct } from '../basketProduct/BasketProduct'
import { useBasket } from '../../../../hooks/useBusket'

export const BasketMain = () => {
  const { basket, setBasket } = useBasket()
  const [address, setAddress] = useState('')

  const totalPrice = basket.reduce((acc, item) => acc + item.count * parseInt(item.price, 10), 0)

  useEffect(() => {
    const addressString = localStorage.getItem('address')
    if (addressString) {
      try {
        const addressObject = JSON.parse(addressString)
        setAddress(addressObject.address)
      } catch (error) {
        console.error('Ошибка при парсинге JSON:', error)
      }
    } else {
      console.warn('В localStorage нет сохраненного адреса.')
    }
  }, [])

  return (
    <div className={styles.basket_root}>
      <div className={styles.basketHeader_root}>
        <div className={styles.basketHeader_address}>
          <span>{address}</span>
        </div>
        <span>15&nbsp;минут</span>
      </div>
      {basket.length === 0 ? (
        <>
          <div className={styles.basketGreeting_root}>
            <div className={styles.icon}>
              <svg
                width="135"
                height="134"
                viewBox="0 0 135 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M80.0832 28.5058C77.7273 28.4247 75.1879 28.3649 73.0368 29.4362C71.2693 30.2872 69.3328 30.7291 67.3711 30.7291C65.4094 30.7291 63.4729 30.2872 61.7054 29.4362C59.5714 28.3649 57.0107 28.4247 54.659 28.5058L54.6206 28.2625C54.6206 20.7466 60.3269 14.6562 67.369 14.6562C74.4111 14.6562 80.1174 20.7466 80.1174 28.2625"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M59.2554 40.1353C58.5541 36.3671 58.1093 32.5556 57.9238 28.7271"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M76.0593 39.2688C75.8416 40.4297 75.5856 41.5778 75.274 42.713C74.3991 45.9097 71.0957 48.9144 67.5703 48.9144C64.045 48.9144 60.7416 45.9268 59.888 42.713C59.6547 41.8594 59.4498 41.0059 59.2734 40.1523"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M77.224 28.7271C77.0431 32.2605 76.6569 35.7804 76.0674 39.2689"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M65.2438 34.2333C65.2058 34.3754 65.1283 34.5037 65.0203 34.6034C64.9123 34.7032 64.7781 34.7702 64.6335 34.7967C64.4902 34.8123 64.3454 34.7893 64.2141 34.73C64.0827 34.6707 63.9696 34.5773 63.8866 34.4595C63.494 33.9303 63.5238 31.6555 64.6079 31.8988C64.7608 31.946 64.8992 32.0316 65.0097 32.1474C65.1203 32.2632 65.1994 32.4053 65.2396 32.5603C65.4024 33.1046 65.4024 33.6847 65.2396 34.2291"
                  fill="#A6A6A6"></path>
                <path
                  d="M71.215 34.2333C71.177 34.3754 71.0995 34.5037 70.9915 34.6034C70.8834 34.7032 70.7493 34.7702 70.6047 34.7967C70.4614 34.8123 70.3166 34.7893 70.1852 34.73C70.0539 34.6707 69.9408 34.5773 69.8578 34.4595C69.4652 33.9303 69.495 31.6555 70.5791 31.8988C70.732 31.946 70.8704 32.0316 70.9809 32.1474C71.0915 32.2632 71.1706 32.4053 71.2107 32.5603C71.3736 33.1046 71.3736 33.6847 71.2107 34.2291"
                  fill="#A6A6A6"></path>
                <path
                  d="M59.1869 40.1618C56.1055 41.1519 54.3556 37.2894 55.2903 34.8055C55.7811 33.5038 56.9591 33.0983 58.2224 33.6019"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M76.2207 39.406C79.3022 40.3962 81.052 36.5294 80.1173 34.0455C79.6265 32.7651 78.4486 32.3383 77.181 32.8462"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path d="M60.2801 28.8981L58.2229 33.5886L54.6592 28.5055" fill="#A6A6A6"></path>
                <path
                  d="M60.2801 28.8981L58.2229 33.5886L54.6592 28.5055"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path d="M74.6797 29.2182L77.1807 32.846L80.0829 28.5055" fill="#A6A6A6"></path>
                <path d="M74.6797 29.2182L77.1807 32.846L80.0829 28.5055" fill="#A6A6A6"></path>
                <path
                  d="M74.6797 29.2182L77.1807 32.846L80.0829 28.5055"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M61.2868 52.2397C57.6206 53.2726 51.8162 54.3737 48.483 56.2516C45.4954 57.9588 43.2334 60.8567 41.7012 63.887"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M87.4666 75.9051C87.4666 77.6449 86.7754 79.3134 85.5452 80.5437C84.315 81.7739 82.6465 82.465 80.9067 82.465C77.8893 82.465 75.337 80.1902 74.5048 77.3434C74.2078 76.2527 74.1837 75.1057 74.4345 74.0034C74.6853 72.9011 75.2034 71.8775 75.9431 71.0226C77.7783 69.0508 81.2567 68.7777 83.6937 69.5288C86.3398 70.3483 87.4666 73.3401 87.4666 75.9051Z"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M87.4458 74.4371L96.0756 94.6374"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M49 74.4371V119.81"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M86.165 102.401V120.258"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M31.288 63.6868C30.2883 64.6283 29.6385 65.8818 29.4454 67.2414C29.2523 68.601 29.5273 69.9858 30.2253 71.1685C31.7361 73.9 35.1846 74.7023 38.0143 73.7719C39.3917 73.349 40.5782 72.4584 41.3689 71.2538C43.0035 68.6034 42.4103 63.3368 38.7014 62.3808C38.7953 60.3193 39.1923 57.9848 39.2862 55.9233C39.3331 54.8948 39.7812 52.2273 38.4795 51.7365C35.381 50.5713 35.573 56.3288 35.4535 58.0189L35.1847 61.8046C34.6085 59.7688 34.1475 57.686 33.5586 55.7398C33.3253 54.7606 32.9576 53.8184 32.466 52.94C32.3571 52.7408 32.2016 52.571 32.0128 52.445C31.8239 52.3191 31.6074 52.2408 31.3816 52.2169C31.1559 52.1929 30.9277 52.2241 30.7167 52.3077C30.5056 52.3913 30.318 52.5248 30.1698 52.6968C29.1711 53.815 30.0418 56.2264 30.3277 57.4726L31.6807 63.3368"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M41.6974 66.1957L36.196 65.0306C35.7701 64.9406 35.3278 64.9671 34.9156 65.1074C34.698 65.1724 34.4965 65.2824 34.3243 65.4304C34.152 65.5784 34.0128 65.761 33.9158 65.9663C33.8188 66.1716 33.7661 66.3951 33.7611 66.6221C33.7562 66.8492 33.7991 67.0747 33.8871 67.2841C34.348 68.6413 35.9186 68.7949 37.1435 69.0937C38.7013 69.4735 40.2805 69.8022 41.8639 70.0326"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M30.2256 71.1678C30.2512 73.9291 30.2725 77.5441 30.2939 80.3054C30.3195 83.6003 30.1829 86.8952 30.2939 90.1858C30.4091 93.263 30.5371 96.7798 32.0011 99.5155C33.9729 103.246 37.3403 105.371 41.6808 104.637C45.0951 104.061 47.3742 101.381 49.0003 97.9833"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M41.8638 70.0414V93.8993"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M48.2021 56.7681L48.949 86.7291C51.0818 81.0096 52.2947 74.9882 52.5427 68.889C52.7603 64.173 53.2085 59.141 53.0762 54.4121"
                  fill="#A6A6A6"></path>
                <path
                  d="M48.2021 56.7681L48.949 86.7291C51.0818 81.0096 52.2947 74.9882 52.5427 68.889C52.7603 64.173 53.2085 59.141 53.0762 54.4121"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M82.0169 54.899L80.1177 69.1455V69.1839C81.3125 69.0717 82.5178 69.1891 83.6686 69.5296C84.3032 69.7245 84.8864 70.0584 85.3758 70.5069L85.3331 70.0375L87.1043 56.7598"
                  fill="#A6A6A6"></path>
                <path
                  d="M82.0169 54.899L80.1177 69.1455V69.1839C81.3125 69.0717 82.5178 69.1891 83.6686 69.5296C84.3032 69.7245 84.8864 70.0584 85.3758 70.5069L85.3331 70.0375L87.1043 56.7598"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M58.7774 19.0477C58.7262 20.6824 58.7134 22.317 58.7518 23.9516C59.7335 22.0225 60.3267 19.2355 60.5358 17.0802"
                  fill="#A6A6A6"></path>
                <path
                  d="M58.7774 19.0477C58.7262 20.6824 58.7134 22.317 58.7518 23.9516C59.7335 22.0225 60.3267 19.2355 60.5358 17.0802"
                  fill="#A6A6A6"></path>
                <path
                  d="M58.7774 19.0477C58.7262 20.6824 58.7134 22.317 58.7518 23.9516C59.7335 22.0225 60.3267 19.2355 60.5358 17.0802"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M68.8677 15.2321C68.6376 17.5377 68.1215 19.8058 67.3312 21.984H67.1605C66.3662 19.807 65.85 17.5384 65.624 15.2321"
                  fill="#A6A6A6"></path>
                <path
                  d="M68.8677 15.2321C68.6376 17.5377 68.1215 19.8058 67.3312 21.984H67.1605C66.3662 19.807 65.85 17.5384 65.624 15.2321"
                  fill="#A6A6A6"></path>
                <path
                  d="M68.8677 15.2321C68.6376 17.5377 68.1215 19.8058 67.3312 21.984H67.1605C66.3662 19.807 65.85 17.5384 65.624 15.2321"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M75.6662 18.621C75.7203 20.2542 75.7303 21.8889 75.6961 23.5249C74.7145 21.5958 74.1212 18.8088 73.9121 16.6535"
                  fill="#A6A6A6"></path>
                <path
                  d="M75.6662 18.621C75.7203 20.2542 75.7303 21.8889 75.6961 23.5249C74.7145 21.5958 74.1212 18.8088 73.9121 16.6535"
                  fill="#A6A6A6"></path>
                <path
                  d="M75.6662 18.621C75.7203 20.2542 75.7303 21.8889 75.6961 23.5249C74.7145 21.5958 74.1212 18.8088 73.9121 16.6535"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M74.0225 52.2397C77.6886 53.2726 83.3821 54.3737 86.7068 56.2516C91.0687 58.7398 93.2027 63.3108 94.8159 67.8519C96.8133 73.4728 99.1095 79.0211 100.872 84.7743C102.468 89.9855 105.627 96.4728 102.737 101.808C100.987 105.034 97.5176 107.454 93.7447 107.147C89.5151 106.801 86.758 103.967 84.9655 100.318C82.6096 95.5595 78.5038 86.1059 76.7966 81.0698"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M61.2871 45.7313V52.2399C63.276 55.889 70.4803 57.5237 74.0227 52.2399L74 45.5"
                  stroke="#A6A6A6"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M61.288 52.2399C57.6219 53.2727 51.8174 54.3739 48.4842 56.2518C47.1988 57.0007 46.0334 57.9388 45.0271 59.0345L42.731 62.0605V45.7569L61.2795 45.7313"
                  fill="#A6A6A6"></path>
                <path
                  d="M61.288 52.2399C57.6219 53.2727 51.8174 54.3739 48.4842 56.2518C47.1988 57.0007 46.0334 57.9388 45.0271 59.0345L42.731 62.0605V45.7569L61.2795 45.7313"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M74.0231 52.2399C77.6892 53.2727 83.3827 54.3739 86.7074 56.2518C88.2638 57.1628 89.6846 58.2877 90.9284 59.5936L93.4124 63.8871L93.3783 45.7313H73.9121"
                  fill="#A6A6A6"></path>
                <path
                  d="M74.0231 52.2399C77.6892 53.2727 83.3827 54.3739 86.7074 56.2518C88.2638 57.1628 89.6846 58.2877 90.9284 59.5936L93.4124 63.8871L93.3783 45.7313H73.9121"
                  stroke="#A6A6A6"
                  strokeWidth="1.675"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </div>
            <span>Соберите корзину, а мы всё быстро привезём</span>
          </div>
          <div className={styles.basketButton_root}>
            <button className={styles.basketButton} disabled>
              <span className={styles.content}>
                <span className={styles.center}>
                  <span>Заказ от&nbsp;400&nbsp;₽</span>
                </span>
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.basketItems_root}>
            {basket.map((product, i) => (
              <BasketProduct
                price={product.price}
                title={product.title}
                img={product.small_image}
                count={product.count}
                index={i}
              />
            ))}
          </div>
          <div className={styles.basketSpacer}></div>
          <div className={styles.basketFooter}>
            <div className={styles.OrderPrice_root}>
              <span className={styles.OrderPrice_title}></span>
              <span className={styles.OrderPrice_price}>
                <span>{totalPrice}&nbsp;₽</span>
              </span>
            </div>
            <div style={{ opacity: `${totalPrice >= 400 ? '1' : ''}` }} className={styles.basketButton_root}>
              <button
                style={{ cursor: `${totalPrice >= 400 ? 'pointer' : null}` }}
                className={styles.basketButton}
                disabled={totalPrice >= 400 ? false : true}>
                <span className={styles.content}>
                  <span className={styles.center}>
                    <span>Заказ от&nbsp;400&nbsp;₽</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
