import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import UsersTable from './task-1'
import App from './task-2'
import App1 from './Task-3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory/>
    <UsersTable/>
    <App/>
    <App1/>
  </StrictMode>,
)
