import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// IMPORTAMOS BROWSER ROUTER DE REACT ROUTER
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* LLAMAMOS BROWSER ROUTER */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
