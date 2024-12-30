import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import UserList from './Task-1'
import LifecycleExample from './Task-2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Theory/>
   <UserList/>
   <LifecycleExample/>
  </StrictMode>,
)
