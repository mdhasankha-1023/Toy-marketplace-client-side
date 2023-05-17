import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-2xl text-center'>Toy marketplace is on</h1>
      <button className="btn btn-block">block</button>
    </div>
  )
}

export default App
