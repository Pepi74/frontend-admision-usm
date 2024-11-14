import React from 'react'
import Beneficios from '../components/beneficios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const BeneficiosPage = () => {
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
    <Beneficios/>
    </>
  )
}

export default BeneficiosPage
