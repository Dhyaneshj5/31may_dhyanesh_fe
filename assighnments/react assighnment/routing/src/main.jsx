import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import App from './Task-1'
import App1 from './Task-2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory/>
    <App />
    <App1/>
  </StrictMode>,
)
