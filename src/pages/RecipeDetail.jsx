import { useParams } from 'react-router-dom'
import useMealDetail from '../hooks/useMealDetail'

function RecipeDetail() {
  const { id } = useParams()

  const { meal, loading, error } = useMealDetail(id)

  if (loading) {
    return <p>Loading recipe...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!meal) {
    return <p>Recipe not found.</p>
  }

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const ingredient = meal[`strIngredient${index + 1}`]
    const measure = meal[`strMeasure${index + 1}`]

    if (!ingredient?.trim()) {
      return null
    }

    return `${measure?.trim() || ''} ${ingredient.trim()}`.trim()
  }).filter(Boolean)

  return (
    <article>
      <h2>{meal.strMeal}</h2>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width="300"
      />

      <p>
        <strong>Category:</strong> {meal.strCategory}
      </p>

      <p>
        <strong>Area:</strong> {meal.strArea}
      </p>

      <h3>Ingredients</h3>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>

      <p>{meal.strInstructions}</p>
    </article>
  )
}

export default RecipeDetail