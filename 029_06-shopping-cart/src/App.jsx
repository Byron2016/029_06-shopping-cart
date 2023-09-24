import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'

import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'

export default function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 100000,
  })

  const filterProducts = (products) => {
    return products.filter((products) => {
      return (
        products.price >= filters.minPrice &&
        products.price <= filters.maxPrice &&
        (filters.category === 'all' || products.category === filters.category)
      )
    })
  }

  const filterdProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterdProducts} />
    </>
  )
}
