import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import GlobalState from './components/context';
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
       <GlobalState>
         <App />
       </GlobalState>
    </StrictMode>
  </BrowserRouter>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();