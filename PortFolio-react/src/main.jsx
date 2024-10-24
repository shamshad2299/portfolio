import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouterWrapper from './Router/RouterWrapper.jsx'
import { Router, RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterWrapper>

      <RouterProvider router = {RouterWrapper}/>

    </RouterWrapper>
  </StrictMode>,
)
