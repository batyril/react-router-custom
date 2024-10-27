import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterHistoryApi from "./RouterHistoryApi.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterHistoryApi />
  </StrictMode>,
)
