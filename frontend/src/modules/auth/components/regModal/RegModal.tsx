import React from 'react'

import styles from './regModal.module.css'

export const RegModal = () => {
  return (
    <div className="drawers">
      <nav className={styles.modal}>
        <div className={styles.Drawer_drawerNavbar}>
          <div className={styles.NavBar_root}>
            <div className={styles.NavBar_navbar}>
              <div className={styles.NavBar_back}>
                <div className={styles.NavigationButton_root}>
                  <button className={styles.navBtn}>
                    <span className={styles.navBtn__content}>
                      <span className={styles.navBtn__center}>
                        <span></span>
                      </span>
                      <div className={styles.navBtn__icon}>
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
              </div>
              <div className={styles.NavBar_right}>
                <div className={styles.NavigationButton_root}>
                  <button className={`${styles.navBtn} ${styles.navBtn__right}`}>
                    <span className={styles.navBtn__content}>
                      <span className={styles.navBtn__center}>
                        <span></span>
                      </span>
                      <div className={styles.navBtn__icon}>
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
            </div>
          </div>
        </div>
        <div className={styles.modalHeader}>
          <h1>Создание аккаунта</h1>
        </div>
        <form className={styles.RegForm_root}>
          <div className={styles.formFieldCentered}>
            <label>
              <span className={styles.Form__text}>Name</span>
              <input className={styles.Form__input} type="text" placeholder="Name" />
            </label>
            <label>
              <span className={styles.Form__text}>Email</span>
              <input className={styles.Form__input} type="text" placeholder="Email" />
            </label>
            <label>
              <span className={styles.Form__text}>Password</span>
              <input className={styles.Form__input} type="text" placeholder="Password" />
            </label>
            <div className={styles.btnReg__notActive}>
              <button className={styles.btnReg} disabled>
                <span className={styles.btnReg__content}>
                  <span className={styles.btnReg__center}>
                    <span>Зарегистрироваться</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </form>
        <div className={styles.LoginWizardOverlay_bottomLayout}>
          <div className={styles.LoginWizardOverlay_agreement}>
            <span>
              Продолжая авторизацию, вы соглашаетесь с политикой конфиденциальности, условиями сервиса и
              условиями продажи товаров
            </span>
          </div>
        </div>
      </nav>
      <label className={styles.overlay}></label>
    </div>
  )
}
