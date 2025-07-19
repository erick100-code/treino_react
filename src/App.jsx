import { useState } from 'react'
import './App.css'

function App() {

  const [use, usealter] = useState(0)

  function increment() {
    usealter(use + 1)
    usealter(use + 1)
    usealter(use + 1)
    usealter(use + 1)
    usealter(use + 1)
    
  
  }

  return (
    <div>
      
      <h1 onClick={increment}>{use}</h1>
      <h1>teste</h1>
    </div>
  )
}

export default App
