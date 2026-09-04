import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FavoritesContext } from '../context/FavoritesContext'
import { FavoritesProvider } from '../context/FavoritesProvider'
import { useContext } from 'react'

function TestComponent() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  const recipe = {
    idMeal: '12345',
    strMeal: 'Chicken Test Recipe',
    strMealThumb: 'test-image.jpg',
    strCategory: 'Chicken',
  }

  return (
    <div>
      <p data-testid="favorites-count">
        {favorites.length}
      </p>

      <button onClick={() => toggleFavorite(recipe)}>
        Add Favorite
      </button>
    </div>
  )
}

describe('Favorites persistence', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('saves a favorite to localStorage', () => {
    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    )

    fireEvent.click(screen.getByText('Add Favorite'))

    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites')
    )

    expect(savedFavorites).toHaveLength(1)
    expect(savedFavorites[0].strMeal).toBe('Chicken Test Recipe')
  })

  it('loads favorites from localStorage after remounting', () => {
    const recipe = {
      idMeal: '12345',
      strMeal: 'Chicken Test Recipe',
      strMealThumb: 'test-image.jpg',
      strCategory: 'Chicken',
    }

    localStorage.setItem(
      'favorites',
      JSON.stringify([recipe])
    )

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    )

    expect(screen.getByTestId('favorites-count')).toHaveTextContent('1')
  })
})