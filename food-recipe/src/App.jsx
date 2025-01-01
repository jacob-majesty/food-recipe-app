import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
        
        
      </div>
  )
}

export default App
