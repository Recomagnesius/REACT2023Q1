import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
  
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={ <h1>ABOUT</h1> } />
        <Route path="/404" element={<h1 className='underline'>PageNotFound</h1>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  )
}

export default App
