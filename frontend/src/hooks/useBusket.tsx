import React, { createContext, useContext, useState, useEffect, useReducer } from 'react'

const BasketContext = createContext()

const ADD_TO_BASKET = 'ADD_TO_BASKET'
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

const basketReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id)

      if (existingItemIndex !== -1) {
        // Увеличиваем счетчик, если товар уже в корзине
        return state.map((item, index) =>
          index === existingItemIndex ? { ...item, count: item.count + 1 } : item,
        )
      } else {
        // Добавляем товар с начальным счетчиком 1, если его нет в корзине
        return [...state, { ...action.payload, count: 1 }]
      }

    case 'ADD_ONE_TO_BASKET':
      return state.map((item, index) =>
        index === action.payload ? { ...item, count: item.count + 1 } : item,
      )

    case REMOVE_FROM_BASKET:
      const indexToRemove = action.payload
      const updatedBasket = state.map((item, index) =>
        index === indexToRemove ? { ...item, count: Math.max(item.count - 1, 0) } : item,
      )

      // Фильтруем товары с количеством больше 0
      const filteredBasket = updatedBasket.filter(item => item.count > 0)

      localStorage.setItem('foodBasket', JSON.stringify(filteredBasket))
      return filteredBasket

    case 'REMOVE_ONE_FROM_BASKET':
      const indexToRemoveOne = action.payload
      const updatedBasketOne = state.map((item, index) =>
        index === indexToRemoveOne ? { ...item, count: Math.max(item.count - 1, 0) } : item,
      )

      // Фильтруем товары с количеством больше 0
      const filteredBasketOne = updatedBasketOne.filter(item => item.count > 0)

      localStorage.setItem('foodBasket', JSON.stringify(filteredBasketOne))
      return filteredBasketOne

    default:
      return state
  }
}

export const BasketProvider = ({ children }) => {
  const savedBasketString = localStorage.getItem('foodBasket')
  console.log('render')
  const [basket, dispatch] = useReducer(
    basketReducer,
    savedBasketString != null ? JSON.parse(savedBasketString) : [],
  )

  useEffect(() => {
    const basketString = localStorage.getItem('foodBasket')
    if (basketString) {
      try {
        const basketArray = JSON.parse(basketString)
        dispatch({ type: 'SET_BASKET', payload: basketArray })
      } catch (error) {
        console.error('Ошибка при парсинге JSON:', error)
      }
    }
  }, [])

  const handleStorageChange = event => {
    if (event.key === 'foodBasket') {
      const basketString = event.newValue
      try {
        const basketArray = JSON.parse(basketString)
        dispatch({ type: 'SET_BASKET', payload: basketArray })
      } catch (error) {
        console.error('Ошибка при парсинге JSON:', error)
      }
    }
  }

  const removeFromBasketByIndex = index => {
    dispatch({ type: REMOVE_FROM_BASKET, payload: index })
    // Удаляем элемент из локального хранилища
    const updatedBasket = [...basket]
    updatedBasket.splice(index, 1)
    localStorage.setItem('foodBasket', JSON.stringify(updatedBasket))
  }

  const removeOneFromBasketByIndex = index => {
    dispatch({ type: 'REMOVE_ONE_FROM_BASKET', payload: index })
  }

  const addOneToBasketByIndex = index => {
    dispatch({ type: 'ADD_ONE_TO_BASKET', payload: index })
  }

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    // Фильтруем повторы, обновляем счетчики
    const filteredBasket = basket.reduce((acc, item) => {
      const existingItem = acc.find(i => i.id === item.id)

      if (existingItem) {
        return acc.map(i =>
          i.id === item.id ? { ...i, count: item.count > i.count ? item.count : i.count } : i,
        )
      }

      return [...acc, item]
    }, [])

    dispatch({ type: 'SET_BASKET', payload: filteredBasket })
  }, [basket])

  useEffect(() => {
    localStorage.setItem('foodBasket', JSON.stringify(basket))
  }, [basket])

  return (
    <BasketContext.Provider
      value={{
        basket,
        dispatch,
        removeOneFromBasketByIndex,
        removeFromBasketByIndex,
        addOneToBasketByIndex,
      }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider')
  }
  return context
}
