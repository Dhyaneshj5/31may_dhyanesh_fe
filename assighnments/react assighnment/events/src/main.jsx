import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import ClickButton from './Task-1'
import DynamicInput from './Task-2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Theory/>
<ClickButton/>
<DynamicInput/>
  </StrictMode>,
)
