import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import LoginLogoutButton from './Task-1'
import VotingEligibility from './Task-2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Theory/>
   <LoginLogoutButton/>
   <VotingEligibility/>
  </StrictMode>,
)
