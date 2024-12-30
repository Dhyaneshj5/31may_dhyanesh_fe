import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import Greeting from './Task-1'
import { WelcomeMessage } from './Task-2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory />
    <Greeting/>
    <WelcomeMessage/>
  </StrictMode>,
)
