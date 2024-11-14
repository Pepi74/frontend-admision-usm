import React, {useState} from 'react';
import Postulaciones from '../components/postulaciones';
import Postular from '../components/postular';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PostulacionesPage = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <a 
          href="/" 
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
            Volver a Inicio
        </a>
      </div>
      <div style={{paddingBottom: '15em'}}>
        {showAlert && (
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
            <div style={{
                backgroundColor: '#82C364', 
                padding: '20px', 
                width: '50%', 
                borderRadius: '10px', 
                position: 'relative',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
              }}>
              <button 
                onClick={handleCloseAlert} 
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#333'
                }}
              >
                X
              </button>
              <h3 style={{marginTop: '0'}}>Recuerda</h3>
              <p style={{margin: '0'}}>Si ya postulaste mediante <a href='https://www.demre.cl' target="_blank" rel="noopener noreferrer">DEMRE.cl</a> no es necesario postular por este sitio.</p>
            </div>
          </div>
        )}
        <div style={{display: 'flex',flexDirection: 'row', gap: '20px', justifyContent: 'center'}}>
          <Postulaciones/>
          <hr style={{margin: '10px'}}/>
          <Postular/>
        </div>
      </div>
    </>
  );
}

export default PostulacionesPage;
