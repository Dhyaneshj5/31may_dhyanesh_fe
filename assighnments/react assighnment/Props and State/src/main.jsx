import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Theory from './Theory'
import UserCard from './Task-1'
import Counter from './Task-2'
import App from './card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory/>
    <App/>
    
    <Counter/>
  </StrictMode>,
)
