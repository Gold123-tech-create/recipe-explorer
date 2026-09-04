import RecipeCard from './RecipeCard'

function RecipeGrid({ meals }) {
  if (meals.length === 0) {
    return <p>No recipes to display.</p>
  }

  return (
    <div>
      {meals.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          meal={meal}
        />
      ))}
    </div>
  )
}

export default RecipeGrid