import React from 'react'
import Grid from '@mui/material/Grid2';
import BeneficiosUImg from '../assets/beneficiosU.jpg';
import BeneficiosMImg from '../assets/beneficiosM.jpg';
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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2c3e50' }}>Beneficios Estudiantiles</h1>
      <p style={{ marginBottom: '30px', lineHeight: '1.6', fontSize: '1.1rem' }}>Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a las diferentes alternativas de financiamiento que otorga el Ministerio de Educación (Mineduc), las que se detallan a continuación. Por otra parte tambien posee beneficios internos para aquellos alumnos que cumplan los requisitos para postular.</p>

      <h2 style={{ paddingBottom: '10px', marginBottom: '20px', color: '#3498db'}}>Información</h2>

      <Grid container spacing={3} justifyContent={'center'}>
        <Grid component={Link} to="/beneficios/mineduc" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${BeneficiosMImg}) lightgray 50% / cover no-repeat`, textDecoration: 'none', marginBottom: '20px'}}>
          <p style={{ margin: '10px', fontSize: 'xx-large', fontWeight: 'bold' }}>Beneficios Mineduc</p>
        </Grid>
        <Grid component={Link} to="/beneficios/internos" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${BeneficiosUImg}) lightgray 50% / cover no-repeat`, textDecoration: 'none'}}>
          <p style={{ margin: '10px', fontSize: 'xx-large', fontWeight: 'bold' }}>Beneficios USM</p>
        </Grid>
      </Grid>
    </> 
  )
}

export default Beneficios
