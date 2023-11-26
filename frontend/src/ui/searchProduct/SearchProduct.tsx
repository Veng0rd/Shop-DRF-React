import styles from './searchProduct.module.css'

const SearchProduct = () => {
  return (
    <div className={styles.searchContainer}>
      <input
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

export default SearchProduct
