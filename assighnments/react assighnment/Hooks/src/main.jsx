import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Theory from './Theory'
import Counter from './Task-1'
import DataFetcher from './Task-2'
import CounterApp from './TAsk-4'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theory/>
    <Counter/>
    <DataFetcher/>
    <CounterApp/>
    
  </StrictMode>,
)
