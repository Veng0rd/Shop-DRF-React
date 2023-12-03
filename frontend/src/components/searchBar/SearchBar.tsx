import styles from './searchBar.module.css'

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className={styles.searchContainer}>
      <input
        onChange={handleInputChange}
        className={styles.searchInput}
        type="text"
        placeholder="Искать в ЭкоЛавке"
      />
      <div className={styles.inputIcon}>
        <img src="/images/search.svg" alt="Поиск" />
      </div>
    </div>
  )
}

export default SearchBar
