import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Logo from '../ui/logo/Logo'

const Root = () => {
  return (
    <HelmetProvider>
      <Helmet></Helmet>
      <header>
        <Logo />
      </header>
      <Outlet />
    </HelmetProvider>
  )
}

export default Root
