import { useEffect, useState } from 'react'

function useMealDetail(id) {
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) {
      return
    }

    async function fetchMeal() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch recipe details')
        }

        const data = await response.json()

        if (!data.meals) {
          throw new Error('Recipe not found')
        }

        setMeal(data.meals[0])
      } catch (err) {
        setError(err.message)
        setMeal(null)
      } finally {
        setLoading(false)
      }
    }

    fetchMeal()
  }, [id])

  return {
    meal,
    loading,
    error,
  }
}

export default useMealDetail