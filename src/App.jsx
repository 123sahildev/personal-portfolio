import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import  Home from './pages/home.jsx';
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
