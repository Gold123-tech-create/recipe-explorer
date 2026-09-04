import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!query.trim()) {
      setError('Please enter a recipe name.')
      return
    }

    setError('')
    onSearch(query.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a recipe..."
      />

      <button type="submit">Search</button>

      {error && <p>{error}</p>}
    </form>
  )
}

export default SearchBar