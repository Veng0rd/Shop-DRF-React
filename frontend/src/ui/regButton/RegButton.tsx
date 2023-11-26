import styles from './regButton.module.css'

const RegButton = () => {
  return (
    <button className={styles.regButton}>
      <img src="/images/regButton.svg" alt="Профиль" />
      <div className={styles.text}>Войти</div>
    </button>
  )
}

export default RegButton
