import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import ReactRouter from "./RouteVariants/ReactRouter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ReactRouter/>
      </BrowserRouter>
  </StrictMode>,
)
