import { useEffect, useState } from 'react'
import { FavoritesContext } from './FavoritesContext'

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')

    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(recipe) {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.idMeal === recipe.idMeal
      )

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (favorite) => favorite.idMeal !== recipe.idMeal
        )
      }

      return [...currentFavorites, recipe]
    })
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}