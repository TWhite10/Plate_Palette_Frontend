import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter, Routes,Route} from "react-router-dom"


const root = ReactDom.createRoot(document.getElementsById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App/>}/>
        
      
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
