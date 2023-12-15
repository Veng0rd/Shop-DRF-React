import React, { useState } from 'react'

import styles from './sideBarMap.module.css'
import { YMap } from '../yMap/YMap'
import AddressModal from '../addressModal/AddressModal'

export const SideBarMap = () => {
  const [isCloseAddressModal, setIsCloseAddressModal] = useState(false)

  const handleModal = () => {
    setIsCloseAddressModal(prev => !prev)
  }

  return (
    <div className={styles.EmptyAddressPlug__wrapper}>
      <div className={styles.EmptyAddressPlug_badgeWrapper}>
        <div className={styles.AddressConfirmBadge_wrapper}>
          <div className={styles.AddressConfirmBadge_text}>
            <span>Ваш город Москва?</span>
            <span>
              Товары и акции могут отличаться.
              <br />
              Выберите точный адрес
            </span>
          </div>
          <div className={styles.AddressConfirmBadge_buttons}>
            <div>
              <button onClick={handleModal} className={styles.btnGreen}>
                <span>
                  <span>
                    <span>Да, Верно</span>
                  </span>
                </span>
              </button>
            </div>
            <div>
              <button onClick={handleModal} className={styles.btnTransparent}>
                <span>
                  <span>
                    <span>Нет, другой</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.EmptyAddressPlug_map}>
        <div className={styles.MapContainer_container}>
          <YMap />
          <div className={styles.hidden} />
        </div>
      </div>
      {isCloseAddressModal && <AddressModal handleModal={handleModal} />}
    </div>
  )
}
