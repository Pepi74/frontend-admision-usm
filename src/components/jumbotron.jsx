import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import UsmLogo from '../assets/usm-logo.svg';
export const BarraLogo = () => {
  const location = useLocation();

  // Define el contenido que deseas mostrar en función de la ruta
  const getHeadingText = () => {
    switch (location.pathname) {
      case '/':
        return 'POSTULACIONES ABIERTAS ADMISIÓN 2025';
      case '/oferta':
        return 'CONOCE NUESTRA OFERTA 2025';
      case '/beneficios':
        return 'CONOCE MÁS DETALLES SOBRE LOS BENEFICIOS 2025';
      case '/aranceles':
        return 'CONOCE MÁS DETALLES SOBRE LOS ARANCELES 2025';
      case '/postulaciones':
        return 'REALIZA Y REVISA TUS POSTULACIONES';
      case '/simulador':
        return 'REALIZA UNA SIMULACIÓN DE POSTULACIÓN';
      default:
        return 'POSTULACIONES ABIERTAS ADMISIÓN 2025';
    }
  };

  return (
      <div style={{padding: '20px'}}>
        <NavLink to='/'>
        <img src={UsmLogo} alt="Admisión USM" className='logo-class'/>
        </NavLink>
        <h1>{getHeadingText()}</h1>
      </div>    
  )
}
 
export default BarraLogo
