import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  it('shows an error when the search is empty', () => {
    const onSearch = vi.fn()

    render(<SearchBar onSearch={onSearch} />)

    fireEvent.click(screen.getByRole('button', { name: 'Search' }))

    expect(
      screen.getByText('Please enter a recipe name.')
    ).toBeInTheDocument()

    expect(onSearch).not.toHaveBeenCalled()
  })
})