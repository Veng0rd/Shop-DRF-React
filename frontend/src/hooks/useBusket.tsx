import React, { createContext, useContext, useState, useEffect } from 'react'

// Создаем контекст
const BasketContext = createContext()

// Создаем провайдер для контекста
export const BasketProvider = ({ children }) => {
  const savedBasketString = localStorage.getItem('foodBasket')
  console.log('render')
  const [basket, setBasket] = useState(savedBasketString != null ? JSON.parse(savedBasketString) : [])

  useEffect(() => {
    // Получаем текущее состояние из localStorage при монтировании
    const basketString = localStorage.getItem('foodBasket')
    if (basketString) {
      try {
        const basketArray = JSON.parse(basketString)
        setBasket(basketArray)
      } catch (error) {
        console.error('Ошибка при парсинге JSON:', error)
      }
    }
  }, [])

  // Обработчик изменений в localStorage
  const handleStorageChange = event => {
    if (event.key === 'foodBasket') {
      const basketString = event.newValue
      try {
        const basketArray = JSON.parse(basketString)
        setBasket(basketArray)
      } catch (error) {
        console.error('Ошибка при парсинге JSON:', error)
      }
    }
  }

  const removeFromBasketByIndex = index => {
    setBasket(prevBasket => {
      const updatedBasket = prevBasket.filter((_, i) => i !== index)
      return updatedBasket
    })
  }

  // Добавляем слушатель события storage
  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    return () => {
      // Очищаем слушатель при размонтировании
      window.removeEventListener('storage', handleStorageChange)
    }
  }, []) // Пустой массив зависимостей, чтобы useEffect выполнялся только при монтировании

  // Обновляем localStorage при изменении корзины
  useEffect(() => {
    localStorage.setItem('foodBasket', JSON.stringify(basket))
  }, [basket])

  return (
    <BasketContext.Provider value={{ basket, setBasket, removeFromBasketByIndex }}>
      {children}
    </BasketContext.Provider>
  )
}

// Создаем хук для удобного использования значения из контекста
export const useBasket = () => {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider')
  }
  return context
}
