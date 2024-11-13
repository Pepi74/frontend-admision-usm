import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import Jumbotron from './jumbotron'
export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <>
    <nav className='nav-bar'>
      <div className='nav-bar-container'>
        <a className='nav-bar-a' href='https://www.usm.cl/' target="_blank" rel="noopener noreferrer"> USM.cl </a>
      </div>
      <div className='nav-bar-container'>
        <NavLink className={navLinkClass} to='/'>
          Inicio
        </NavLink>
        <NavLink className={navLinkClass} to='/postulaciones'>
          Postulaciones
        </NavLink>
      </div>
    </nav>
    <Jumbotron/>
    </>
    
  )
}
 
export default NavBar
