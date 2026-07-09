import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand: 'BMW'},
    {id: 2, brand: 'Mercedes'},
    {id: 3, brand: 'Volvo'}
  ]

  return (
    <section className="container my-2">
      <ul>
        {cars.map(car => <li key={car.id}>I am a {car.brand}</li>)}
      </ul>
      
    </section>
  )
}

export default App
