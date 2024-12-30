import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import Form from './Task-1'
import Form1 from './Task-2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory/>
    <Form/>
    <Form1/>
  </StrictMode>,
)
