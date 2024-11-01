import React, { useState } from 'react';
import { TextField, Button, Grid2, Typography, Box } from '@mui/material';

const styleButtonLimpiar ={
  backgroundColor: 'transparent',
  border: '1px solid #000',
  color: '#000',
  borderRadius: '20px',
}
const styleButtonSimular ={
  backgroundColor: '#FFBF00',
  border: '1px solid #000',
  color: '#000',
  borderRadius: '20px',
}

const FormularioSimulacion = () => {
  // Estado inicial para los campos
  const [formData, setFormData] = useState({
    nem: '',
    ranking: '',
    competenciaLectora: '',
    competenciaMatematica1: '',
    historia: '',
    ciencias: '',
    competenciaMatematica2: ''
  });

  // Manejar cambios en los campos
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Limpiar campos
  const handleClear = () => {
    setFormData({
      nem: '',
      ranking: '',
      competenciaLectora: '',
      competenciaMatematica1: '',
      historia: '',
      ciencias: '',
      competenciaMatematica2: ''
    });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes agregar la lógica para enviar los datos al backend o a otra función
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          {/* Título */}
          <Grid2 item size={{ xs: 12 }}>
            <Typography variant="h6">Simulación de Puntajes</Typography>
          </Grid2>

          {/* Campos del formulario */}
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Notas de Enseñanza Media (NEM)"
              name="nem"
              value={formData.nem}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Ranking"
              name="ranking"
              value={formData.ranking}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Competencia Lectora"
              name="competenciaLectora"
              value={formData.competenciaLectora}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Competencia Matemática 1 (M1)"
              name="competenciaMatematica1"
              value={formData.competenciaMatematica1}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Historia y Ciencias Sociales **"
              name="historia"
              value={formData.historia}
              onChange={handleChange}
              fullWidth
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Ciencias **"
              name="ciencias"
              value={formData.ciencias}
              onChange={handleChange}
              fullWidth
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Competencia Matemática 2 (M2) **"
              name="competenciaMatematica2"
              value={formData.competenciaMatematica2}
              onChange={handleChange}
              fullWidth
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>

          {/* Notas y Botones */}
          <Grid2 item size={{ xs: 12}}>
            <Typography variant="body2" color="textSecondary">
              (*) Campo obligatorio (la nueva escala va desde el 100 al 1000)
            </Typography>
            <Typography variant="body2" color="textSecondary">
              (**) Prueba optativa, omitir si no se rindió.
            </Typography>
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 6}}>
            <Button onClick={handleClear} variant="outlined" style={styleButtonLimpiar} fullWidth>
              Limpiar campos
            </Button>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <Button type="submit" variant="contained" style={styleButtonSimular} fullWidth>
              Hacer simulación
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default FormularioSimulacion;
