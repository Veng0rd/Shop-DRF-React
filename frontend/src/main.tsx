import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from './pages/rootPage/Root'
import ErrorPage from './pages/ErrorPage'
import MainContent from './modules/categories/components/mainContent/MainContent'
import './global.css'
import Products from './modules/categories/components/products/Products'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<MainContent />} />
      <Route path="/category/:categoryId" element={<Products />} />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
