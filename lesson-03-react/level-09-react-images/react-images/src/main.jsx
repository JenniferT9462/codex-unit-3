import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const divTag =  document.getElementById('root');

createRoot(divTag)
.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
