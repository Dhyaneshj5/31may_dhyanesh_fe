import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import UserList from './Task-2'
import FruitList from './Task-1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory/>
    <FruitList/>
    <UserList/>
  </StrictMode>,
)
