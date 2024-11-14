import React from 'react'
import BeneficiosU from '../components/beneficios_usm'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const BeneficiosPageU = () => {
  return (
    <>
    <div style={{ marginBottom: '20px' }}>
        <a 
            href="/beneficios" 
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
          Volver a Beneficios
        </a>
    </div>
    <BeneficiosU/>
    </>
  )
}

export default BeneficiosPageU