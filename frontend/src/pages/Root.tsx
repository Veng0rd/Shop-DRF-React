import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Logo from '../ui/logo/Logo'
import { YMap } from '../modules/yandexMap/index'

const Root = () => {
  return (
    <HelmetProvider>
      <Helmet></Helmet>
      <header>
        <Logo />
      </header>
      <YMap />
      <Outlet />
    </HelmetProvider>
  )
}

export default Root
