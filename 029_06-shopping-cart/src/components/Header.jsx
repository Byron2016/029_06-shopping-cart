import { Filters } from './Filters.jsx'

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shopping Cart 🚗</h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}
