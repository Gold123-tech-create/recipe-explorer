import { useContext, memo } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContext'

function RecipeCard({ meal }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  const isFavorite = favorites.some(
    (favorite) => favorite.idMeal === meal.idMeal
  )

  return (
    <article>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width="200"
      />

      <h3>{meal.strMeal}</h3>

      <p>{meal.strCategory}</p>

      <Link to={`/recipes/${meal.idMeal}`}>
        View Recipe
      </Link>

      <button
        type="button"
        onClick={() => toggleFavorite(meal)}
        aria-label={`Favorite ${meal.strMeal}`}
      >
        {isFavorite ? '❤️' : '♡'}
      </button>
    </article>
  )
}

export default memo(RecipeCard)