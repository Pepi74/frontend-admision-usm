import React, {useState} from 'react'
import Postulaciones from '../components/postulaciones'
import Postular from '../components/postular'

export const PostulacionesPage = () => {

  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
    {showAlert && (
    <div style={{display: 'flex', justifyContent: 'center'}}> 
        <div style={{backgroundColor: '#82C364', height:'150px', width: '50%', textAlign: 'left', borderRadius: '10px', position: 'relative'}}>
        <button 
              onClick={handleCloseAlert} 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              X
            </button>
          <h2 style={{marginLeft:'20px'}}>RECUERDA</h2>
          <p style={{marginLeft:'20px'}}>Si ya postulaste mediante <a href='https://www.demre.cl'>DEMRE.cl</a> no es necesario postular por este sitio.</p>
        </div>
    </div>
    )}
    <br/>
    <br/>
    <div style={{display: 'flex',flexDirection: 'row', gap: '20px', justifyContent: 'center'}}>
        <Postulaciones/>
        <hr style={{margin: '10px'}}/>
        <Postular/>
    </div>
    </>
  )
}

export default PostulacionesPage
