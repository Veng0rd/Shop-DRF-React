import React, { useEffect, useState } from 'react'
import { requestCategories } from '../api/categoriesApi'
import { CategoriesData } from '../types/interfaceApi'
import styles from './listCategories.module.css'

const ListCategories = () => {
  const [state, setState] = useState<CategoriesData[]>([])
  const [isCategoryVisible, setIsCategoryVisible] = useState(false)

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

  const toggleCategoryVisibility = () => {
    setIsCategoryVisible(prev => !prev)
  }

  console.log(state)
  return (
    <div className={styles.container}>
      {state.map((category, i) => (
        <>
          <div
            onClick={toggleCategoryVisibility}
            className={styles.category}
            key={i}>
            <div className={styles.categoryIcon}>
              <div
                style={{ opacity: `${isCategoryVisible ? '1' : '0'}` }}
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
              </div>
              <div
                className={styles.categoryImage}
                style={{
                  backgroundImage: `url(${category.image})`,
                  opacity: `${isCategoryVisible ? '0' : '1'}`,
                }}></div>
            </div>
            <span>{category.title}</span>
          </div>
          <div
            style={{ display: `${isCategoryVisible ? 'flex' : 'none'}` }}
            className={styles.subContainer}>
            {category.subcategories.map(sub => (
              <a key={sub.slug} href="#">
                <span>{sub.title}</span>
              </a>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default ListCategories
