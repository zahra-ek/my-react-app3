
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'
//import "shabnam-font/dist/font-face.css";

createRoot(document.getElementById('root')).render(

<StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</StrictMode>

)
