import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-7xl font-bold text-red-400">
      Hello world!
    </h1>
    </>
  )
}

export default App
