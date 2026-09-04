import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CategoryFilterForm from '../components/CategoryFilterForm'
import RecipeGrid from '../components/RecipeGrid'
import useMealSearch from '../hooks/useMealSearch'

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')

  const { meals, loading, error } = useMealSearch(searchTerm)

  const filteredMeals = useMemo(() => {
    if (category === 'All') {
      return meals
    }

    return meals.filter((meal) => meal.strCategory === category)
  }, [meals, category])

  function handleSearch(query) {
    setSearchTerm(query)
  }

  return (
    <section>
      <h2>Search Recipes</h2>

      <SearchBar onSearch={handleSearch} />

      <CategoryFilterForm
        category={category}
        onCategoryChange={setCategory}
      />

      {loading && <p>Loading recipes...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && filteredMeals.length === 0 && searchTerm && (
        <p>No recipes found for this category.</p>
      )}

      {!loading && !error && searchTerm && (
        <RecipeGrid meals={filteredMeals} />
      )}
    </section>
  )
}

export default SearchPage