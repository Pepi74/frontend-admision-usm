import React from 'react'
import Grid from '@mui/material/Grid2';
import UsmLogo from '../assets/postulaciones.jpg'

const styleC = {
  border: '1px solid',
  borderColor: 'divider',
  textAlign: 'center',
  height: '205px',
  width: '100%',
  borderRadius: "10px",
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
  display: 'flex',
  justifyContent: 'initial',
  alignItems: 'end',
  color: '#fff',
}
const Oferta = () => {
  return (
    <>
      <p>A continuación puedes seleccionar los distintos programas que ofrece la Universidad Federico Santa María para revisar sus requisitos de postulación e informaciones</p>
      <div className='contenedor_arancel'>
        <Grid sx={{ ...styleC, padding: 0 }}>
          <a href="https://usm.cl/admision/carreras/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block', height: '100%' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'end', fontWeight: 'bold'}}>
              <img src={UsmLogo} alt="Admisión USM" className='img-arancel' />
              <p style={{ 
                position: 'absolute', 
                color: 'white', 
                borderRadius: '5px',
                textAlign: 'initial',
                fontSize: 'xx-large',
                margin: 0,
                fontWeight: 'bold',
                padding: '10px'
              }}>Carreras Diurnas</p>
            </div>
          </a>
        </Grid>

        <Grid sx={{ ...styleC, padding: 0 }}>
          <a href="https://usm.cl/admision/carreras-vespertinas/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block', height: '100%' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'end' }}>
              <img src={UsmLogo} alt="Admisión USM" className='img-arancel'/>
              <p style={{ 
                position: 'absolute', 
                color: 'white', 
                borderRadius: '5px',
                textAlign: 'initial',
                fontSize: 'xx-large',
                margin: 0,
                fontWeight: 'bold',
                padding: '10px'
              }}>Carreras Vespertinas</p>
            </div>
          </a>
        </Grid>
        <Grid sx={{ ...styleC, padding: 0 }}>
          <a href="https://postgrado.usm.cl/programas/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block', height: '100%' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'end', fontWeight: 'bold'}}>
              <img src={UsmLogo} alt="Admisión USM" className='img-arancel' />
              <p style={{ 
                position: 'absolute', 
                color: 'white', 
                borderRadius: '5px',
                textAlign: 'initial',
                fontSize: 'xx-large',
                margin: 0,
                fontWeight: 'bold',
                padding: '10px'
              }}>Magísteres</p>
            </div>
          </a>
        </Grid>

        <Grid sx={{ ...styleC, padding: 0 }}>
          <a href="https://postgrado.usm.cl/programas/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block', height: '100%' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'end' }}>
              <img src={UsmLogo} alt="Admisión USM" className='img-arancel'/>
              <p style={{ 
                position: 'absolute', 
                color: 'white', 
                borderRadius: '5px',
                textAlign: 'initial',
                fontSize: 'xx-large',
                margin: 0,
                fontWeight: 'bold',
                padding: '10px'
              }}>Doctorados</p>
            </div>
          </a>
        </Grid>
      </div>
    </> 
  )
}

export default Oferta
