import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Logo from '../../ui/logo/Logo'
import RegButton from '../../ui/regButton/RegButton'
import { ListCategories } from '../../modules/categories/index'

import styles from './rootPage.module.css'

const Root = () => {
  return (
    <HelmetProvider>
      <Helmet></Helmet>
      <header>
        <Logo />
      </header>
      <section className={styles.contentContainer}>
        <aside>
          <ListCategories />
        </aside>
        <main className={styles.main}>
          <Outlet />
        </main>
        <aside>
          <RegButton />
        </aside>
      </section>
    </HelmetProvider>
  )
}

export default Root