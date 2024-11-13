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
        <Grid component={Link} to="https://fuas.cl/" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${UsmLogo}) lightgray 50% / cover no-repeat`, textDecoration: 'none'}}>
          <p style={{margin:'10px', fontSize: 'xx-large', fontWeight: 'bold'}}>Beneficios Mineduc</p>
        </Grid>
        <Grid component={Link} to="https://rree.usm.cl/atencion-social-beneficios/beneficios-usm/" sx={{...styleC, background:`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${UsmLogo}) lightgray 50% / cover no-repeat`, textDecoration: 'none'}}>
          <p style={{margin:'10px', fontSize: 'xx-large', fontWeight: 'bold'}}>Beneficios USM</p>
        </Grid>
      </Grid>
      <h1 style={{paddingTop:'50px'}}>Mas información</h1>
      <h2>Beneficios Mineduc</h2>
      <p>Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a las diferentes alternativas de financiamiento que otorga el Ministerio de Educación (Mineduc), las que se detallan a continuación:</p>
      <div style={{marginLeft:'50px'}}>
        <h3>Gratuidad</h3>
        <p>Este beneficio es dirigido a las familias correspondientes al <b>60%</b> de menores ingresos de la población, cuyos miembros estudien en instituciones adscritas a este beneficio como la Universidad Técnica Federico Santa María. El beneficio implica que los estudiantes que se adjudican la Gratuidad <b>no deberán pagar el arancel ni la matrícula</b> durante la duración formal de la carrera. Para más información sobre el proceso de postulación visita 
          <a style={{paddingLeft: '5px'}} target="_blank" rel="noopener noreferrer" href="https://portal.beneficiosestudiantiles.cl/gratuidad">www.gratuidad.cl</a></p>
        <h3>Becas</h3>
        <p>Una beca es un apoyo económico que entrega el Ministerio de Educación para que puedas financiar parte del costo de tus estudios, cubriendo el total o parte del arancel anual de tu carrera, y en algunos casos, la matrícula.
        Para conocer más sobre cada una de ellas, visita  
          <a style={{paddingLeft: '5px'}} href="portal.beneficiosestudiantiles.cl/becas/becas-de-arancel" target="_blank" rel="noopener noreferrer">portal.beneficiosestudiantiles.cl/becas/becas-de-arancel</a>.
        </p>
        <h3>Creditos</h3>
        <p>También puedes obtener apoyo para financiar tu arancel a través de un crédito para la Educación Superior. Estos consisten en préstamos que te ayudan a cubrir parte del costo de tus estudios y que se financian con recursos estatales, los que se entregan a través de una Institución de Educación Superior o con el respaldo del Estado (en el caso del CAE).
        Los Créditos de Educación Superior disponibles son:
        </p>
        <ul>
          <li>
            <b>Fondo Solidario de Crédito Universitario</b>
            <p style={{paddingLeft: '10px'}}>Cubre parte o el total de tu arancel de referencia en universidades tradicionales, en base a tu situación socioeconómica.</p>
            <p style={{paddingLeft: '10px'}}>Para acceder a este crédito debes pertenecer al <b>80%</b> de la población de menores ingresos del país y obtener un puntaje en la Prueba de Transición Admisión Universitaria (PDT) promedio (pruebas Lenguaje y Matemática) igual o superior a 475 puntos, el año de la postulación o el anterior.</p>
            <p style={{paddingLeft: '10px'}}>Para más información ingresa a 
              <a style={{paddingLeft: '5px'}} href="https://portal.beneficiosestudiantiles.cl/becas-y-creditos/fondo-solidario-de-credito-universitario-fscu" target="_blank" rel="noopener noreferrer">https://portal.beneficiosestudiantiles.cl/becas-y-creditos/fondo-solidario-de-credito-universitario-fscu</a>.</p>
          </li>
          <li>
            <b>Crédito con Garantía Estatal (CAE)</b>
            <p style={{paddingLeft: '10px'}}>Es un beneficio del Estado que se otorga a estudiantes que acrediten mérito académico y que necesitan financiamiento para iniciar o continuar una carrera en instituciones de educación superior acreditadas que formen parte del Sistema de Crédito con Garantía Estatal.</p>
            <p style={{paddingLeft: '10px'}}>Para acceder al CAE debes cumplir simultáneamente con los siguientes requisitos:</p>
            <ul>
              <li>
                <b>1.- Requisitos legales</b>
                <p style={{paddingLeft: '10px'}}>Son aquellos dispuestos por la Comisión Ingresa (entidad administradora del crédito) y definen los estudiantes que califican para ser preseleccionados con el CAE. El detalle de estos requisitos puedes encontrarlos en el siguiente enlace:
                <a style={{paddingLeft: '5px'}} href="https://portal.ingresa.cl/como-postular/requisitos-para-postular/" target="_blank" rel="noopener noreferrer">https://portal.ingresa.cl/como-postular/requisitos-para-postular/</a>.
                </p>
                </li>
              <li>
                <b>2.- Requisitos institucionales</b>
                <p>Al mismo tiempo, deberás cumplir con los requisitos que indican las instituciones de educación superior participantes del Sistema de Crédito con Garantía Estatal, para respaldar el uso del CAE. En particular, los requisitos de la USM para utilizar el CAE se encuentran descritos en el siguiente enlace: 
                <a style={{paddingLeft: '5px'}} href="https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal/" target="_blank" rel="noopener noreferrer">https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal/</a>.
                </p>
              </li>
            </ul>
            </li>
        </ul>
      </div>
      <h2>Beneficios Internos </h2>
      <p>Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a diferentes alternativas de ayuda que otorga la universidad, las que se detallan a continuación:</p>
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
