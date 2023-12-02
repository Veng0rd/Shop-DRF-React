import React, { useEffect, useState } from 'react'
import styles from './mainContents.module.css'
import { requestCategories } from '../../api/categoriesApi'
import { CategoriesData } from '../../types/interfaceApi'

const MainContent = () => {
  const [state, setState] = useState<CategoriesData[]>([])

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

  return (
    <div className={styles.container}>
      <div className={styles.homePageContent}>
        <div className={styles.homePageContent}>
          {state.map(category => (
            <div key={category.slug} className={styles.categoriesBlock}>
              <span className={styles.categoryTitle}>{category.title}</span>
              <div className={styles.categoriesGrid}>
                {category.subcategories.map(sub => (
                  <a key={sub.slug} href={`/category/${sub.slug}`}>
                    <div className={styles.categoryCard}>
                      <div className={styles.cardImage}>
                        <img
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            color: 'transparent',
                          }}
                          src={sub.image}
                          alt={sub.title}
                        />
                        <span className={styles.cardText}>{sub.title}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent