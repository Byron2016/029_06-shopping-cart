import './App.css'
import { Products } from './components/Products'

import { products } from './mocks/products.json'

export default function App() {
  return (
    <>
      <h1>Shopping Cart 🚗</h1>
      <Products products={products} />
    </>
  )
}
