import './index.css'

import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello, world! {count} </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}