import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const cars = ['BMW', 'Mercedes', 'Volvo']

  return (
    <section className="container my-2">
      <ul>
        {cars.map(car => <li>I am a {car}</li>)}
      </ul>
      
    </section>
  )
}

export default App
