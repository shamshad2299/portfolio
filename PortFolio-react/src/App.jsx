import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './componenet/about'
import Home from "./componenet/Home"
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Outlet></Outlet>
    </>
  )
}

export default App
