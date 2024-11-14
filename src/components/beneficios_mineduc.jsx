import React from 'react'

const BeneficiosM = () => {

    return(
        <>
            <div style={{ backgroundColor: '#ecf0f1', padding: '20px 30px', borderRadius: '10px', marginBottom: '30px' }}>
                <h2 style={{ color: '#34495e' }}>Beneficios Mineduc</h2>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a las diferentes alternativas de financiamiento que otorga el Ministerio de Educación (Mineduc), las que se detallan a continuación:</p>
                <div style={{marginLeft:'50px'}}>
                <h3 style={{ fontSize: '1.5rem', color: '#34495e', marginBottom: '10px' }}>Gratuidad</h3>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>Este beneficio es dirigido a las familias correspondientes al <b>60%</b> de menores ingresos de la población, cuyos miembros estudien en instituciones adscritas a este beneficio como la Universidad Técnica Federico Santa María. El beneficio implica que los estudiantes que se adjudican la Gratuidad <b>no deberán pagar el arancel ni la matrícula</b> durante la duración formal de la carrera. Para más información sobre el proceso de postulación visita 
                    <a style={{paddingLeft: '5px'}} target="_blank" rel="noopener noreferrer" href="https://portal.beneficiosestudiantiles.cl/gratuidad">www.gratuidad.cl</a></p>
                <h3 style={{ fontSize: '1.5rem', color: '#34495e', marginBottom: '10px' }}>Becas</h3>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>Una beca es un apoyo económico que entrega el Ministerio de Educación para que puedas financiar parte del costo de tus estudios, cubriendo el total o parte del arancel anual de tu carrera, y en algunos casos, la matrícula.
                Para conocer más sobre cada una de ellas, visita  
                    <a style={{paddingLeft: '5px'}} href="portal.beneficiosestudiantiles.cl/becas/becas-de-arancel" target="_blank" rel="noopener noreferrer">portal.beneficiosestudiantiles.cl/becas/becas-de-arancel</a>.
                </p>
                <h3 style={{ fontSize: '1.5rem', color: '#34495e', marginBottom: '10px' }}>Creditos</h3>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>También puedes obtener apoyo para financiar tu arancel a través de un crédito para la Educación Superior. Estos consisten en préstamos que te ayudan a cubrir parte del costo de tus estudios y que se financian con recursos estatales, los que se entregan a través de una Institución de Educación Superior o con el respaldo del Estado (en el caso del CAE).
                Los Créditos de Educación Superior disponibles son:
                </p>
                <ul>
                    <li>
                    <b>Fondo Solidario de Crédito Universitario</b>
                    <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem' }}>Cubre parte o el total de tu arancel de referencia en universidades tradicionales, en base a tu situación socioeconómica.</p>
                    <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem' }}>Para acceder a este crédito debes pertenecer al <b>80%</b> de la población de menores ingresos del país y obtener un puntaje en la Prueba de Transición Admisión Universitaria (PDT) promedio (pruebas Lenguaje y Matemática) igual o superior a 475 puntos, el año de la postulación o el anterior.</p>
                    <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem'}}>Para más información ingresa a 
                        <a style={{paddingLeft: '5px'}} href="https://portal.beneficiosestudiantiles.cl/becas-y-creditos/fondo-solidario-de-credito-universitario-fscu" target="_blank" rel="noopener noreferrer">https://portal.beneficiosestudiantiles.cl/becas-y-creditos/fondo-solidario-de-credito-universitario-fscu</a>.</p>
                    </li>
                    <li>
                    <b>Crédito con Garantía Estatal (CAE)</b>
                    <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem'}}>Es un beneficio del Estado que se otorga a estudiantes que acrediten mérito académico y que necesitan financiamiento para iniciar o continuar una carrera en instituciones de educación superior acreditadas que formen parte del Sistema de Crédito con Garantía Estatal.</p>
                    <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem'}}>Para acceder al CAE debes cumplir simultáneamente con los siguientes requisitos:</p>
                    <ol>
                        <li>
                        <b>Requisitos legales</b>
                        <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem'}}>Son aquellos dispuestos por la Comisión Ingresa (entidad administradora del crédito) y definen los estudiantes que califican para ser preseleccionados con el CAE. El detalle de estos requisitos puedes encontrarlos en el siguiente enlace:
                        <a style={{paddingLeft: '5px'}} href="https://portal.ingresa.cl/como-postular/requisitos-para-postular/" target="_blank" rel="noopener noreferrer">https://portal.ingresa.cl/como-postular/requisitos-para-postular/</a>.
                        </p>
                        </li>
                        <li>
                        <b>Requisitos institucionales</b>
                        <p style={{paddingLeft: '10px', lineHeight: '1.6', fontSize: '1.1rem'}}>Al mismo tiempo, deberás cumplir con los requisitos que indican las instituciones de educación superior participantes del Sistema de Crédito con Garantía Estatal, para respaldar el uso del CAE. En particular, los requisitos de la USM para utilizar el CAE se encuentran descritos en el siguiente enlace: 
                        <a style={{paddingLeft: '5px'}} href="https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal/" target="_blank" rel="noopener noreferrer">https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal/</a>.
                        </p>
                        </li>
                    </ol>
                    </li>
                </ul>
                </div>
            </div>
        </>
)}

export default BeneficiosM;