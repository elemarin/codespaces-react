import './index.css'

import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <h1>{count} </h1>
      <div className="break"></div>
      <div className='buttons-row'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}