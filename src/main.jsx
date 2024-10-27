import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterHash from "./RouterHash.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterHash />
  </StrictMode>,
)
