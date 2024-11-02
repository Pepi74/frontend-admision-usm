import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/home_page'
import SimuladorPage from '../pages/simulador_page'
import BeneficiosPage from '../pages/beneficios_page'
import ArancelesPage from '../pages/aranceles_page'
import OfertaPage from '../pages/oferta_page'
import PostulacionesPage from '../pages/postulaciones_page'
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
              <Route path='/beneficios' element={<BeneficiosPage />} />
              <Route path='/aranceles' element={<ArancelesPage />} />
              <Route path='/oferta' element={<OfertaPage />} />
              <Route path='/postulaciones' element={<PostulacionesPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </> 
  )
}

export default Inicio
