import styles from './loginButton.module.css'

type TLoginButton = {
  handleOpenModal: () => void
  name: string
}

const LoginButton: React.FC<TLoginButton> = ({ handleOpenModal, name }) => {
  return (
    <button onClick={handleOpenModal} className={styles.loginButton}>
      <img src="/images/regButton.svg" alt="Профиль" />
      <div className={styles.text}>{name.length != 0 ? name : 'Войти'}</div>
    </button>
  )
}

export default LoginButton
