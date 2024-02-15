import { useRef } from 'react'

import styles from './searchBar.module.css'

type SearchBarProps = {
  setSearchQuery: (query: string) => void
  searchQuery: string
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery, searchQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (inputValue.length >= 3) {
      setSearchQuery(inputValue)
    }
  }

  const handleInputClear = () => {
    setSearchQuery('')

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className={styles.mainHeader}>
      <div className={styles.searchContainer}>
        <div className={styles.root}>
          <input
            ref={inputRef}
            onChange={handleInputChange}
            className={styles.searchInput}
            type="text"
            placeholder="Искать в ЭкоЛавке"
          />
          <div className={styles.inputIcon}>
            {searchQuery.length >= 3 ? (
              <button onClick={handleInputClear}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 7C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H5.62132C5.17587 9 4.95278 9.53857 5.26777 9.85355L8.70711 13.2929C9.09763 13.6834 9.09763 14.3166 8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L1.29289 8.70711C0.902369 8.31658 0.902369 7.68342 1.29289 7.29289L7.29289 1.29289C7.68342 0.902369 8.31658 0.902369 8.70711 1.29289C9.09763 1.68342 9.09763 2.31658 8.70711 2.70711L5.26777 6.14645C4.95298 6.46145 5.17593 7 5.62132 7L14 7Z"
                    fill="currentColor"></path>
                </svg>
              </button>
            ) : (
              <img src="/images/search.svg" alt="Поиск" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
