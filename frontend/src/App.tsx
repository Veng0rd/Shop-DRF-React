import { Route, Routes, useLocation } from 'react-router-dom'
import RootPage from './pages/rootPage/RootPage'
import { MainContent } from './modules/categories/index'
import { ProductList } from './modules/categories/index'
import ProductPage from './pages/productPage/ProductPage'

const App = () => {
  const location = useLocation()
  const previousLocation = location.state?.previousLocation

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<RootPage />}>
          <Route index element={<MainContent />} />
          <Route path="category/:id" element={<ProductList />}></Route>
        </Route>
      </Routes>

      {previousLocation && (
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
