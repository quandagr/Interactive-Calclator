import React from 'react'
import { useState } from 'react'
export const Calculator = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState(null)
function calculateSum() {
    let sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum)
  }
function clearInputs() {
    setNum1("")
    setNum2("")
    setResult(null)
  }
  return (
    <div>
        
        <label>Number 1:</label>
        <input type={"number"} value={num1} onChange={(e) => setNum1(e.target.value)} />
        
        <label>Number 2:</label>
        <input type={"number"} value={num2} onChange={(e) => setNum2(e.target.value)} />

        <button onClick={calculateSum}>+</button>
        <button onClick={calculateSum}>-</button>
        <button onClick={calculateSum}>*</button>
        <button onClick={calculateSum}>/</button>   
        <button onClick={clearInputs}>clear</button>
        <h2>Result: {result}</h2>
        
    </div>

  )
}
