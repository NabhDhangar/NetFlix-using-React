import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
// import { Practises } from './practise.jsx'
// import Profile from './components/profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practises/> */}
    {/* <Profile/> */}
  </StrictMode>,
)
