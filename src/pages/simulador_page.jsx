import React from 'react'
import Simulador from '../components/simulador'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const HomePage = () => {
  return (
    <>
    <div style={{ marginBottom: '20px' }}>
      <a 
        href="/" 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          textDecoration: 'none', 
          color: '#3498db', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        <ArrowBackIcon style={{ marginRight: '8px' }} />
        Volver a Inicio
      </a>
    </div>
    <Simulador/>
    </>
  )
}

export default HomePage
