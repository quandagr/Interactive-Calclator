import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calculator } from './Component/Calculator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Interactive Calculator</h1>
      <Calculator />
    </div>
  )
}

export default App
