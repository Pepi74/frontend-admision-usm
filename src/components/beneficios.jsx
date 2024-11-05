import React from 'react'
import Grid from '@mui/material/Grid2';
import UsmLogo from '../assets/postulaciones.jpg';
import { Link } from 'react-router-dom';

const styleC = {
  border: '1px solid',
  borderColor: 'divider',
  textAlign: 'center',
  height: '205px',
  width: '40%',
  borderRadius: "10px",
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
  display: 'flex',
  justifyContent: 'initial',
  alignItems: 'end',
  color: '#fff',
}

const Beneficios = () => {
  return (
    <>
      <h1>Beneficios Estudiantiles</h1>
      <p>Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a las diferentes alternativas de financiamiento que otorga el Ministerio de Educación (Mineduc), las que se detallan a continuación. Por otra parte tambien posee beneficios internos para aquellos alumnos que cumplan los requisitos para postular.</p>
      <h1>Para postular</h1>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid component={Link} to="https://usm.cl/admision/beneficios/" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${UsmLogo}) lightgray 50% / cover no-repeat`, textDecoration: 'none'}}>
          <p style={{margin:'10px', fontSize: 'xx-large', fontWeight: 'bold'}}>Beneficios Mineduc</p>
        </Grid>
        <Grid component={Link} to="https://rree.usm.cl/atencion-social-beneficios/beneficios-usm/" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${UsmLogo}) lightgray 50% / cover no-repeat`, textDecoration: 'none'}}>
          <p style={{margin:'10px', fontSize: 'xx-large', fontWeight: 'bold'}}>Beneficios USM</p>
        </Grid>
      </Grid>
      <h1 style={{paddingTop:'50px'}}>Mas información</h1>
      <h2>Beneficios Mineduc</h2>
      <p>Una beca es un apoyo económico que entrega el Ministerio de Educación para que puedas financiar parte del costo de tus estudios, cubriendo el total o parte del arancel anual de tu carrera, y en algunos casos, la matrícula.También puedes obtener apoyo para financiar tu arancel a través de un crédito para la Educación Superior. Estos consisten en préstamos que te ayudan a cubrir parte del costo de tus estudios y que se financian con recursos estatales, los que se entregan a través de una Institución de Educación Superior o con el respaldo del Estado (en el caso del CAE).</p>
      <div style={{marginLeft:'50px'}}>
        <h3>Becas</h3>
        <p>Descripción de becas</p>
        <h3>Creditos</h3>
        <p>Descripción de creditos</p>
      </div>
      <h2>Beneficios Internos </h2>
      <p>Una beca es un apoyo económico que entrega el Ministerio de Educación para que puedas financiar parte del costo de tus estudios, cubriendo el total o parte del arancel anual de tu carrera, y en algunos casos, la matrícula.También puedes obtener apoyo para financiar tu arancel a través de un crédito para la Educación Superior. Estos consisten en préstamos que te ayudan a cubrir parte del costo de tus estudios y que se financian con recursos estatales, los que se entregan a través de una Institución de Educación Superior o con el respaldo del Estado (en el caso del CAE).</p>
      <div style={{marginLeft:'50px'}}>
        <h3>Becas</h3>
        <p>Descripción de becas</p>
        <h3>Creditos</h3>
        <p>Descripción de creditos</p>
      </div>
    </> 
  )
}

export default Beneficios
