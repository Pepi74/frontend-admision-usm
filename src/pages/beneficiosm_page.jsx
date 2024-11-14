import React from 'react'
import BeneficiosM from '../components/beneficios_mineduc'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const BeneficiosPageM = () => {
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
    <BeneficiosM/>
    </>
  )
}

export default BeneficiosPageM