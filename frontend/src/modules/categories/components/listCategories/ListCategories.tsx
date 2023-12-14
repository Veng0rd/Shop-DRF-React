import { useEffect, useState } from 'react'
import { requestCategories } from '../../api/categoriesApi'
import { CategoriesData } from '../../types/interfaceApi'
import { useLocation } from 'react-router-dom'

import styles from './listCategories.module.css'

export const ListCategories = () => {
  const location = useLocation()
  const [state, setState] = useState<CategoriesData[]>([])
  const [isCategoryVisible, setIsCategoryVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await requestCategories()
        setState(result)
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    state.map(card => {
      if (location.pathname.indexOf(card.slug) !== -1) {
        setIsCategoryVisible(prev => ({ ...prev, [card.slug]: true }))
      }
    })
  }, [state])

  const toggleCategoryVisibility = (id: string) => {
    setIsCategoryVisible(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className={styles.container}>
      {state.map(category => (
        <>
          <div
            onClick={() => toggleCategoryVisibility(category.slug)}
            className={styles.category}
            key={category.slug}>
            <div className={styles.categoryIcon}>
              <div
                style={{
                  opacity: `${isCategoryVisible[category.slug] ? '1' : '0'}`,
                }}
                className={styles.icon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.8"
                    d="M4 7L8 11L12 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </div>
              <div
                className={styles.categoryImage}
                style={{
                  backgroundImage: `url(${category.image})`,
                  opacity: `${isCategoryVisible[category.slug] ? '0' : '1'}`,
                }}></div>
            </div>
            <span>{category.title}</span>
          </div>
          <div
            style={{
              display: `${isCategoryVisible[category.slug] ? 'flex' : 'none'}`,
            }}
            className={styles.subContainer}>
            {category.subcategories.map(sub => (
              <a key={sub.slug + '1'} href={`/category/${sub.slug}`}>
                <span>{sub.title}</span>
              </a>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}
