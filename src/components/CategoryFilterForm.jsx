function CategoryFilterForm({ category, onCategoryChange }) {
  const categories = [
    'All',
    'Beef',
    'Chicken',
    'Dessert',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
    'Breakfast',
    'Goat',
  ]

  return (
    <div>
      <label htmlFor="category">Category: </label>

      <select
        id="category"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilterForm