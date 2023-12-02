import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Logo from '../../ui/logo/Logo'
import RegButton from '../../ui/regButton/RegButton'
import styles from './root.module.css'
import ListCategoryes from '../../modules/categories/components/listCategories/ListCategories'
import SearchProduct from '../../ui/searchProduct/SearchProduct'

const Root = () => {
  return (
    <HelmetProvider>
      <Helmet></Helmet>
      <header>
        <Logo />
      </header>
      <section className={styles.contentContainer}>
        <aside>
          <ListCategoryes />
        </aside>
        <main className={styles.main}>
          <SearchProduct />
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
