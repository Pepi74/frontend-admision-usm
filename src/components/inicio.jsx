import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/home_page'
import SimuladorPage from '../pages/simulador_page'
import NavBar from './nav_bar'
const Inicio = () => {
  return (
    <>
      <BrowserRouter>
        <div className='inicio'>
          <NavBar />
          <div className='inicio__page'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/simulador' element={<SimuladorPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </> 
  )
}

export default Inicio
