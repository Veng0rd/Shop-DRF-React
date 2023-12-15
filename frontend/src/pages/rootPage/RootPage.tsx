import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Logo from '../../ui/logo/Logo'
import { ListCategories } from '../../modules/categories/index'

import styles from './rootPage.module.css'
import { SideBarMap } from '../../modules/yandexMap/index'
import { Auth } from '../../modules/auth'

import { BasketMain } from '../../modules/basket'
import { BasketProvider } from '../../hooks/useBusket'

const Root = () => {
  console.log('mainRender')
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <section className={styles.contentContainer}>
        <aside className={styles.asideLeft}>
          <div className={styles.sideBar}>
            <Logo />
            <ListCategories />
          </div>
        </aside>
        <main className={styles.main}>
          <Outlet />
        </main>
        <aside className={styles.asideRight}>
          <div className={styles.sideBarRight}>
            <Auth />
            {localStorage.getItem('address') ? <BasketMain /> : <SideBarMap />}
          </div>
        </aside>
      </section>
    </HelmetProvider>
  )
}

export default Root
