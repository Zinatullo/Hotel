import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { MdWbSunny } from 'react-icons/md'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />    
    </BrowserRouter>
)