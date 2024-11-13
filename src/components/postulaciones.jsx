import React, { useState } from 'react'

const Postulaciones = () => {

  const [email, setEmail] = useState('');
  const [rut, setRut] = useState('');
  const [nivelAcademico, setNivelAcademico] = useState('');
  const [programaEstudio, setProgramaEstudio] = useState('');
  const [error, setError] = useState('');
  const [showDropdownN, setShowDropdownN] = useState(false);
  const [showDropdownC, setShowDropdownC] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !rut || !nivelAcademico || !programaEstudio) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    alert('Postulación enviada con éxito'); 
    setEmail('');
    setRut('');
    setNivelAcademico('');
    setProgramaEstudio('');
    setError('');
  };

  const nivelesAcademicos = [
    "Seleccione un nivel",
    "Pregrado",
    "Postgrado"
  ];

  const programasEstudio = [
    "Seleccione una carrera",
    "Arquitectura",
    "Construcción Civil",
    "Ingeniería Civil",
    "Ingeniería Civil Ambiental",
    "Ingeniería Civil de Minas",
    "Ingeniería Civil Eléctrica",
    "Ingeniería Civil Electrónica",
    "Ingeniería Civil en Biotecnología",
    "Ingeniería Civil Física",
    "Ingeniería Civil Industrial",
    "Ingeniería Civil Informática",
    "Ingeniería Civil Matemática",
    "Ingeniería Civil Mecánica",
    "Ingeniería Civil Metalúrgica",
    "Ingeniería Civil Plan Común",
    "Ingeniería Civil Química",
    "Ingeniería Civil Telemática",
    "Ingeniería Comercial",
    "Ingeniería en Aviación Comercial",
    "Ingeniería en Biotecnología",
    "Ingeniería en Diseño de Productos",
    "Ingeniería en Fabricación y Diseño Industrial",
    "Ingeniería en Informática",
    "Ingeniería en Mantenimiento Industrial" ,
    "Ingeniería en Prevención de Riesgos Laborales y Ambientales",
    "Licenciatura en Astrofísica",
    "Licenciatura en Ciencias, mención Química",
    "Licenciatura en Física",
    "Químico",
    "Técnico Universitario Dibujante Proyectista",
    "Técnico Universitario en Administración de Empresas",
    "Técnico Universitario en Alimentos",
    "Técnico Universitario en Automatización y Control",
    "Técnico Universitario en Biotecnología",
    "Técnico Universitario en Ciencia de Datos",
    "Técnico Universitario en Construcción",
    "Técnico Universitario en Control del Medio Ambiente",
    "Técnico Universitario en Electricidad",
    "Técnico Universitario en Electrónica",
    "Técnico Universitario en Mecánica Automotriz",
    "Técnico Universitario en Mecánica Industrial",
    "Técnico Universitario en Minería y Metalurgia",
    "Técnico Universitario en Proyectos de Ingeniería",
    "Técnico Universitario en Química, mención Química Analítica",
    "Técnico Universitario en Química, mención Química Industrial",
    "Técnico Universitario en Robótica y Mecatrónica",
    "Técnico Universitario en Telecomunicaciones y Redes"
  ]

  const handleDropdownSelectN = (value) => {
    setNivelAcademico(value === "Seleccione un nivel" ? '' : value);
    setShowDropdownN(false);
  };

  const handleDropdownSelectC = (value) => {
    setProgramaEstudio(value === "Seleccione una carrera" ? '' : value);
    setShowDropdownC(false);
  };

  const toggleDropdownN = () => {
    setShowDropdownN(!showDropdownN);
    if (!showDropdownN) setShowDropdownC(false);
  };

  const toggleDropdownC = () => {
    setShowDropdownC(!showDropdownC);
    if (!showDropdownC) setShowDropdownN(false);
  };

  const closeDropdowns = () => {
    if(showDropdownN) setShowDropdownN(false);
    if(showDropdownC) setShowDropdownC(false);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0px 20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}} onClick={closeDropdowns}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '0px 30px', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Realiza tu postulacion</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}        
        <div style={{paddingTop:'10px'}}>
          <label>
            <b>Correo Electrónico</b>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ width: '100%', margin: '5px 0', padding: '5px', background: '#D9D9D9', borderRadius: '10px'}}
            />
          </label>
        </div>

        <div style={{paddingTop:'10px'}}>
          <label>
            <b>RUT</b>
            <input 
              type="text" 
              value={rut} 
              onChange={(e) => setRut(e.target.value)} 
              required 
              style={{ width: '100%', margin: '5px 0', padding: '5px', background: '#D9D9D9', borderRadius: '10px'}}
            />
          </label>
        </div>

        <div style={{position: 'relative', paddingTop: '10px'}}>
          <label><b>Nivel Académico</b></label>
          <div 
            style={{ 
              width: '100%', 
              margin: '5px 0', 
              cursor: 'pointer', 
              border: '1px solid #000', 
              padding: '5px',
              background: '#D9D9D9', 
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onClick={toggleDropdownN}
          >
            <span>{nivelAcademico || "Seleccione un nivel"}</span>
            <span style={{ marginLeft: '10px' }}>˅</span>
          </div>

          {showDropdownN && (
            <ul 
              style={{ 
                listStyle: 'none', 
                padding: '0', 
                margin: '0', 
                position: 'absolute', 
                top: '100%', 
                left: 0, 
                width: '100%', 
                maxHeight: '21em', 
                overflowY: 'auto', 
                border: '1px solid #ccc',
                background: '#D9D9D9',  
                zIndex: 1,
                borderRadius: '10px'
              }}
            >
              {nivelesAcademicos.map((nivel, index) => (
                <li 
                  key={index} 
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                  onClick={() => handleDropdownSelectN(nivel)} 
                  style={{ height: '3.5rem', display: 'flex', alignItems: 'center', padding: '0 8px', cursor: 'pointer' }}
                >
                  {nivel}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{position: 'relative', paddingTop: '10px'}}>
          <label><b>Programa de Estudio</b></label>
          <div 
            style={{ 
              width: '100%', 
              margin: '5px 0', 
              cursor: 'pointer', 
              border: '1px solid #000', 
              padding: '5px',
              background: '#D9D9D9', 
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onClick={toggleDropdownC}
          >
            <span>{programaEstudio || "Seleccione una carrera"}</span>
            <span style={{ marginLeft: '10px' }}>˅</span>
          </div>

          {showDropdownC && (
            <ul 
              style={{ 
                listStyle: 'none', 
                padding: '0', 
                margin: '0', 
                position: 'absolute', 
                top: '100%', 
                left: 0, 
                width: '100%', 
                maxHeight: '21em', 
                overflowY: 'auto', 
                border: '1px solid #ccc',
                background: '#D9D9D9',  
                zIndex: 1,
                borderRadius: '10px'
              }}
            >
              {programasEstudio.map((programa, index) => (
                <li 
                  key={index} 
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                  onClick={() => handleDropdownSelectC(programa)} 
                  style={{ height: '3.5rem', display: 'flex', alignItems: 'center', padding: '0px 10px', cursor: 'pointer' }}
                >
                  {programa}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" style={{ marginTop: '20px', width: '100%', padding: '10px', background: '#FCD13A', borderRadius: '20px', boxShadow: 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', cursor: 'pointer'}}><b>Enviar Postulación</b></button>
      </form>
    </div>
  )
}

export default Postulaciones
