import { Link } from 'react-router-dom'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <>
      <Link to="/" reloadDocument>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Лист" />
          <h1>Лавка</h1>
        </div>
      </Link>
    </>
  )
}

export default Logo
