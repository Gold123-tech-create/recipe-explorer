import { useEffect, useState } from 'react'

function useMealSearch(query) {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
    if (!query.trim()) {
        return
    }

    async function searchMeals() {
        setLoading(true)
        setError(null)

        try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch recipes')
        }

        const data = await response.json()

        setMeals(data.meals || [])
        } catch (err) {
        setError(err.message)
        setMeals([])
        } finally {
        setLoading(false)
        }
    }

    searchMeals()
    }, [query])

    return {
    meals,
    loading,
    error,
    }
}

export default useMealSearch