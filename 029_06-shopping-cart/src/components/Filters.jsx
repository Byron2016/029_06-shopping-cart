import { useId, useState } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChanceMinPrice = (event) => {
    // aquí hay un error
    // DOS FUENTES DE LA VERDAD 26.41
    setMinPrice(event.target.value)
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChanceCategory = (event) => {
    // aquí hay un error
    // 27.37 estamos pasando la función de actualización estado
    // nativa de React a un componente hijo
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Base price:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1300'
          onChange={handleChanceMinPrice}
        />
        <span> ${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select id={categoryFilterId} onChange={handleChanceCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Celular Phones</option>
        </select>
      </div>
    </section>
  )
}
