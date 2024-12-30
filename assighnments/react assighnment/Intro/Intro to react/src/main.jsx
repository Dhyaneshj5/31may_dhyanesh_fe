import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './assets/theory'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory />
  </StrictMode>,
)
