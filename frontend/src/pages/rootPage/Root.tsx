import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Logo from '../../ui/logo/Logo'
import { YMap } from '../../modules/yandexMap/index'
import SearchProduct from '../../ui/searchProduct/SearchProduct'
import RegButton from '../../ui/regButton/RegButton'
import styles from './root.module.css'
import React, { useEffect } from 'react'
import { test } from '../../modules/yandexMap/index'
const Root = () => {
  useEffect(() => {
    test()
  }, [])
  return (
    <HelmetProvider>
      <Helmet></Helmet>
      <header>
        <Logo />
      </header>
      <section className={styles.contentContainer}>
        <aside></aside>
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
