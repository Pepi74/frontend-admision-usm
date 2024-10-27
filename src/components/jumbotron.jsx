import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import UsmLogo from '../assets/usm-logo.svg';
export const BarraLogo = () => {
  
  return (
      <div style={{padding: '20px'}}>
        <NavLink to='/'>
        <img src={UsmLogo} alt="Admisión USM" className='logo-class'/>
        </NavLink>
        <h1>POSTULACIONES ABIERTAS ADIMISIÓN 2025</h1>
      </div>    
  )
}
 
export default BarraLogo
