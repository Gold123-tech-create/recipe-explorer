import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import RecipeCard from '../components/RecipeCard'

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext)

  if (favorites.length === 0) {
    return (
      <section>
        <h2>My Favorite Recipes</h2>
        <p>You haven't added any recipes to your favorites yet.</p>
      </section>
    )
  }

  return (
    <section>
      <h2>My Favorite Recipes</h2>

      <div className="projects">
        {favorites.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
          />
        ))}
      </div>
    </section>
  )
}

export default FavoritesPage