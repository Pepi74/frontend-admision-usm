import React from 'react'
import Postulaciones from '../components/postulaciones'
import Postular from '../components/postular'

export const PostulacionesPage = () => {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}> 
        <div style={{backgroundColor: 'green', width: '50%', textAlign: 'center'}}>
            Alerta de que si postulo por DEMRE.cl no es necesario postular por acá
        </div>
    </div>
    <br/>
    <br/>
    <div style={{display: 'flex',flexDirection: 'row', gap: '20px', justifyContent: 'center'}}>
        <Postulaciones/>
        <hr style={{height: '100px', margin: '10px'}}/>
        <Postular/>
    </div>
    </>
  )
}

export default PostulacionesPage
