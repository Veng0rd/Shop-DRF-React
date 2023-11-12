import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/images/logo.svg" alt="Лист" />
      <h1>Лавка</h1>
    </div>
  )
}

export default Logo
