import { useEffect, useState } from 'react'
import styles from './addressModal.module.css'
import { YMap } from '../../modules/yandexMap'

const AddressModal = () => {
  const [isInputCountyChange, setIsInputCountyChange] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleInputCountyClick = () => {
    setIsInputCountyChange(prev => !prev)
    setInputValue('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    // Добавление класса к body при монтировании компонента
    document.body.classList.add(`${styles.hidden}`)

    return () => {
      document.body.classList.remove(`${styles.hidden}`)
    }
  }, [])

  return (
    <>
      <nav className={styles.modal}>
        <div className={styles.modalExit}>
          <div className={styles.closeBtn}>
            <button>
              <span className={styles.btnContent}>
                <span>
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
        <div className={styles.AddressCreation_root}>
          <div className={styles.AddressCreation_map}>
            <div className={styles.MapContainer_container}>
              <YMap />
            </div>
          </div>
          <div className={styles.AddressCreation_info}>
            <span>Добавить адрес</span>
            <div className={styles.AddressSuggest_root}>
              <div style={{ height: '24px' }}></div>
              <div className={styles.Suggest_root}>
                <div className={styles.textInputContainer}>
                  <input
                    style={{ paddingLeft: `${isInputCountyChange ? '0' : ''}` }}
                    onFocus={handleInputCountyClick}
                    onBlur={handleInputCountyClick}
                    onChange={e => handleInputChange(e)}
                    className={styles.textInput}
                    type="text"
                    value={inputValue}
                    spellCheck="false"
                    autoCorrect="off"
                    autoComplete="off"
                    placeholder={`${isInputCountyChange ? '' : 'Город'}`}
                  />
                  <div style={{ opacity: `${isInputCountyChange ? '0' : '1'}` }} className={styles.inputIcon}>
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
                  <div
                    style={{ opacity: `${isInputCountyChange ? '1' : '0'}` }}
                    className={styles.inputCrossIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L5.70685 4.29263C5.70693 4.29272 5.70676 4.29255 5.70685 4.29263L7.43431 6.0201C7.43452 6.0203 7.43411 6.0199 7.43431 6.0201C7.74678 6.33192 8.25347 6.33232 8.56569 6.0201L10.2929 4.29289C10.293 4.29281 10.2928 4.29298 10.2929 4.29289L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711L9.9799 7.43431C9.97974 7.43448 9.98006 7.43415 9.9799 7.43431C9.66816 7.74658 9.66764 8.25282 9.97933 8.56512C9.97952 8.56531 9.97914 8.56493 9.97933 8.56512L12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L10.2937 11.7079C10.2934 11.7076 10.2931 11.7074 10.2929 11.7071L8.56569 9.9799C8.25346 9.66767 7.74736 9.66748 7.43489 9.97932C7.4347 9.97951 7.43509 9.97913 7.43489 9.97932L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L4.2922 10.2936C4.29243 10.2934 4.29197 10.2938 4.2922 10.2936L6.0201 8.56569C6.33252 8.25327 6.33252 7.74673 6.0201 7.43431L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                  <span style={{ display: `${isInputCountyChange ? 'block' : ''}` }}>Город</span>
                </div>
              </div>
              <div style={{ height: '24px' }}></div>
            </div>
          </div>
        </div>
      </nav>
      <label className={styles.mainOverlay}></label>
    </>
  )
}

export default AddressModal
