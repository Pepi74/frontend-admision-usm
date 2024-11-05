import React from 'react'
import Grid from '@mui/material/Grid2';
import TourVirtualImg from '../assets/carrusel/tour-virtual.jpg';
import { Link } from 'react-router-dom';

const styleC = {
  border: '1px solid',
  borderColor: 'divider',
  textAlign: 'center',
  height: '20vh',
  width: '80vh',
  borderRadius: "10px",
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
  display: 'flex',
  justifyContent: 'initial',
  alignItems: 'end',
  color: '#fff',
}

const Postular = () => {
  return (
    <div style={{ width: '60vh' }}>
      <h2>INFORMACIÓN</h2>
      <p>Cuando hagas tu postulación recibirás un correo electrónico que te permitirá acceder al estado de tus postulaciones.</p>
      <p>Si tienes problemas para acceder al sitio, te recomendamos contactarte a <u>soporte.admision@usm.cl</u> indicando tu RUT.</p>
      <br />
      <h2>TOUR VIRTUAL 360°</h2>
      <Grid container spacing={1} justifyContent={'center'}>
        <Grid component={Link} to="https://tour360.usm.cl/" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${TourVirtualImg}) lightgray 50% / cover no-repeat`}}>
          <p style={{marginLeft:'10px'}}>Ver recorridos virtuales</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Postular
